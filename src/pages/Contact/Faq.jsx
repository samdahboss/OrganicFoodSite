import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";

export function Question({ item }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggleAnswer = () => {
    setShowAnswer((prevAnswer) => !prevAnswer);
  };
  return (
    <div className="border-b">
      <div className="p-6" onClick={toggleAnswer}>
        <h2 className="font-bold cursor-pointer p-2 flex items-center justify-between">
          {item.question}
          {showAnswer ? <FaCaretDown /> : <FaCaretRight />}
        </h2>
      </div>
      <div
        className={`p-6 pt-0 overflow-hidden transition-all duration-500 ease-in-out ${
          showAnswer ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}
export default function Faq() {
  const FrequentlyAskedQuestions = [
    [
      {
        question: "Pulvinar nostrud class cum facilis?",
        answer:
          "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
      },
      {
        question: "Pon excepturi numquam, facilis?",
        answer:
          "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.",
      },
      {
        question: "Pon excepturi numquam, facilis?",
        answer:
          "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.",
      },
    ],
    [
      {
        question: "Pon excepturi numquam, facilis?",
        answer:
          "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.",
      },
      {
        question: "Consequat nesciunt fusce facilisi?",
        answer:
          "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      },
      {
        question: "Consequat nesciunt fusce facilisi?",
        answer:
          "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      },
    ],
  ];
  return (
    <div className="px-4">
      <div className="absolute inset-0 bg-[#FAF9F7] bg-opacity-90 z-20"></div>
      <div className="absolute inset-0  bg-[url('/leaves-free-img.png')] lg:bg-[length:30%_auto] bg-[length:60%_auto] bg-right-bottom bg-no-repeat z-0"></div>
      <div className="relative container grid lg:grid-cols-2 lg:gap-8 mx-auto p-2 z-40">
        <div>
          {FrequentlyAskedQuestions[0].map((item, index) => (
            <div key={index}>
              <Question item={item} />
            </div>
          ))}
        </div>
        <div>
          {FrequentlyAskedQuestions[1].map((item, index) => (
            <div key={index}>
              <Question item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  item: PropTypes.object.isRequired,
};
