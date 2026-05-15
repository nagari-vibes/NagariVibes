'use client';

import { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import { Plus, Trash2, Edit2, LogOut } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  featured: boolean;
}

interface CompetitionEntry {
  id: string;
  name: string;
  handle: string;
  email: string;
  phone?: string;
  videoUrl: string;
  createdAt: string;
  status?: 'approved' | 'denied' | 'pending';
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'projects' | 'entries' | 'leads'>('projects');
  const [entries, setEntries] = useState<CompetitionEntry[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [viewingVideo, setViewingVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    imageUrl: '',
    featured: true
  });

  // Simple hardcoded login for demo
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === 'admin' && password.trim().toLowerCase() === 'vibes2026') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch('/api/projects')
        .then(res => res.json())
        .then(data => setProjects(data));
      
      fetch('/api/reels-competition')
        .then(res => res.json())
        .then(data => setEntries(data));
        
      fetch('/api/leads')
        .then(res => res.json())
        .then(data => setLeads(data));
    }
  }, [isLoggedIn]);

  const deleteProject = async (id: string) => {
    if (confirm('Are you sure?')) {
      await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const updateEntryStatus = async (id: string, status: 'approved' | 'denied') => {
    try {
      await fetch(`/api/reels-competition/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      setEntries(entries.map(e => e.id === id ? { ...e, status } : e));
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const openModal = (project?: Project) => {
    if (project) {
      setEditingId(project.id);
      setFormData({
        title: project.title,
        description: project.description || '',
        category: project.category,
        imageUrl: project.imageUrl,
        featured: project.featured
      });
    } else {
      setEditingId(null);
      setFormData({ title: '', description: '', category: '', imageUrl: '', featured: true });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const res = await fetch(`/api/projects/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const updated = await res.json();
      setProjects(projects.map(p => p.id === editingId ? updated : p));
    } else {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const created = await res.json();
      setProjects([created, ...projects]);
    }
    setIsModalOpen(false);
  };

  if (!isLoggedIn) {
    return (
      <div className={styles.loginPage}>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <h1 className="mono" style={{ marginBottom: '2rem' }}>Admin Access</h1>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className={styles.loginBtn}>Enter Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className="mono">Control Center</h1>
            <div className={styles.tabs}>
              <button className={`${styles.tabBtn} ${activeTab === 'projects' ? styles.activeTab : ''}`} onClick={() => setActiveTab('projects')}>Projects</button>
              <button className={`${styles.tabBtn} ${activeTab === 'entries' ? styles.activeTab : ''}`} onClick={() => setActiveTab('entries')}>Reels Entries</button>
              <button className={`${styles.tabBtn} ${activeTab === 'leads' ? styles.activeTab : ''}`} onClick={() => setActiveTab('leads')}>Contact Leads</button>
            </div>
          </div>
          <button className={styles.logoutBtn} onClick={() => setIsLoggedIn(false)}>
            <LogOut size={18} /> Logout
          </button>
        </header>

      <main className={styles.main}>
        {activeTab === 'projects' ? (
          <>
            <section className={styles.stats}>
              <div className={styles.statCard}>
                <span>Total Projects</span>
                <h2>{projects.length}</h2>
              </div>
              <div className={styles.statCard}>
                <span>Featured</span>
                <h2>{projects.filter(p => p.featured).length}</h2>
              </div>
            </section>

            <div className={styles.projectsHeader}>
              <h2>Project Management</h2>
              <button className={styles.addBtn} onClick={() => openModal()}><Plus size={18} /> Add New Project</button>
            </div>

            <div className={styles.projectList}>
              {projects.map(project => (
                <div key={project.id} className={styles.projectItem}>
                  <img src={project.imageUrl} alt="" className={styles.thumb} />
                  <div className={styles.itemInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                  <div className={styles.itemActions}>
                    <button className={styles.editBtn} onClick={() => openModal(project)}><Edit2 size={16} /></button>
                    <button className={styles.delBtn} onClick={() => deleteProject(project.id)}><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : activeTab === 'entries' ? (
          <div className={styles.entriesSection}>
            <div className={styles.projectsHeader}>
              <h2>Reels Competition Entries</h2>
              <span className={styles.entryCount}>{entries.length} Total</span>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.excelTable}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Creator Name</th>
                    <th>IG Handle</th>
                    <th>Email / Phone</th>
                    <th>Video File</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>No entries found.</td>
                    </tr>
                  ) : (
                    entries.map(entry => (
                      <tr key={entry.id}>
                        <td className="mono" style={{ fontSize: '0.8rem' }}>...{entry.id.slice(-6)}</td>
                        <td>{new Date(entry.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                        <td><strong>{entry.name}</strong></td>
                        <td><a href={`https://instagram.com/${entry.handle.replace('@', '')}`} target="_blank" rel="noreferrer" className={styles.tableLink}>{entry.handle}</a></td>
                        <td>
                          <a href={`mailto:${entry.email}`} className={styles.tableLink} style={{display: 'block'}}>{entry.email}</a>
                          {entry.phone && <span className="mono" style={{fontSize: '0.8rem', color: '#aaa'}}>{entry.phone}</span>}
                        </td>
                        <td><button onClick={() => setViewingVideo(entry.videoUrl)} className={styles.tableLink} style={{background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem'}}>View Reel ↗</button></td>
                        <td>
                          <span style={{
                            padding: '0.2rem 0.6rem', 
                            borderRadius: '4px', 
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            background: entry.status === 'approved' ? 'rgba(0,255,0,0.1)' : entry.status === 'denied' ? 'rgba(255,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                            color: entry.status === 'approved' ? '#00ff00' : entry.status === 'denied' ? '#ff3333' : '#aaa'
                          }}>
                            {entry.status || 'Pending'}
                          </span>
                        </td>
                        <td>
                          {(!entry.status || entry.status === 'pending') ? (
                            <div style={{display: 'flex', gap: '0.5rem'}}>
                              <button onClick={() => updateEntryStatus(entry.id, 'approved')} style={{background: '#00ff00', color: '#000', border: 'none', padding: '0.3rem 0.6rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}}>Approve</button>
                              <button onClick={() => updateEntryStatus(entry.id, 'denied')} style={{background: '#ff3333', color: '#fff', border: 'none', padding: '0.3rem 0.6rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}}>Deny</button>
                            </div>
                          ) : (
                            <span style={{ color: '#666', fontSize: '0.85rem', fontStyle: 'italic' }}>Action Taken</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className={styles.entriesSection}>
            <div className={styles.projectsHeader}>
              <h2>Contact Form Leads</h2>
              <span className={styles.entryCount}>{leads.length} Total</span>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.excelTable}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>No leads found.</td>
                    </tr>
                  ) : (
                    leads.map(lead => (
                      <tr key={lead.id}>
                        <td className="mono" style={{ fontSize: '0.8rem' }}>...{lead.id.slice(-6)}</td>
                        <td>{new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                        <td><strong>{lead.name}</strong></td>
                        <td><a href={`mailto:${lead.email}`} className={styles.tableLink}>{lead.email}</a></td>
                        <td style={{ maxWidth: '300px', whiteSpace: 'normal', color: '#ccc' }}>{lead.message}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2 className="mono">{editingId ? 'Edit Project' : 'New Project'}</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>Title</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className={styles.inputGroup}>
                <label>Category</label>
                <input required type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
              </div>
              <div className={styles.inputGroup}>
                <label>Image URL</label>
                <input required type="text" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} />
              </div>
              <div className={styles.inputGroup}>
                <label>Description</label>
                <input type="text" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>
              <div className={styles.checkboxGroup}>
                <input type="checkbox" id="featured" checked={formData.featured} onChange={e => setFormData({...formData, featured: e.target.checked})} />
                <label htmlFor="featured">Featured Project (Shows on Homepage)</label>
              </div>
              <div className={styles.modalActions}>
                <button type="button" className={styles.cancelBtn} onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className={styles.loginBtn}>{editingId ? 'Save Changes' : 'Create'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {viewingVideo && (
        <div className={styles.modalOverlay} onClick={() => setViewingVideo(null)}>
          <div className={styles.videoModal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className="mono">Reel Viewer</h2>
              <button className={styles.closeBtn} onClick={() => setViewingVideo(null)}>Close</button>
            </div>
            <video 
              src={viewingVideo.replace(/\.[^/.]+$/, ".mp4")} 
              controls 
              autoPlay 
              className={styles.videoPlayer}
            />
          </div>
        </div>
      )}
    </div>
  );
}
