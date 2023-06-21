const initialState = { isHeaderModalVisible: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_HEADER_VISIBILITY": {
      return {
        ...state,
        isHeaderModalVisible: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
