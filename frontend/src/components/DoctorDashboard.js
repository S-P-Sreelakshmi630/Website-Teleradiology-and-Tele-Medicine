import React, { useState, useRef } from 'react';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [prescription, setPrescription] = useState('');
  const [videoBlob, setVideoBlob] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    mediaRecorderRef.current = new MediaRecorder(stream);
    
    const chunks = [];
    mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
    
    mediaRecorderRef.current.onstop = () => {
      const videoBlob = new Blob(chunks, { type: 'video/webm' });
      setVideoBlob(videoBlob);
      const videoFile = new File([videoBlob], 'patient_video.webm', { type: 'video/webm' });
      setVideoFile(videoFile);  
    };
    
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    setIsRecording(false);
  };

  const handlePrescriptionChange = (e) => {
    setPrescription(e.target.value);
  };

  const handleSendPrescription = () => {
    alert('Prescription sent successfully!');
    setPrescription('');
  };

  const handleUploadVideo = async () => {
    if (!videoFile) {
      alert('No video recorded yet!');
      return;
    }

    // Example: Upload the videoFile to a server
    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('patientId', '12345');  // Example additional data

    // Replace this with your actual upload endpoint
    const response = await fetch('https://your-server-endpoint.com/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Video uploaded successfully!');
    } else {
      alert('Video upload failed!');
    }
  };

  return (
    <div className="doctor-dashboard">
      <h1 className="welcome-msg">Welcome to MediConnect</h1>
      <div className="notification">
        <p>You have patients to treat today!</p>
      </div>
      
      <div className="doctor-info">
        <p className="doctor-name">Dr. Alan Carter</p>
        <p className="patient-name">Patient: Sree</p>
      </div>

      <div className="patient-image-section">
        {/* Use a static image path */}
        <img src="/images/image5.jpg" alt="Patient" className="patient-img" />
      </div>

      <div className="video-call-section">
        <h2>Video Call with Patient</h2>
        <video ref={videoRef} className="video-preview" autoPlay muted></video>
        <div className="video-controls">
          {isRecording ? (
            <button className="btn stop-btn" onClick={handleStopRecording}>Stop Recording</button>
          ) : (
            <button className="btn start-btn" onClick={handleStartRecording}>Start Video Call</button>
          )}
        </div>
      </div>

      <div className="prescription-section">
        <h2>Write Prescription</h2>
        <textarea
          className="prescription-input"
          value={prescription}
          onChange={handlePrescriptionChange}
          placeholder="Write your prescription here..."
        />
      </div>

      {videoBlob && (
        <div className="video-preview-section">
          <h3>Recorded Video</h3>
          <video controls className="video-preview">
            <source src={URL.createObjectURL(videoBlob)} type="video/webm" />
          </video>
        </div>
      )}

      <div className="action-buttons">
        <button className="btn send-btn" onClick={handleSendPrescription}>Send Prescription</button>
        <button className="btn upload-btn" onClick={handleUploadVideo}>Upload Video</button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
