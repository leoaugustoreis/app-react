import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    photoList: ['list'],
    setLoading: ['flag'],
});

const INITIAL_STATE = {
    loading: false,
    data: []
}

const photoList = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        data: action.list
    }
}

const setLoading = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        loading: action.flag
    }
}

export default createReducer(INITIAL_STATE, {
    [Types.PHOTO_LIST]: photoList,
    [Types.SET_LOADING]: setLoading,
});