import image from "../../assats/images/success.png";
import classes from "../../styles/Result.module.css";
import Answers from "../Answers";
import Questions from "../Questions";
function Result() {
  return (
    <>
      <div className={classes.summary}>
        <div className={classes.point}>
          <p className={classes.score}>
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      </div>

      <div className={classes.analysis}>
        <h1>Question Analysis</h1>
        <h4>You answerd 5 out of 10 questions correctly</h4>
        <div className={classes.question}>
          <Questions question="Here goes the question from Learn with Sumit?" />
          <Answers />

          <Questions question="Here goes the question from Learn with Sumit?" />
          <Answers />

          <Questions question="Here goes the question from Learn with Sumit?" />
          <Answers />
        </div>
      </div>
    </>
  );
}

export default Result;
