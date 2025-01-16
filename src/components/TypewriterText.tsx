import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

const TypewriterText = ({ text, delay = 0 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startTyping = () => {
      let index = 0;
      intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 50);
    };

    timeoutId = setTimeout(startTyping, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return <div className="text-white">{displayText}</div>;
};

export default TypewriterText; 