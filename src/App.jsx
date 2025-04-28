/* 
TODO: Añadir fallback en lugar de null

Razones por las que usamos Suspense:

Suspense nos ayuda a manejar la carga asíncrona de los componentes que envuelve
En este caso es necesario porque tenemos modelos 3D, los cuales necesitan cargar
texturas, y además es necesario inicializar Three.js

Esto es una buena práctica para de UX

*/

import { Suspense } from 'react';
import './App.css';
import Scene from './components/Scene';

function App() {
  return (
    <>
      <div id={'bg_container'} className={'container'}>
        <div className={'wrapper'}>
          
          {/* Maneja la carga asíncrona*/}
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
