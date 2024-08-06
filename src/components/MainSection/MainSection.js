import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as Actions from "../../Actions/Actions";
import classes from "./MainSection.module.scss";
import TicketWrapper from "../TicketWrapper/TicketWrapper";
import Navigation from "../Navigation/Navigation";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import Loader from "../../Loader/Loader";

function MainSection({
  state,
  getTicketsThunkCreator,
  updateTicketsThunkCreator,
}) {
  useEffect(() => {
    getTicketsThunkCreator();
    return () => {};
  }, []);

  useEffect(() => {
    if (state.isStop === false) {
      updateTicketsThunkCreator(state.searchId);
    }
    return () => {};
  });

  return (
    <div className={classes.mainSection}>
      <Navigation />
      {state.isFetching ? <Loader /> : null}
      {state.data.length ? <TicketWrapper /> : null}
      <ShowMoreButton />
    </div>
  );
}

const mapStateToProps = (state) => ({
  state,
});

MainSection.propTypes = {
  state: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    isStop: PropTypes.bool.isRequired,
    searchId: PropTypes.string.isRequired,
  }).isRequired,
  getTicketsThunkCreator: PropTypes.func.isRequired,
  updateTicketsThunkCreator: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, Actions)(MainSection);
