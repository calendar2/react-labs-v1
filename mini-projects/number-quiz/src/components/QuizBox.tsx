import { useState } from "react";
import { useQuizStore } from "../store/useQuizStore";

function QuizBox() {
  const {
    answer,
    count,
    previous,
    checkStatus,
    increment,
    update,
    toggleStatus,
    result,
    success,
    reset,
  } = useQuizStore();
  const [inputText, setInputText] = useState("");

  const checkAnswer = () => {
    if (inputText === "") {
      alert("숫자를 입력해주세요!");
      return;
    }

    if (isNaN(Number(inputText))) {
      alert("글자가 아닌 숫자를 입력하셔야 합니다!");
      return;
    }

    if (answer === Number(inputText)) {
      success();
      alert("정답입니다!");
    } else {
      toggleStatus(Number(inputText));
      update(Number(inputText));
      increment();
    }

    setInputText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (result) {
        reset();
      } else {
        checkAnswer();
      }
    }
  };

  return (
    <div className="w-128 bg-white rounded-2xl shadow-xl p-6 space-y-6 text-center">
      <h4 className="text-xl font-semibold text-gray-800">
        정답일 것 같은 숫자를 입력하세요!
        <span className="text-red-500 text-xl font-bold mt-1">
          &nbsp;(1~100)
        </span>
      </h4>

      {count > 0 && !result && (
        <p className="text-gray-600">
          {previous} 보다 {checkStatus}!
        </p>
      )}

      <input
        type="text"
        placeholder="숫자 입력"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 text-center"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        onKeyDown={handleKeyDown}
      />

      <button
        className="w-full bg-sky-500 text-white font-semibold py-2 rounded-md hover:bg-sky-600 transition cursor-pointer"
        onClick={result ? reset : checkAnswer}
      >
        {result ? "다시하기" : "제출"}
      </button>

      <p className="text-gray-600">
        시도 횟수: <span className="font-bold">{count}</span>
      </p>
    </div>
  );
}

export default QuizBox;
