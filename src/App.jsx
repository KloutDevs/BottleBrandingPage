/* 
TODO: Add fallback instead of null

Reasons why we use Suspense:

Suspense helps us manage the asynchronous loading of components that wrap
In this case, it is necessary because we have 3D models, which need to load
textures, and also it is necessary to initialize Three.js

This is a good practice for UX

*/

import { Suspense } from 'react';
import './App.css';
import Scene from './components/Scene';
import Labels from './components/Labels';

function App() {
  return (
    <div className="main-container">
      <div className='scene_container'> 
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
      <Labels />
    </div>
  );
}

export default App;