
import { useEffect, useState } from 'react';
import { socket } from './socket';

import './App.css'
import { Chat } from './pages/chat';

function App() {
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App
