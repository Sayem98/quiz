import classes from "../styles/Answer.module.css";
function Answer({ answer }) {
  return (
    <label className={`${classes.answer} ${answer}`} for="option1">
      <input type="checkbox" id="option1" />A New Hope 1
    </label>
  );
}

export default Answer;
