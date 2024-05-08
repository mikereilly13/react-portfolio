import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import SkillsPage from './pages/skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path ="/skills" element={<SkillsPage />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);


