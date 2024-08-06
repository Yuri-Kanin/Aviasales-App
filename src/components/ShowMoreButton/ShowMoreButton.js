import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import * as Actions from "../../Actions/Actions";
import classes from "./ShowMoreButton.module.scss";

function ShowMoreButton({ state, setDefaultTicketsListSize }) {
  const [buttonInfo, setButtonInfo] = useState(null);

  const { all, withoutMove, oneMove, twoMoves, threeMoves } = state;

  useEffect(() => {
    if (!all && !withoutMove && !oneMove && !twoMoves && !threeMoves) {
      setButtonInfo(
        <button type="button" className={classes.showMoreButton}>
          Подходящих билетов не найдено!
        </button>
      );
    } else {
      setButtonInfo(
        <button
          onClick={() => setDefaultTicketsListSize(5)}
          type="button"
          className={classes.showMoreButton}
        >
          Показать еще 5 билетов!
        </button>
      );
    }
  }, [all, withoutMove, oneMove, twoMoves, threeMoves]);

  return buttonInfo;
}

const mapStateToProps = (state) => ({
  state,
});

ShowMoreButton.propTypes = {
  state: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    all: PropTypes.bool.isRequired,
    withoutMove: PropTypes.bool.isRequired,
    oneMove: PropTypes.bool.isRequired,
    twoMoves: PropTypes.bool.isRequired,
    threeMoves: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, Actions)(ShowMoreButton);
