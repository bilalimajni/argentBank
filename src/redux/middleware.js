// middleware.js
const serializationMiddleware = (store) => (next) => (action) => {
    if (action.type === 'persist/PERSIST' || action.type === 'REGISTER') {
      // Exclure explicitement l'action PERSIST et REGISTER
      return next(action);
    }
  
    if (typeof action === 'object' && action !== null) {
      const serializedAction = { ...action };
      Object.keys(serializedAction).forEach((key) => {
        if (typeof serializedAction[key] === 'function') {
          // Exclure les fonctions comme register
          serializedAction[key] = serializedAction[key].toString();
        }
      });
      return next(serializedAction);
    }
  
    return next(action);
  };
  
  export default serializationMiddleware;
  