/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Ticket from "../Ticket/Ticket";

function TicketWrapper({ state }) {
  const {
    data,
    all,
    withoutMove,
    oneMove,
    twoMoves,
    threeMoves,
    theCheapest,
    theFastest,
    optimal,
    defaultTicketsListSize,
  } = state;
  const [dataTickets, setDataTickets] = useState(data);
  const [tickets, setTickets] = useState([]);

  const ticketSort = () => {
    const newDataTickets = dataTickets;
    if (theCheapest)
      setDataTickets(newDataTickets.sort((x, y) => x.price - y.price));
    if (theFastest)
      setDataTickets(
        newDataTickets.sort(
          (x, y) => x.segments[0].duration - y.segments[0].duration
        )
      );
    if (optimal)
      setDataTickets(
        newDataTickets.sort(
          (x, y) => x.segments[1].duration - y.segments[1].duration
        )
      );
  };

  const ticketShow = (array) => {
    let newTicketsList = [];
    for (let i = 0; i < defaultTicketsListSize; i += 1) {
      const ticketData = array[i];

      newTicketsList = [
        ...newTicketsList,
        <Ticket key={i} ticketData={ticketData} />,
      ];
    }
    setTickets(newTicketsList);
  };

  const TicketFilter = (ticketArray) => {
    if (all) {
      ticketShow(ticketArray);
    } else if (!all && !withoutMove && !oneMove && !twoMoves && !threeMoves) {
      setTickets(null);
    } else {
      let newTicketArray = ticketArray;
      if (!withoutMove) {
        const results = newTicketArray.filter((el) => {
          if (
            el.segments[0].stops.length === 0 ||
            el.segments[1].stops.length === 0
          )
            return false;
          return true;
        });
        newTicketArray = results;
      }
      if (!oneMove) {
        const results = newTicketArray.filter((el) => {
          if (
            el.segments[0].stops.length === 1 ||
            el.segments[1].stops.length === 1
          )
            return false;
          return true;
        });
        newTicketArray = results;
      }
      if (!twoMoves) {
        const results = newTicketArray.filter((el) => {
          if (
            el.segments[0].stops.length === 2 ||
            el.segments[1].stops.length === 2
          )
            return false;
          return true;
        });
        newTicketArray = results;
      }
      if (!threeMoves) {
        console.log("without move");
        const results = newTicketArray.filter((el) => {
          if (
            el.segments[0].stops.length === 3 ||
            el.segments[1].stops.length === 3
          )
            return false;
          return true;
        });
        newTicketArray = results;
      }

      ticketShow(newTicketArray);
    }
  };

  useEffect(() => {
    TicketFilter(dataTickets);
    return () => {};
  }, [all, withoutMove, oneMove, twoMoves, threeMoves, defaultTicketsListSize]);

  useEffect(() => {
    ticketSort();
    TicketFilter(dataTickets);
    return () => {};
  }, [theCheapest, theFastest, optimal]);

  return tickets;
}

const mapStateToProps = (state) => ({
  state,
});

TicketWrapper.propTypes = {
  state: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    all: PropTypes.bool.isRequired,
    defaultTicketsListSize: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(TicketWrapper);
