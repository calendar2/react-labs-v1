# labs-01-useRef.md

## 문제 1. 좋아요 버튼! (중복 클릭 방지)

- `LikeButton.tsx` 파일에 함수형 컴포넌트 `LikeButton`을 만드세요.
- “좋아요” 버튼을 빠르게 여러 번 눌러도,
  버튼 클릭 시마다 **1초 동안 비활성화**되어 중복 클릭이 안 되게 하세요.
- 1초 후 버튼이 다시 활성화됩니다.
- 반드시 useRef로 타이머 상태를 관리하세요.
