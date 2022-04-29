const userAuthStatus = {
  registeringSuccess: {
    name: 'Success',
    message: 'you are registered',
  },

  registeringError(code: string) {
    return {
      name: 'Error',
      message: /auth/gi.test(code)
        ? 'user found!'
        : 'oops something went wrong',
    };
  },

  loggingSuccess: {
    name: 'Success',
    message: 'you are logged in!',
  },

  loggingError(code: string) {
    return {
      name: 'Error',
      message: /auth/gi.test(code)
        ? 'user is not found!'
        : 'oops something went wrong',
    };
  },
};

const userActionsStatus = {
  success: {
    name: 'Success',
    message: 'data was modified',
  },

  error: {
    name: 'Error',
    message: 'data was not modifed',
  },

  info(date: string) {
    return {
      name: 'Info',
      message: `next review:  ${date}`,
    };
  },
};

export { userAuthStatus, userActionsStatus };
