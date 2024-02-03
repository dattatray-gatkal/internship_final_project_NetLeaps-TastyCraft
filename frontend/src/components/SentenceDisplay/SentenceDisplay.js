import React, { useState, useEffect } from "react";
import classes from "./sentenceDisplay.module.css";

const SentenceDisplay = () => {
  const sentences = [
    "SENTENCE1",
    "SENTENCE2",
    "SENTENCE3",
    "SENTENCE4",
    "SENTENCE5",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sentenceContainer = document.getElementById("sentence-container");

    const displayNextSentence = () => {
      if (sentenceContainer) {
        sentenceContainer.style.opacity = 0;
        sentenceContainer.style.transform = "translateY(-25%)";
        sentenceContainer.style.transition =
          "opacity 0.5s ease-out, transform 0.5s ease-out";

        setTimeout(() => {
          sentenceContainer.textContent = sentences[currentIndex];
          sentenceContainer.style.opacity = 1;
          sentenceContainer.style.transform = "translateY(0)";
          setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 500); // Scroll up for 500 milliseconds

        // Change the display duration (in milliseconds) as needed
        setTimeout(displayNextSentence, 2500); // Display each sentence for 2.5 seconds
      }
    };

    // Start the loop
    displayNextSentence();
  }, [currentIndex, sentences]);

  return (
    <div id="sentence-container" className={classes.sentence_container}></div>
  );
};

export default SentenceDisplay;
