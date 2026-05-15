'use client';

import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, Video } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './Competition.module.css';

export default function ReelsCompetition() {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({ name: '', handle: '', email: '', phone: '' });
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 104857600) {
        setError('File exceeds the 100MB limit.');
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please attach a video file.');
      return;
    }
    
    // Open payment modal instead of uploading directly
    setIsPaymentModalOpen(true);
  };

  const processSubmission = async () => {
    if (!file) {
      setError('Please attach a video file.');
      return;
    }
    setIsPaymentModalOpen(false);
    setIsUploading(true);
    setError('');
    setProgress(10);

    try {
      const signRes = await fetch('/api/cloudinary-sign', { method: 'POST' });
      const signData = await signRes.json();
      
      if (!signRes.ok) {
        throw new Error(signData.error || 'Failed to get upload signature. Is Cloudinary configured in env?');
      }
      
      const { timestamp, signature } = signData;
      setProgress(30);

      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;

      if (!cloudName || !apiKey) {
        throw new Error('Cloudinary public keys are missing in environment variables.');
      }

      const uploadData = new FormData();
      uploadData.append('file', file);
      uploadData.append('api_key', apiKey);
      uploadData.append('timestamp', timestamp.toString());
      uploadData.append('signature', signature);

      const videoUrl = await new Promise<string>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`);
        
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 60) + 30;
            setProgress(percent);
          }
        };

        xhr.onload = () => {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            resolve(response.secure_url);
          } else {
            reject('Cloudinary upload failed. Check your API keys and upload settings.');
          }
        };
        xhr.onerror = () => reject('Network error during upload.');
        xhr.send(uploadData);
      });

      setProgress(95);

      await fetch('/api/reels-competition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          videoUrl
        })
      });

      setProgress(100);
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || err || 'An error occurred during upload.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main className={styles.main}>
      <Header />
      
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>NAGARI VIBES <span className={styles.accent}>REELS CLASH</span></h1>
          <p className={styles.subtitle}>Submit your hardest hitting reel. Max file size: 100MB.</p>
        </div>
      </div>

      <div className={`container ${styles.formContainer}`}>
        {isSuccess ? (
          <div className={styles.successState}>
            <CheckCircle size={64} className={styles.successIcon} />
            <h2>SUBMISSION SECURED</h2>
            <p>Your reel has been uploaded to our servers. We will contact you via email or Instagram if you are selected.</p>
            <button className={styles.btn} onClick={() => {
              setIsSuccess(false);
              setFile(null);
              setFormData({ name: '', handle: '', email: '', phone: '' });
              setProgress(0);
            }}>Submit Another Entry</button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {error && (
              <div className={styles.errorBox}>
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}
            
            <div className={styles.inputGroup}>
              <label>Creator Name</label>
              <input 
                required 
                type="text" 
                placeholder="John Doe"
                value={formData.name} 
                onChange={e => setFormData({...formData, name: e.target.value})} 
                disabled={isUploading}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Instagram Handle</label>
                <input 
                  required 
                  type="text" 
                  placeholder="@nagarivibes"
                  value={formData.handle} 
                  onChange={e => setFormData({...formData, handle: e.target.value})} 
                  disabled={isUploading}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input 
                  required 
                  type="email" 
                  placeholder="hello@example.com"
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                  disabled={isUploading}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input 
                required 
                type="tel" 
                placeholder="+91 9876543210"
                value={formData.phone} 
                onChange={e => setFormData({...formData, phone: e.target.value})} 
                disabled={isUploading}
              />
            </div>

            <div className={styles.uploadGroup}>
              <label>Reel Video File (MP4, MOV)</label>
              <div className={`${styles.dropzone} ${file ? styles.hasFile : ''}`}>
                <input 
                  type="file" 
                  accept="video/*" 
                  onChange={handleFileChange}
                  disabled={isUploading}
                  id="file-upload"
                  className={styles.fileInput}
                />
                <label htmlFor="file-upload" className={styles.dropzoneLabel}>
                  {file ? (
                    <>
                      <Video size={32} className={styles.uploadIcon} />
                      <span className={styles.fileName}>{file.name}</span>
                      <span className={styles.fileSize}>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                    </>
                  ) : (
                    <>
                      <Upload size={32} className={styles.uploadIcon} />
                      <span>Click or Drag to Upload Reel</span>
                      <span className={styles.limitText}>Max 100MB</span>
                    </>
                  )}
                </label>
              </div>
            </div>

            {isUploading && (
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
                </div>
                <span className="mono">Uploading... {progress}%</span>
              </div>
            )}

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={isUploading || !file}
            >
              {isUploading ? 'UPLOADING...' : 'SUBMIT REEL'}
            </button>
          </form>
        )}
      </div>

      <Footer />

      {isPaymentModalOpen && (
        <div className={styles.paymentModalOverlay}>
          <div className={styles.paymentModal}>
            <h2 className="mono" style={{marginBottom: '1rem'}}>Complete Payment</h2>
            <p style={{marginBottom: '1rem', color: '#ccc'}}>Entry Fee: <strong>₹500</strong></p>
            <div style={{background: '#fff', padding: '1rem', borderRadius: '8px', display: 'inline-block', marginBottom: '1.5rem'}}>
              <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent('upi://pay?pa=tejas@upi&pn=Nagari Vibes&am=500&cu=INR')}&size=200x200`} alt="UPI QR Code" style={{width: '200px', height: '200px'}} />
            </div>
            <p style={{fontSize: '0.9rem', color: '#aaa', marginBottom: '2rem'}}>Scan with Google Pay, PhonePe, or Paytm.</p>
            
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <button 
                type="button" 
                onClick={() => setIsPaymentModalOpen(false)}
                style={{background: 'transparent', border: '1px solid #444', color: '#fff', padding: '0.8rem 1.5rem', cursor: 'pointer', borderRadius: '4px'}}
              >
                Cancel
              </button>
              <button 
                type="button" 
                onClick={processSubmission}
                style={{background: 'var(--primary)', border: 'none', color: '#000', padding: '0.8rem 1.5rem', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px'}}
              >
                I Have Paid
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
