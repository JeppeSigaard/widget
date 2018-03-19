export default function(state = {}, action) {
  if (action.type === "SET_WEATHER") {
    switch (action.status) {
      case "loading": {
        return state;
      }

      case "failed": {
        return { ...state, cod: "404" };
      }

      case "success": {
        return action.data;
      }
    }
  }
  return state;
}
