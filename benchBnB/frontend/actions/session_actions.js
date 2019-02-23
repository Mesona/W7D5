
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_CURRENT_ERRORS = 'RECEIVE_CURRENT_ERRORS';
import { signup, login, logout } from '../util/session_api_util';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_CURRENT_ERRORS,
    errors
});

export const login = user => dispatch => login(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => logout()
  .then( () => dispatch(logoutCurrentUser()));

export const signup = user => dispatch => signup(user)
  .then(user => dispatch(receiveCurrentUser(user)));