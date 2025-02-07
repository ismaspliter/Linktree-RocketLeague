import React, { useState, useEffect } from 'react';
import Field from './components/Field';
import Ball from './components/Ball';
import SocialIcon from './components/SocialIcon';
import Explosion from './components/Explosion';
import Countdown from './components/Countdown';
import Scoreboard from './components/Scoreboard';
import Footer from './components/Footer';
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub, FaReddit, FaCloud } from 'react-icons/fa6';


const App = () => {
  const [ballPosition, setBallPosition] = useState({ x: 200, y: 150 });
  const [ballVelocity, setBallVelocity] = useState({ x: 2, y: 1 });
  const [isGoal, setIsGoal] = useState(false);
  const [explosionPosition, setExplosionPosition] = useState(null);
  const [iconsVisible, setIconsVisible] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [score, setScore] = useState({ blue: 0, orange: 0 });

  const socialIcons = [
    { Icon: FaXTwitter, x: 90, y: 150, color: "#3b82f6", team: "blue", name: "Twitter" , link: "https://x.com/Ismaspliter"},
    { Icon: FaInstagram, x: 60, y: 60, color: "#3b82f6", team: "blue", name: "Instagram", link: "https://www.instagram.com/ismaspliter" },
    { Icon: FaLinkedin, x: 60, y: 240, color: "#3b82f6", team: "blue", name: "LinkedIn" , link: "https://www.linkedin.com/in/ismael-moran-gomez-037879108" },
    { Icon: FaGithub, x: 310, y: 150, color: "#f97316", team: "orange", name: "GitHub" , link: "https://github.com/ismaspliter/"},
    { Icon: FaReddit, x: 340, y: 60, color: "#f97316", team: "orange", name: "Reddit", link: "https://www.reddit.com/user/IsmaSpliter/"  },
    { Icon: FaCloud, x: 340, y: 240, color: "#f97316", team: "orange", name: "BlueSky", link: "https://bsky.app/profile/ismaspliter.bsky.social" }
  ];

  const checkGoal = (x, y) => {
    if (x <= 30 && y >= 110 && y <= 190) {
      setExplosionPosition({ x: 30, y: 150, team: "blue" });
      setScore(prevScore => ({ ...prevScore, orange: prevScore.orange + 1 })); // Suma un gol al equipo naranja
      return true;
    }
    if (x >= 370 && y >= 110 && y <= 190) {
      setExplosionPosition({ x: 370, y: 150, team: "orange" });
      setScore(prevScore => ({ ...prevScore, blue: prevScore.blue + 1 })); // Suma un gol al equipo azul
      return true;
    }
    return false;
  };

  const handleAbsorbComplete = () => {
    setTimeout(() => {
      setIconsVisible(true);
      setShowCountdown(true);
    }, 2000);
  };

  const getRandomAngle = () => {
    const angle = (Math.random() * 60 + 30) * (Math.PI / 180); // Ángulo entre 30° y 90°
    const direction = Math.random() > 0.5 ? 1 : -1;
    return { x: Math.cos(angle) * 2 * direction, y: Math.sin(angle) * 2 * direction };
  };

  const handleCountdownComplete = () => {
    setIsGoal(false);
    setExplosionPosition(null);
    setShowCountdown(false);
    setBallPosition({ x: 200, y: 150 });
    setBallVelocity({ x: Math.random() > 0.5 ? 2 : -2, y: Math.random() > 0.5 ? 1 : -1 });
  };

  const checkCollisionWithIcons = (x, y) => {
    for (const icon of socialIcons) {
      const dx = x - icon.x;
      const dy = y - icon.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 26) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (isGoal) {
      setIconsVisible(false);
    }
  }, [isGoal]);

  useEffect(() => {
    const moveBall = () => {
      if (isGoal) return;

      setBallPosition(prev => {
        let newX = prev.x + ballVelocity.x;
        let newY = prev.y + ballVelocity.y;
        let newVelX = ballVelocity.x;
        let newVelY = ballVelocity.y;

        if (checkGoal(newX, newY)) {
          setIsGoal(true);
          return prev;
        }

        if (newX <= 30 || newX >= 370) newVelX *= -1;
        if (newY <= 30 || newY >= 270) newVelY *= -1;

        // 🚀 Rebote aleatorio con iconos (modificamos el ángulo)
        if (checkCollisionWithIcons(newX, newY)) {
          const angle = getRandomAngle();
          newVelX = angle.x;
          newVelY = angle.y;
        }

        setBallVelocity({ x: newVelX, y: newVelY });

        return { x: newX, y: newY };
      });
    };

    const intervalId = setInterval(moveBall, 16);
    return () => clearInterval(intervalId);
  }, [ballVelocity, isGoal]);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <Scoreboard score={score} /> {/* 🎯 Nuevo marcador en la parte superior */}
      <Field>
        {iconsVisible &&
          socialIcons.map((icon, index) => <SocialIcon key={index} {...icon} />)}
        {!isGoal && !showCountdown && <Ball x={ballPosition.x} y={ballPosition.y} />}
        {explosionPosition && (
          <Explosion
            x={explosionPosition.x}
            y={explosionPosition.y}
            team={explosionPosition.team}
            socialIcons={socialIcons}
            onAbsorbComplete={handleAbsorbComplete}
          />
        )}
        {showCountdown && <Countdown onCountdownComplete={handleCountdownComplete} />}
      </Field>
      <Footer />
    </div>
    
  );
};

export default App;
