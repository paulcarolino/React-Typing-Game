import { useState, useRef, useEffect } from "react";

export default function useWordGame() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(5);
  const [isGameStart, setIsGameStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (isGameStart && timer > 0) {
      setTimeout(() => {
        setTimer((oldTimer) => oldTimer - 1);
      }, 1000);
    }
    if (timer === 0) {
      endGame();
    }
  }, [timer, isGameStart]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const countWords = (str) => {
    return str
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
  };

  const startGame = () => {
    setIsGameStart(true);
    setTimer(5);
    setText("");
    textRef.current.disabled = false;
    textRef.current.focus();
  };

  const endGame = () => {
    setIsGameStart(false);
    setWordCount(countWords(text));
  };

  return {
    isGameStart,
    handleChange,
    text,
    textRef,
    timer,
    startGame,
    wordCount,
  };
}
