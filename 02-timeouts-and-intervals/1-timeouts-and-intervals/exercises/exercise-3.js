import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

let x = '';

// Start interval that adds 'a' every 100ms
const exercise3_cb_1 = () => {
  x += 'a';
  log('cb 1:', x);
};
const intervalId = setInterval(exercise3_cb_1, 100);

// Add 'w' immediately
const exercise3_cb_2 = () => {
  x += 'w';
  log('cb 2:', x);
};
setTimeout(exercise3_cb_2, 0);

// Add 'h' after 'w', before first 'a'
const exercise3_cb_5 = () => {
  x += 'h';
  log('cb 5:', x);
};
setTimeout(exercise3_cb_5, 50);

// Stop interval and add '!' after 4 'a's
const exercise3_cb_4 = () => {
  clearInterval(intervalId);
  x += '!';
  log('cb 4:', x);
};
setTimeout(exercise3_cb_4, 450); // 4 x 100ms + small buffer

// Final assertion
const exercise3_cb_3 = () => {
  const test = x === 'whaaaa!';
  log('cb 3:', test);
  console.assert(test, 'x should be "whaaaa!"');
};
setTimeout(exercise3_cb_3, 500); // Run after everything

log(x);
log('= = = =  the call stack is empty  = = = =');
