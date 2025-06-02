function Welcome({ nickname }: { nickname?: string }) {
  return (
    <div>
      {nickname ? (
        <div>환영합니다, {nickname}님!</div>
      ) : (
        <div>방문자님, 환영합니다!</div>
      )}
    </div>
  );
}

export default Welcome;
