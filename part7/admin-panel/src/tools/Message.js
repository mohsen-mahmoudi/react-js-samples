import { message } from 'antd';

let messageApi = null;

export function initMessage(api) {
  messageApi = api;
}

export function showError(text) {
  if (messageApi) {
    messageApi.error(text);
  } else {
    console.error('Message API not initialized:', text);
  }
}