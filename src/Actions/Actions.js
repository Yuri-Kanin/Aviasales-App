import AviasalesAPIService from "../AviasalesAPI/AviasalesAPI";

const AviasalesAPI = new AviasalesAPIService();

export const fastest = () => ({ type: "THE_FASTEST" });
export const cheapest = () => ({ type: "THE_CHEAPEST" });
export const optimal = () => ({ type: "OPTIMAL" });
export const all = (payload) => ({ type: "ALL", payload });
export const withoutMove = (payload) => ({ type: "WITHOUT_MOVE", payload });
export const oneMove = (payload) => ({ type: "ONE_MOVE", payload });
export const twoMoves = (payload) => ({ type: "TWO_MOVES", payload });
export const threeMoves = (payload) => ({ type: "THREE_MOVES", payload });
export const isFetching = (payload) => ({ type: "IS_FETCHING", payload });
export const setData = (payload) => ({ type: "SET_DATA", payload });
export const setSearchId = (payload) => ({ type: "SET_SEARCH_ID", payload });
export const setStop = (payload) => ({ type: "SET_STOP", payload });
export const setDefaultTicketsListSize = (payload) => ({
  type: "SET_DEFAULT_TICKETS_LIST_SIZE",
  payload,
});

export const getTicketsThunkCreator = () => (dispatch) => {
  dispatch(isFetching(true));
  AviasalesAPI.getId().then((id) => {
    dispatch(setSearchId(id));
    AviasalesAPI.getTickets(id)
      .then(({ stop, tickets }) => {
        dispatch(setStop(stop));
        dispatch(setData(tickets));
      })
      .catch(() => {});
  });
};

export const updateTicketsThunkCreator = (id) => (dispatch) => {
  AviasalesAPI.getTickets(id)
    .then(({ stop, tickets }) => {
      if (stop) dispatch(isFetching(false));
      dispatch(setStop(stop));
      dispatch(setData(tickets));
    })
    .catch(() => {});
};
