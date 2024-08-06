import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Actions from "../../Actions/Actions";
import classes from "./Navigation.module.scss";

function Navigation({ state, fastest, cheapest, optimal }) {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigationList}>
        <li
          className={
            state.theCheapest
              ? classes.navigationItemActive
              : classes.navigationItem
          }
        >
          <button
            className={classes.navigationButton}
            type="button"
            onClick={cheapest}
          >
            Самый дешевый
          </button>
        </li>
        <li
          className={
            state.theFastest
              ? classes.navigationItemActive
              : classes.navigationItem
          }
        >
          <button
            className={classes.navigationButton}
            type="button"
            onClick={fastest}
          >
            Самый быстрый
          </button>
        </li>
        <li
          className={
            state.optimal
              ? classes.navigationItemActive
              : classes.navigationItem
          }
        >
          <button
            className={classes.navigationButton}
            type="button"
            onClick={optimal}
          >
            Оптимальный
          </button>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  state,
});

Navigation.propTypes = {
  state: PropTypes.shape({
    theCheapest: PropTypes.bool.isRequired,
    theFastest: PropTypes.bool.isRequired,
    optimal: PropTypes.bool.isRequired,
  }).isRequired,
  fastest: PropTypes.func.isRequired,
  cheapest: PropTypes.func.isRequired,
  optimal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, Actions)(Navigation);
