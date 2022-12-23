import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './App';
import './index.css';
import { projects } from './data';
import { skills } from './data';
import { socialImages } from './data';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <App
    projects={projects}
    skills={skills}
    socialImages={socialImages}
  />
);
