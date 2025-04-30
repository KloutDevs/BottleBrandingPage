import { useDevInfo } from './DevContext';
import { memo } from 'react';

const Overlay = memo(function Overlay({ isDebugMode }) {
  const { debugInfo } = useDevInfo();

  if (!isDebugMode || !debugInfo) return null;

  return (
    <div className="absolute top-0 text-white font-mono text-sm z-50">
      <pre>
        {Object.entries(debugInfo).map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ))}
      </pre>
    </div>
  );
});

export default Overlay;
