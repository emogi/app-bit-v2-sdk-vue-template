const addError = (error) => {
  console.error(error);
};

const buildQueryParamMessage = (params_obj) => {
  let errorCount = 0;
  let individualMessages = [];

  for (const key of params_obj) {
    if (!params_obj[key]) {
      errorCount++;
      individualMessages.push(key);
    }
  }

  return `Missing query param${
    errorCount > 1 ? 's' : ''
  }: ${individualMessages.join(', ')}`;
};

const errorService = {
  addError,
  buildQueryParamMessage,
};

export default errorService;
