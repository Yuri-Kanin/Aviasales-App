import classes from "./Loader.module.scss";
import logo from "../Assets/Logo.svg";

function Loader() {
  return (
    <div className={classes.loader}>
      <img className={classes.image} src={logo} alt="Logo" />
      <p className={classes.text}>ПОИСК ПОДХОДЯЩИХ БИЛЕТОВ...</p>
    </div>
  );
}

export default Loader;
