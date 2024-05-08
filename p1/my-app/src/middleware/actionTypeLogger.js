const actionTypeLogger = store => next => action => {
    console.log('Action Type:', action.type);
    return next(action);
  };
  
  export default actionTypeLogger;
  