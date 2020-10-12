import {
  FETCH_MESSAGE_FAILURE,
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  POST_MESSAGE_FAILURE,
  POST_MESSAGE_REQUEST,
  POST_MESSAGE_SUCCESS,
} from './actionTypes';
import axiosApi from '../axiosApi';

const fetchMessageRequest = () => {
  return { type: FETCH_MESSAGE_REQUEST };
};

const fetchMessageSuccess = (messages) => {
  return { type: FETCH_MESSAGE_SUCCESS, messages };
};

const fetchMessageFailure = (error) => {
  return { type: FETCH_MESSAGE_FAILURE, error };
};

export const fetchMessage = () => {
  return async dispatch => {
    dispatch(fetchMessageRequest());
    try {
      const response = await axiosApi('/messages');
      dispatch(fetchMessageSuccess(response.data));
    } catch (e) {
      dispatch(fetchMessageFailure(e));
    }
  };
};

const postMessageRequest = () => {
  return { type: POST_MESSAGE_REQUEST };
};

const postMessageSuccess = () => {
  return { type: POST_MESSAGE_SUCCESS };
};

const postMessageFailure = (error) => {
  return { type: POST_MESSAGE_FAILURE };
};

export const postMessage = (message) => {
  return async dispatch => {
    dispatch(postMessageRequest());
    try {
      const response = await axiosApi.post('/messages', message);
      dispatch(postMessageSuccess(response.data));
    } catch (e) {
      dispatch(postMessageFailure(e));
    }
  };
};