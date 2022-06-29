import SignUpImage from "../assats/images/signup.svg";
import classes from "../styles/Illustration.module.css";
function Illustration() {
  return (
    <div class={classes.illustration}>
      <img src={SignUpImage} alt="Login" />
    </div>
  );
}

export default Illustration;
