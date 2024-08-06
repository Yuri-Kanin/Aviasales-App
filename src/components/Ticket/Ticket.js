import PropTypes from "prop-types";
import dateFormat, { masks } from "dateformat";
import { add, addMinutes } from "date-fns";
import classes from "./Ticket.module.scss";

function Ticket({ ticketData }) {
  masks.duration = "HHч MMм";
  masks.time = "HH:MM";
  const { price, segments, carrier } = ticketData;
  const [to, back] = segments;

  const moveCounter = (stop) => {
    switch (stop) {
      case 1:
        return "1 ПЕРЕСАДКА";
      case 2:
        return "2 ПЕРЕСАДКИ";
      case 3:
        return "3 ПЕРЕСАДКИ";

      default:
        return "БЕЗ ПЕРЕСАДОК";
    }
  };

  return (
    <section className={classes.ticket}>
      <div className={classes.ticketItem1}>
        <span className={classes.price}>{price} P</span>
        <span className={classes.logo}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </span>
      </div>
      <div className={classes.ticketItem2}>
        <span
          className={classes.ticketTextGray}
        >{`${to.origin}-${to.destination}`}</span>
        <br />
        <span className={classes.ticketTextBlack}>
          {dateFormat(to.date, "time")}-
          {dateFormat(add(new Date(to.date), { minutes: to.duration }), "time")}
        </span>
      </div>
      <div className={classes.ticketItem3}>
        <span className={classes.ticketTextGray}>В ПУТИ</span>
        <br />
        <span className={classes.ticketTextBlack}>
          {dateFormat(
            addMinutes(new Date(0, 0, 0, 0, 0, 0), to.duration),
            "duration"
          )}
        </span>
      </div>
      <div className={classes.ticketItem4}>
        <span className={classes.ticketTextGray}>
          {moveCounter(to.stops.length)}
        </span>
        <br />
        <span className={classes.ticketTextBlack}>{to.stops.join(", ")}</span>
      </div>
      <div className={classes.ticketItem5}>
        <span
          className={classes.ticketTextGray}
        >{`${back.origin}-${back.destination}`}</span>
        <br />
        <span className={classes.ticketTextBlack}>
          {dateFormat(back.date, "time")}-
          {dateFormat(
            add(new Date(back.date), { minutes: back.duration }),
            "time"
          )}
        </span>
      </div>
      <div className={classes.ticketItem6}>
        <span className={classes.ticketTextGray}>В ПУТИ</span>
        <br />
        <span className={classes.ticketTextBlack}>
          {dateFormat(
            addMinutes(new Date(0, 0, 0, 0, 0, 0), back.duration),
            "duration"
          )}
        </span>
      </div>
      <div className={classes.ticketItem7}>
        <span className={classes.ticketTextGray}>
          {moveCounter(back.stops.length)}
        </span>
        <br />
        <span className={classes.ticketTextBlack}>{back.stops.join(", ")}</span>
      </div>
    </section>
  );
}

Ticket.propTypes = {
  ticketData: PropTypes.shape({
    price: PropTypes.number.isRequired,
    segments: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    carrier: PropTypes.string.isRequired,
  }).isRequired,
};

export default Ticket;
