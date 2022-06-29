import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import Questions from "../Questions";
function Quiz() {
  return (
    <>
      <Questions question="Your favourite star wars movies" />
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}

export default Quiz;
