// action type
export const SELECT_STATUS = "SELECT_STATUS";

const initialState = {
  status: "All",
};

export default function statusSelectionReducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case SELECT_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
}

// action creator
export const selectStatus = (status) => ({
  type: SELECT_STATUS,
  status,
});
