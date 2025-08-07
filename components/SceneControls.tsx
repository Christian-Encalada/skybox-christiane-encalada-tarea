import React from 'react';

interface SceneControlsProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setLightType: (type: number) => void;
  lightType: number;
}

export default function SceneControls({ isPlaying, setIsPlaying, setLightType, lightType }: SceneControlsProps) {
  return (
    <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10, background: 'rgba(255,255,255,0.92)', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', minWidth: 220, fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: 10, fontWeight: 600, fontSize: 16, color: '#222' }}>
        Movimiento: <span style={{ color: isPlaying ? '#0a0' : '#c00', fontWeight: 700 }}>{isPlaying ? 'On' : 'Off'}</span>
      </div>
      <button onClick={() => setIsPlaying((p) => !p)} style={{ padding: '8px 16px', fontSize: '15px', marginBottom: 14, width: '100%', borderRadius: 6, border: '1px solid #ccc', background: '#002342', cursor: 'pointer', fontWeight: 500 }}>
        {isPlaying ? 'Pausar animación' : 'Reanudar animación'}
      </button>
      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 500 }}>Iluminación:</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setLightType(1)} style={{ padding: '6px 12px', borderRadius: 6, border: lightType === 1 ? '2px solid #002342' : '1px solid #ccc', background: lightType === 1 ? '#e0f0ff' : '#002342', cursor: 'pointer', fontWeight: 500 }}>1</button>
          <button onClick={() => setLightType(2)} style={{ padding: '6px 12px', borderRadius: 6, border: lightType === 2 ? '2px solid #002342' : '1px solid #ccc', background: lightType === 2 ? '#e0f0ff' : '#002342', cursor: 'pointer', fontWeight: 500 }}>2</button>
          <button onClick={() => setLightType(3)} style={{ padding: '6px 12px', borderRadius: 6, border: lightType === 3 ? '2px solid #002342' : '1px solid #ccc', background: lightType === 3 ? '#e0f0ff' : '#002342', cursor: 'pointer', fontWeight: 500 }}>3</button>
        </div>
      </div>
      <div style={{ marginTop: 18, borderTop: '1px solid #eee', paddingTop: 10, fontSize: 13, color: '#444' }}>
        <div><b>Controles:</b></div>
        <div>mover cámara: <b>mouse</b></div>
        <div>iluminación: <b>1, 2 y 3</b></div>
      </div>
    </div>
  );
}