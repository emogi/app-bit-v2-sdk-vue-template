import { reactive } from 'vue';

var messages = {
  errors: reactive([]),
};

const messageTimeoutMs = 5000;

/* adds a single error message which is used to render the component */
messages.addError = (message, autoRemove) => {
  const id = `${Date.now()}-${messages.errors.length}`;
  const messageObj = {
    id: id,
    message: message.message || message,
  };
  messages.errors.push(messageObj);
  // auto remove message after 3s
  autoRemove = typeof autoRemove !== 'undefined' ? autoRemove : false;
  if (autoRemove) {
    setTimeout(() => {
      let index = messages.errors.indexOf(messageObj);
      messages.dismissErrors(index, 1);
    }, messageTimeoutMs);
  }
};

messages.handleError = (error) => {
  console.error(error)
  let message = '';
  if (error.message && error.showInToast) {
    message = error.message;
  } else {
    message = 'An unknown error occured.';
  }
  messages.addError(message, true);
};

/* dismisses error messages */
messages.dismissErrors = (index, length) => {
  index = typeof index !== 'undefined' ? index : 0;
  length = typeof length !== 'undefined' ? length : messages.errors.length;
  messages.errors.splice(index, length);
};

export default {
  install: (app) => {
    app.provide('$messages', messages);
  },
};
