import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

const TypewriterText = ({ text, delay = 0 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => {
          if (prev >= text.length - 1) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, delay, text]);

  return <div className="text-white">{displayText}</div>;
};

export default TypewriterText; 