import { StateActions } from "./actions";
import { AppState } from "./state";

export const reducers = (state: AppState, action: StateActions): AppState => {
  switch (action.type) {
    case "set-user-data": {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.data,
        },
      };
    }
    case "update-filtered-attractions": {
      return {
        ...state,
        user: {
          ...state.user,
          selectedAttractionFilters: action.selectedAttractionFilters,
        },
      };
    }
    case "update-selected-subscription": {
      return {
        ...state,
        user: {
          ...state.user,
          selectedSubscriptions: action.selectedSubscriptions,
        },
      };
    }
    case "set-is-loading": {
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: action.isLoading,
        },
      };
    }
    case "set-has-seen-tutorial": {
      return {
        ...state,
        user: {
          ...state.user,
          hasSeenTutorial: action.hasSeenTutorial,
        },
      };
    }
  }
};
