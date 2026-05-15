'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Grid, LayoutGrid, Layers, Grip, Component, 
  Blocks, Box, Network, Menu, AlignLeft, 
  Compass, PanelLeft, AppWindow, Library, 
  FolderTree, Hexagon, Orbit, Boxes, Package
} from 'lucide-react';

export default function IconPreview() {
  const icons = [
    { name: 'Grid', component: Grid },
    { name: 'LayoutGrid', component: LayoutGrid },
    { name: 'Layers', component: Layers },
    { name: 'Grip', component: Grip },
    { name: 'Component', component: Component },
    { name: 'Blocks', component: Blocks },
    { name: 'Box', component: Box },
    { name: 'Boxes', component: Boxes },
    { name: 'Package', component: Package },
    { name: 'Network', component: Network },
    { name: 'Menu', component: Menu },
    { name: 'AlignLeft', component: AlignLeft },
    { name: 'Compass', component: Compass },
    { name: 'PanelLeft', component: PanelLeft },
    { name: 'AppWindow', component: AppWindow },
    { name: 'Library', component: Library },
    { name: 'FolderTree', component: FolderTree },
    { name: 'Hexagon', component: Hexagon },
    { name: 'Orbit', component: Orbit },
  ];

  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', color: '#fff', paddingBottom: '100px' }}>
      <Header />
      <div className="container" style={{ paddingTop: '150px' }}>
        <h1 className="mono" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Icon Preview</h1>
        <p style={{ color: '#aaa', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Select the best icon for the Sub-Brand Drawer.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '2rem'
        }}>
          {icons.map((icon) => {
            const IconComponent = icon.component;
            return (
              <div key={icon.name} style={{
                background: '#111',
                border: '1px solid #333',
                borderRadius: '12px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d4af37';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <IconComponent size={32} color="#d4af37" />
                <span className="mono" style={{ fontSize: '0.9rem', color: '#ccc' }}>{icon.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
