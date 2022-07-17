import { Navigate } from "react-router-dom";
import Answers from "../Answers";
import { useAuth } from "../contexts/AuthContext";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import Questions from "../Questions";

function Quiz() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return currentUser ? (
    <>
      <Questions question="Your favourite star wars movies" />
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default Quiz;
