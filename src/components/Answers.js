import classes from "../styles/Answers.module.css";
import Answer from "./Answer";

function Answers() {
  return (
    <>
      <div className={classes.answers}>
        <Answer answer={classes.correct} />
        <Answer answer={classes.wrong} />
        <Answer answer="" />
        <Answer answer="" />
        <Answer answer="" />
        <Answer answer="" />
        <Answer answer="" />
        <Answer answer="" />
      </div>
    </>
  );
}

export default Answers;
