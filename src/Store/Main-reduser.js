import { Services } from "../Services/ApiService";

const SET_USERS = 'SET-USERS';
const SET_VALUE_USERS = 'SET-VALUE-USERS';

let initialState = {
    valueUsers: 50,
    Users: []
};

const mainReduser = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS: {
            return {
                ...state,
                Users: action.value
            }
        }

        case SET_VALUE_USERS: {
            return {
                ...state,
                valueUsers: action.value
            }
        }
        default:
            return state;
    }
}

export const setUsers = (valueUsers) => {
    return {
        type: SET_USERS,
        value: valueUsers
    }
}

export const setValueUsers = (valueUsers) => {
    return {
        type: SET_VALUE_USERS,
        value: valueUsers
    }
}

export const getUsers = (valueUsers) => async (dispatch) => {
    try {
      let responce = await Services.getUsersService(valueUsers);
      dispatch(setUsers(responce.data.results))
     
    } catch (error) {
      alert(error);
    }
  }

  export const getUsersPerPage = (valueUsers) => async (dispatch) => {
    try {
      let responce = await Services.getUsersService(valueUsers);
      dispatch(setUsers(responce.data.results))
      dispatch(setValueUsers(valueUsers))
     
    } catch (error) {
      alert(error);
    }
  }

  export const getFilterUsers = (valueUsers, name, gender, date) => async (dispatch) => {
    try {
      let responce = await Services.getFilterUsersService(valueUsers, name, gender, date);
      dispatch(setUsers(responce.data.results))
     
    } catch (error) {
      alert(error);
    }
  }

export default mainReduser;