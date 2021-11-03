import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITE} from '../actions/favoritesActions';
const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES: {
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        case ADD_FAVORITES: {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        case REMOVE_FAVORITE: {
            return {
                ...state,
                favorites: state.favorites.filter(item => (item.id !== action.payload))
            }
        }
        default:
            return(state);
    }
}

export default favoritesReducer;