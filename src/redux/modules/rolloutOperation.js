// action type
export const EXECUTE_OPERATION = "EXECUTE_OPERATION";

const initialState = {
  operation: "",
};

export default function rolloutOperationReducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case EXECUTE_OPERATION:
      return {
        ...state,
        operation: action.operation,
      };

    default:
      return state;
  }
}

// action creator
export const executeOperation = (operation) => ({
  type: EXECUTE_OPERATION,
  operation,
});
