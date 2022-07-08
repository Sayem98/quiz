import { Link } from "react-router-dom";
import img from "../assats/images/3.jpg";
import classes from "../styles/Video.module.css";
function Video() {
  return (
    <Link to="/quiz">
      <div className={classes.video}>
        <img src={img} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className="qmeta">
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
}

export default Video;
