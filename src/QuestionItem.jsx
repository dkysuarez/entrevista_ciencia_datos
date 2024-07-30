import React, { useState } from "react";

const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="question-item">
      <h2 onClick={toggleAnswer} style={{ cursor: "pointer" }}>
        {question}
      </h2>
      {isOpen && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionItem;
