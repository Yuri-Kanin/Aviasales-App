import classes from "./Logo.module.scss";
import logo from "../../Assets/Logo.svg";

export default function Logo() {
  return (
    <div className={classes.mainLogo}>
      <img className={classes.image} src={logo} alt="Logo" />
    </div>
  );
}
