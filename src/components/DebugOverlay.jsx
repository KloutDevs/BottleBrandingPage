import React from 'react';

export function DebugOverlay({ debugInfo }) {
  return (
    <div style={{
      position: 'fixed',
      top: 10,
      left: 10,
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      fontFamily: 'monospace',
      zIndex: 9999,
      minWidth: '200px'
    }}>
      <div>Page: {debugInfo.page}</div>
      <div>Progress: {debugInfo.progress}</div>
      <div>Offset: {debugInfo.offset}</div>
      <div>Direction: {debugInfo.direction}</div>
      <div>Is Animating: {debugInfo.isAnimating ? 'true' : 'false'}</div>
      <div>Target Page: {debugInfo.targetPage}</div>
      <div>Target Offset: {debugInfo.targetOffset}</div>
      <div style={{ 
        marginTop: '10px', 
        padding: '5px', 
        background: debugInfo.isAnimating ? '#ff4444' : '#44ff44' 
      }}>
        Status: {debugInfo.isAnimating ? 'ANIMATING' : 'IDLE'}
      </div>
    </div>
  );
}