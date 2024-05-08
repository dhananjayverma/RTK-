const payloadLogger = store => next => action => {
    console.log('Action Payload:', action.payload);
    return next(action);
  };
  
  export default payloadLogger;
  