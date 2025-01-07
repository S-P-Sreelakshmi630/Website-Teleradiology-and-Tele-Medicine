import React, { useState, useRef } from 'react';
import './LabDashboard.css';

const LabDashboard = () => {
  const [testResults, setTestResults] = useState('');
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
      const videoFile = new File([videoBlob], 'lab_video.webm', { type: 'video/webm' });
      setVideoFile(videoFile); 
    };

    mediaRecorderRef.current.start();
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
  };

  const handleUploadVideo = async () => {
    if (!videoFile) {
      alert('No video recorded yet!');
      return;
    }

    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('labId', '67890'); // Example data

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

  const handleTestResultsChange = (e) => {
    setTestResults(e.target.value);
  };

  const handleSubmitResults = () => {
    alert('Test results submitted successfully!');
    setTestResults('');
  };

  return (
    <div className="lab-dashboard">
      <h1 className="welcome-msg">Welcome to MediConnect</h1>
      <div className="notification">
        <p>Tests are pending for processing today!</p>
      </div>

      <div className="lab-info">
        <p className="lab-name">Lab: Elite Diagnostics</p>
        <p className="patient-name">Patient: Sree</p>
      </div>

      <div className="patient-image-section">
        <img src="/images/mri.jpg" alt="Patient" className="patient-img" />
      </div>

      <div className="video-call-section">
        <h2>Video Interaction</h2>
        <video ref={videoRef} className="video-preview" autoPlay muted></video>
        <div className="video-controls">
          <button className="btn start-btn" onClick={handleStartRecording}>
            Start Video Recording
          </button>
          <button className="btn stop-btn" onClick={handleStopRecording}>
            Stop Recording
          </button>
        </div>
      </div>

      {videoBlob && (
        <div className="video-preview-section">
          <h3>Recorded Video</h3>
          <video controls className="video-preview">
            <source src={URL.createObjectURL(videoBlob)} type="video/webm" />
          </video>
        </div>
      )}

      <div className="test-results-section">
        <h2>Submit Test Results</h2>
        <textarea
          className="results-input"
          value={testResults}
          onChange={handleTestResultsChange}
          placeholder="Enter test results here..."
        />
      </div>

      <div className="action-buttons">
        <button className="btn submit-btn" onClick={handleSubmitResults}>
          Submit Results
        </button>
        <button className="btn upload-btn" onClick={handleUploadVideo}>
          Upload Video
        </button>
      </div>
    </div>
  );
};

export default LabDashboard;
