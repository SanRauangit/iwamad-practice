import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { Footer } from './components/Footer';
import type { Skill } from './components/SkillBadge';
import './App.css';

function App() {
  const userSkills: Skill[] = [
    { id: 1, label: 'React' },
    { id: 2, label: 'TypeScript' },
    { id: 3, label: 'Tailwind CSS' },
    { id: 4, label: 'HTML5/CSS3' },
    { id: 5, label: 'JavaScript' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between items-center p-4">
      <Header title="Student Profile" />
      
      <main className="w-full flex justify-center items-center flex-grow">
        <ProfileCard
          name="Rauan Santybayev"
          role="IT Management Student"
          bio="Passionate about web development and IT management. Building modern web applications with React, TypeScript, and Tailwind CSS."
          avatarUrl="/avatar.png"
          email="student@university.edu"
          githubUrl="https://github.com/SanRauangit"
          skills={userSkills}
        />
      </main>

      <Footer copyrightText="© 2026 Rauan Santybayev. All rights reserved." />
    </div>
  );
}

export default App;