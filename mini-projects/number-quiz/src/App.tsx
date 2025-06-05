import QuizBox from "./components/QuizBox";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-dvh">
      <h1 className="text-4xl font-bold">숫자 맞히기 게임!</h1>
      <QuizBox />
    </div>
  );
}

export default App;
