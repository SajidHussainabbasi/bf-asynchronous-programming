import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log, error } = labeledLogger();

/* Promise Program

  you can think of consumers as control flow for promises
    if `resolve` is called, .then's callback is executed
    if `reject` is called or an error is thrown, .catch's callback is executed

*/

// resolve/reject based on length of user input
new Promise((resolve, reject) => {
  const userInput = prompt('enter something longer than 5 characters');
  if (userInput !== null && userInput.length > 5) {
    resolve('your input is long enough');
  } else {
    reject('your input is too short');
  }
})
  .then((resolvedValue) => {
    log('resolved value: ', resolvedValue);
  })
  .catch((rejectionValue) => {
    log('rejected value: ', rejectionValue);
  });

log('= = = =  the call stack is empty  = = = =');
