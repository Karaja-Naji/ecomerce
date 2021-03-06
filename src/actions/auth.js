import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import { API_URL, CLIENT_ROOT_URL, errorHandler } from './index';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, PROTECTED_TEST } from './types';

//= ===============================
// Authentication actions
//= ===============================

var url = "http://localhost:8080/myNextProject/public/api/auth/";

// TO-DO: Add expiration to cookie
export function loginUser({ email, password }) {
  console.log("email ", email);
  console.log("password ", password);
  // return function (dispatch) {
  //   axios.post(url+"login", { email, password })
  //   .then((response) => {
  //     cookie.save('token', response.data.token, { path: '/' });
  //     cookie.save('user', response.data.user, { path: '/' });
  //     dispatch({ type: AUTH_USER });
  //     window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
  //   })
  //   .catch((error) => {
  //     errorHandler(dispatch, error.response, AUTH_ERROR);
  //   });
  // };
}

export function registerUser({ email, firstName, lastName, password }) {
  console.log("email ", email);
  console.log("firstName ", firstName);
  console.log("lastName ", lastName);
  console.log("password ", password);
   return function (dispatch) {

  //   axios.post(url+"signup", { email, firstName, lastName, password })
  //   .then((response) => {
      cookie.save('token', "response.data.token", { path: '/' });
      cookie.save('user', "response.data.user", { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
  //   })
  //   .catch((error) => {
  //     errorHandler(dispatch, error.response, AUTH_ERROR);
  //   });
  };
}

export function logoutUser(error) {
  console.log("logoutUser ", error);

  return function (dispatch) {
    dispatch({ type: UNAUTH_USER, payload: error || '' });
    cookie.remove('token', { path: '/' });
    cookie.remove('user', { path: '/' });

    window.location.href = `${CLIENT_ROOT_URL}/login`;
  };
}

export function getForgotPasswordToken({ email }) {
  return function (dispatch) {
    axios.post(`${API_URL}/auth/forgot-password`, { email })
    .then((response) => {
      dispatch({
        type: FORGOT_PASSWORD_REQUEST,
        payload: response.data.message,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR);
    });
  };
}

export function resetPassword(token, { password }) {
  return function (dispatch) {
    axios.post(`${API_URL}/auth/reset-password/${token}`, { password })
    .then((response) => {
      dispatch({
        type: RESET_PASSWORD_REQUEST,
        payload: response.data.message,
      });
      // Redirect to login page on successful password reset
      browserHistory.push('/login');
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR);
    });
  };
}

export function protectedTest() {
  return function (dispatch) {
    axios.get(`${API_URL}/protected`, {
      headers: { Authorization: cookie.load('token') },
    })
    .then((response) => {
      dispatch({
        type: PROTECTED_TEST,
        payload: response.data.content,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR);
    });
  };
}
