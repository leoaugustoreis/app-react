import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    userList: ['list'],
    setLoading: ['flag'],
    addUser: ['user'],
    delUser: ['id'],
    selectUser: ['user'],
});

const INITIAL_STATE = {
    loading: false,
    data: [],
    user: {}
}

const userList = (state = INITIAL_STATE, action) => {
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

const addUser = (state = INITIAL_STATE, action) => {
    const { name, email, phone } = action.user;
    return {
        ...state,
        data: [
            ...state.data,
            {
                id: Math.random(),
                name,
                email,
                phone
            }
        ]
    }
}

const selectUser = (state = INITIAL_STATE, action) => {
    const { name, email, phone } = action.user;
    return {
        ...state,
        user: {
            name,
            email,
            phone
        }
    }
}

const delUser = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        data: state.data.filter(user => user.id !== action.id)
    }
}

export default createReducer(INITIAL_STATE, {
    [Types.USER_LIST]: userList,
    [Types.SET_LOADING]: setLoading,
    [Types.ADD_USER]: addUser,
    [Types.SELECT_USER]: selectUser,
    [Types.DEL_USER]: delUser
});