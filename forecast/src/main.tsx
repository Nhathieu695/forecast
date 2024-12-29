import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

const AppMain: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    
    </Routes>
  </BrowserRouter>
);
