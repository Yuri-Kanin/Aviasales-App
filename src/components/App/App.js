import classes from "./App.module.scss";
import Logo from "../Logo/Logo";
import AsideFilter from "../AsideFilter/AsideFilter";
import MainSection from "../MainSection/MainSection";

function App() {
  return (
    <>
      <Logo />
      <div className={classes.application}>
        <AsideFilter />
        <MainSection />
      </div>
    </>
  );
}

export default App;
