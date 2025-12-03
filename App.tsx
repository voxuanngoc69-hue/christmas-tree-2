import React, { Suspense } from 'react';
import { Scene } from './components/Scene';
import { Overlay } from './components/Overlay';

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#010403] text-[#FFD700]">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="w-12 h-12 border-2 border-[#FFD700] border-t-transparent rounded-full animate-spin"></div>
        <span className="font-serif-display tracking-widest text-sm uppercase">Loading Experience</span>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#010403]">
      <Overlay />
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </div>
  );
};

export default App;