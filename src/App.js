import React from 'react';
import { ProfileCard } from './components/profile-card';

function App() {
  return (
    <div>
      <ProfileCard
        name="Josh Kuttler"
        description="Software & Web Developer 💫 💻"
        lables={['Software developer', 'Web developer', 'Open source']}
        imageLink="https://avatars0.githubusercontent.com/u/35892475?s=460&u=fbddc73a68a4ded57cb84efba874d2fee62626de&v=4"
      />
    </div>
  );
}

export default App;
