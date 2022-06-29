import classes from "../styles/TextInput.module.css";

function TextInput({ icon, type, placeholder, ...rest }) {
  return (
    <>
      <div class={classes.textInput}>
        <input type={type} placeholder={placeholder} {...rest} />
        <span class="material-icons-outlined"> {icon} </span>
      </div>
    </>
  );
}

export default TextInput;
