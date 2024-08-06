const initialState = {
  theCheapest: false,
  theFastest: false,
  optimal: false,
  all: true,
  withoutMove: true,
  oneMove: true,
  twoMoves: true,
  threeMoves: true,
  isFetching: false,
  data: [],
  isStop: true,
  searchId: "",
  defaultTicketsListSize: 5,
};

// eslint-disable-next-line default-param-last
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "THE_CHEAPEST":
      return {
        ...state,
        theCheapest: true,
        theFastest: false,
        optimal: false,
      };

    case "THE_FASTEST":
      return {
        ...state,
        theCheapest: false,
        theFastest: true,
        optimal: false,
      };

    case "OPTIMAL":
      return {
        ...state,
        theCheapest: false,
        theFastest: false,
        optimal: true,
      };

    case "ALL":
      if (action.payload) {
        return {
          ...state,
          all: action.payload,
          withoutMove: true,
          oneMove: true,
          twoMoves: true,
          threeMoves: true,
        };
      }
      return {
        ...state,
        all: action.payload,
        withoutMove: false,
        oneMove: false,
        twoMoves: false,
        threeMoves: false,
        defaultTicketsListSize: 5,
      };

    case "WITHOUT_MOVE":
      if (action.payload && state.oneMove && state.twoMoves && state.threeMoves)
        return {
          ...state,
          all: true,
          withoutMove: action.payload,
        };
      if (action.payload) {
        return {
          ...state,
          all: false,
          withoutMove: action.payload,
        };
      }
      return {
        ...state,
        all: false,
        withoutMove: action.payload,
      };

    case "ONE_MOVE":
      if (
        action.payload &&
        state.withoutMove &&
        state.twoMoves &&
        state.threeMoves
      )
        return {
          ...state,
          all: true,
          oneMove: action.payload,
        };
      if (action.payload) {
        return {
          ...state,
          oneMove: action.payload,
        };
      }
      return { ...state, oneMove: action.payload, all: false };

    case "TWO_MOVES":
      if (
        action.payload &&
        state.oneMove &&
        state.withoutMove &&
        state.threeMoves
      )
        return {
          ...state,
          all: true,
          twoMoves: action.payload,
        };
      if (action.payload) {
        return {
          ...state,
          twoMoves: action.payload,
        };
      }
      return { ...state, twoMoves: action.payload, all: false };

    case "THREE_MOVES":
      if (
        action.payload &&
        state.oneMove &&
        state.twoMoves &&
        state.withoutMove
      )
        return {
          ...state,
          all: true,
          threeMoves: action.payload,
        };
      if (action.payload) {
        return {
          ...state,
          threeMoves: action.payload,
        };
      }
      return { ...state, threeMoves: action.payload, all: false };

    case "IS_FETCHING":
      return { ...state, isFetching: action.payload };

    case "SET_DATA":
      return { ...state, data: [...state.data, ...action.payload] };

    case "SET_SEARCH_ID":
      return { ...state, searchId: action.payload };

    case "SET_STOP":
      return { ...state, isStop: action.payload };

    case "SET_DEFAULT_TICKETS_LIST_SIZE":
      return {
        ...state,
        defaultTicketsListSize: state.defaultTicketsListSize + action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
