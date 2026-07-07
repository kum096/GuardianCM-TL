import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error("React Mounting Error:", error);
    container.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>System Error</h1><p>Failed to initialize GuardianCM platform.</p></div>';
  }
} else {
  console.error("Root container #root not found in the DOM.");
}
