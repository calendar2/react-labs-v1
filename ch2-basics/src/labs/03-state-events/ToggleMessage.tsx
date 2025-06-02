import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        메시지 보기/숨기기
      </button>
      {isVisible && <p>비밀 메시지입니다!</p>}
    </div>
  );
}

export default ToggleMessage;
