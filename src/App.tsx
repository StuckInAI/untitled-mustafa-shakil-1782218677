import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import PromptBuilder from '@/pages/PromptBuilder';
import ProjectDetail from '@/pages/ProjectDetail';
import Profile from '@/pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<PromptBuilder />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
