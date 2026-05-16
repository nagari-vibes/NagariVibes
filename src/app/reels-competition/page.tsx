'use client';

import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, Video, ArrowRight, CreditCard, QrCode } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './Competition.module.css';

export default function ReelsCompetition() {
  const [step, setStep] = useState<'info' | 'payment' | 'upload' | 'success'>('info');
  const [formData, setFormData] = useState({ name: '', handle: '', email: '', phone: '', utr: '' });
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
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

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.utr.length !== 12 || !/^\d+$/.test(formData.utr)) {
      setError('Please enter a valid 12-digit UTR number.');
      return;
    }
    setError('');
    setStep('upload');
    window.scrollTo(0, 0);
  };

  const finalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please attach your reel video.');
      return;
    }
    
    setIsUploading(true);
    setError('');
    setProgress(10);

    try {
      const signRes = await fetch('/api/cloudinary-sign', { method: 'POST' });
      const signData = await signRes.json();
      
      if (!signRes.ok) {
        throw new Error(signData.error || 'Failed to get upload signature.');
      }
      
      const { timestamp, signature } = signData;
      setProgress(30);

      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;

      const uploadData = new FormData();
      uploadData.append('file', file);
      uploadData.append('api_key', apiKey!);
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
            reject('Cloudinary upload failed.');
          }
        };
        xhr.onerror = () => reject('Network error.');
        xhr.send(uploadData);
      });

      setProgress(95);

      await fetch('/api/reels-competition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          videoUrl,
          status: 'pending'
        })
      });

      setProgress(100);
      setStep('success');
    } catch (err: any) {
      setError(err.message || 'An error occurred.');
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
          <p className={styles.subtitle}>
            {step === 'info' && "Tell us who you are. Step 1 of 3."}
            {step === 'payment' && "Complete payment to unlock upload. Step 2 of 3."}
            {step === 'upload' && "Drop your hardest hitting reel. Step 3 of 3."}
            {step === 'success' && "Submission Secured."}
          </p>
        </div>
      </div>

      <div className={styles.splitLayout}>
        <div className={styles.promoImageWrapper}>
          <img 
            src="/reels-competition.jpeg" 
            alt="Nagari Vibes Reels Competition" 
            className={styles.promoImage} 
          />
        </div>

        <div className={styles.contentSide}>
          <div className={styles.formContainer}>
            {step === 'info' && (
              <form className={styles.form} onSubmit={handleInfoSubmit}>
                <div className={styles.stepIndicator}>STEP 1: CREATOR DETAILS</div>
                <div className={styles.inputGroup}>
                  <label>Creator Name</label>
                  <input required type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label>Instagram ID</label>
                    <input required type="text" placeholder="@nagarivibes" value={formData.handle} onChange={e => setFormData({...formData, handle: e.target.value})} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input required type="email" placeholder="hello@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone Number</label>
                  <input required type="tel" placeholder="+91 9876543210" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  PROCEED TO PAYMENT <ArrowRight size={20} />
                </button>
              </form>
            )}

            {step === 'payment' && (
              <div className={styles.form}>
                <div className={styles.stepIndicator}>STEP 2: PAYMENT & VERIFICATION</div>
                <div className={styles.paymentBox}>
                  <p>Entry Fee: <strong>₹499</strong></p>
                  <div className={styles.qrWrapper}>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent('upi://pay?pa=8421495454-3@ybl&pn=Nagari Vibes&am=499&cu=INR')}&size=200x200`} alt="QR" />
                  </div>
                  <p className={styles.hintText}>Scan with GPay, PhonePe, or Paytm</p>
                </div>

                <form onSubmit={handlePaymentSubmit}>
                  <div className={styles.inputGroup}>
                    <label>Enter 12-Digit UTR / Transaction ID</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. 412345678901" 
                      maxLength={12}
                      value={formData.utr} 
                      onChange={e => setFormData({...formData, utr: e.target.value})} 
                    />
                  </div>
                  {error && <div className={styles.errorBox}><AlertCircle size={18} /> {error}</div>}
                  <button type="submit" className={styles.submitBtn}>
                    CONFIRM PAYMENT <CreditCard size={20} />
                  </button>
                  <button type="button" className={styles.backBtn} onClick={() => setStep('info')}>Back to Details</button>
                </form>
              </div>
            )}

            {step === 'upload' && (
              <form className={styles.form} onSubmit={finalSubmit}>
                <div className={styles.stepIndicator}>STEP 3: UPLOAD REEL</div>
                <div className={styles.uploadGroup}>
                  <label>Reel Video File (Max 100MB)</label>
                  <div className={`${styles.dropzone} ${file ? styles.hasFile : ''}`}>
                    <input type="file" accept="video/*" onChange={handleFileChange} disabled={isUploading} id="file-upload" className={styles.fileInput} />
                    <label htmlFor="file-upload" className={styles.dropzoneLabel}>
                      {file ? (
                        <>
                          <Video size={32} className={styles.uploadIcon} />
                          <span className={styles.fileName}>{file.name}</span>
                        </>
                      ) : (
                        <>
                          <Upload size={32} className={styles.uploadIcon} />
                          <span>Choose Reel to Upload</span>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {error && <div className={styles.errorBox}><AlertCircle size={18} /> {error}</div>}

                {isUploading && (
                  <div className={styles.progressContainer}>
                    <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: `${progress}%` }}></div></div>
                    <span>Uploading... {progress}%</span>
                  </div>
                )}

                <button type="submit" className={styles.submitBtn} disabled={isUploading || !file}>
                  {isUploading ? 'UPLOADING...' : 'SUBMIT ENTRY'}
                </button>
              </form>
            )}

            {step === 'success' && (
              <div className={styles.successState}>
                <CheckCircle size={64} className={styles.successIcon} />
                <h2>SUBMISSION SECURED</h2>
                <p>Your reel and payment details (UTR: {formData.utr}) have been received. We will verify your payment and contact you shortly.</p>
                <button className={styles.btn} onClick={() => window.location.reload()}>SUBMIT ANOTHER ENTRY</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
