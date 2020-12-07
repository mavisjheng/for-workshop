// action type
export const SET_RINGS = "SET_RINGS";

const initialState = {
  rings: [],
};

export default function ringsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_RINGS:
      return {
        ...state,
        rings: action.rings,
      };

    default:
      return state;
  }
}

// action creator
export const setRings = (data) => ({
  type: SET_RINGS,
  rings: data,
});
