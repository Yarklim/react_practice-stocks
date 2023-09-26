import { useEffect, useState } from 'react';

export const useKeyPress = (targetKey) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === targetKey) {
        setIsKeyPressed(true);
      }
    };
    const handleKeyUp = (e) => {
      if (e.key === targetKey) {
        setIsKeyPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [targetKey]);

  return isKeyPressed;
};
