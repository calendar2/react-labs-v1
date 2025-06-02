function Hello() {
  const a = 5;
  const b = 3;

  const add = (x: number, y: number): number => x + y;

  return (
    <div>
      <h1>Hello, React!</h1>
      <div>a = {a}</div>
      <div>b = {b}</div>
      <div>a + b = {add(a, b)}</div>
      <div>add(a, b) = {add(a, b)}</div>
    </div>
  );
}

export default Hello;
