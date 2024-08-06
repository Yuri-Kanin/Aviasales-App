import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Actions from "../../Actions/Actions";
import classes from "./Aside.module.scss";
// eslint-disable-next-line react/prop-types
function AsideFilter({
  state,
  all,
  withoutMove,
  oneMove,
  twoMoves,
  threeMoves,
}) {
  const onCheckBoxChangeHandler = (action) => (event) => {
    action(event.target.checked);
  };

  return (
    <aside className={classes.aside}>
      <p className={classes.title}>Количество пересадок</p>
      <ul className={classes.filterList}>
        <li className={classes.filterItem}>
          <label className={classes.filterLabel}>
            <input
              onChange={onCheckBoxChangeHandler(all)}
              checked={state.all}
              className={classes.filterInput}
              type="checkbox"
            />
            <span className={classes.checkBox} />
            Все
          </label>
        </li>
        <li className={classes.filterItem}>
          <label className={classes.filterLabel}>
            <input
              onChange={onCheckBoxChangeHandler(withoutMove)}
              checked={state.withoutMove}
              className={classes.filterInput}
              type="checkbox"
            />
            <span className={classes.checkBox} />
            Без пересадок
          </label>
        </li>
        <li className={classes.filterItem}>
          <label className={classes.filterLabel}>
            <input
              onChange={onCheckBoxChangeHandler(oneMove)}
              checked={state.oneMove}
              className={classes.filterInput}
              type="checkbox"
            />
            <span className={classes.checkBox} />1 пересадка
          </label>
        </li>
        <li className={classes.filterItem}>
          <label className={classes.filterLabel}>
            <input
              onChange={onCheckBoxChangeHandler(twoMoves)}
              checked={state.twoMoves}
              className={classes.filterInput}
              type="checkbox"
            />
            <span className={classes.checkBox} />2 пересадки
          </label>
        </li>
        <li className={classes.filterItem}>
          <label className={classes.filterLabel}>
            <input
              onChange={onCheckBoxChangeHandler(threeMoves)}
              checked={state.threeMoves}
              className={classes.filterInput}
              type="checkbox"
            />
            <span className={classes.checkBox} />3 пересадки
          </label>
        </li>
      </ul>
    </aside>
  );
}

const mapStateToProps = (state) => ({
  state,
});

AsideFilter.propTypes = {
  state: PropTypes.shape({
    theCheapest: PropTypes.bool.isRequired,
    theFastest: PropTypes.bool.isRequired,
    optimal: PropTypes.bool.isRequired,
    all: PropTypes.bool.isRequired,
    withoutMove: PropTypes.bool.isRequired,
    oneMove: PropTypes.bool.isRequired,
    twoMoves: PropTypes.bool.isRequired,
    threeMoves: PropTypes.bool.isRequired,
  }).isRequired,
  all: PropTypes.func.isRequired,
  withoutMove: PropTypes.func.isRequired,
  oneMove: PropTypes.func.isRequired,
  twoMoves: PropTypes.func.isRequired,
  threeMoves: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, Actions)(AsideFilter);
