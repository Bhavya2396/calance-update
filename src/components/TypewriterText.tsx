import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  typingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterText = ({ 
  texts, 
  delay = 0, 
  typingSpeed = 50,
  pauseDuration = 2000 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const interval = setInterval(() => {
        if (isPaused) return;

        const currentText = texts[currentTextIndex];

        if (!isDeleting) {
          setDisplayText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex((prev) => {
            if (prev >= currentText.length - 1) {
              setIsPaused(true);
              setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
              }, pauseDuration);
              return prev;
            }
            return prev + 1;
          });
        } else {
          setDisplayText(currentText.slice(0, currentIndex));
          setCurrentIndex((prev) => {
            if (prev <= 0) {
              setIsDeleting(false);
              setCurrentTextIndex((prevTextIndex) => 
                (prevTextIndex + 1) % texts.length
              );
              return 0;
            }
            return prev - 1;
          });
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, currentTextIndex, delay, isDeleting, isPaused, pauseDuration, texts, typingSpeed]);

  return <div className="text-white">{displayText}</div>;
};

export default TypewriterText; 