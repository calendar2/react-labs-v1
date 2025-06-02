function Button({ onClick }: { onClick: () => void }) {
  return <button onClick={() => onClick()}>버튼</button>;
}

export default Button;
