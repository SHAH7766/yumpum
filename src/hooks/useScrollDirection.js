import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let lastTime = Date.now();

    const updateScroll = () => {
      const currentScrollY = window.pageYOffset;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime || 1;
      const distance = currentScrollY - lastScrollY;
      const currentVelocity = Math.abs(distance / timeDelta);

      setVelocity(currentVelocity);
      setScrollY(currentScrollY);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? currentScrollY / totalHeight : 0);

      if (Math.abs(distance) > 5) {
        if (distance > 0 && scrollDirection !== 'down' && currentScrollY > 80) {
          setScrollDirection('down');
        } else if (distance < 0 && scrollDirection !== 'up') {
          setScrollDirection('up');
        }
      }

      lastScrollY = currentScrollY;
      lastTime = currentTime;
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  return { scrollDirection, scrollY, scrollProgress, velocity };
};
