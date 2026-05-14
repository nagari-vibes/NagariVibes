import React from 'react';
import Link from 'next/link';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#050505', color: '#fff', textAlign: 'center', padding: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textTransform: 'uppercase' }}>{title}</h1>
        <p style={{ color: '#888', marginBottom: '2rem' }}>Coming soon to the Vibes Network.</p>
        <Link href="/" style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Media Hub</Link>
      </div>
    </main>
  );
}
