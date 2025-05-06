import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* Address */

// --- declare some callbacks ---
const getAddress = (user) => {
  const id = user.id;
  const street = user.address.street;
  const zipcode = user.address.zipcode;
  log(`${id}: ${street}, ${zipcode}`);
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 9');
// "9: Dayna Park, Bartholomebury 76495-3109"
fetchUserById(9).then(getAddress).catch(handleError);

log('fetching and processing user 8');
// "8: Ellsworth Summit, Aliyaview 45169"
fetchUserById(8).then(getAddress).catch(handleError);

log('fetching and processing user 2');
// "2: Victor Plains, Wisokyburgh 90566-7771"
fetchUserById(2).then(getAddress).catch(handleError);

log('fetching and processing user 0');
// 404
fetchUserById(0).then(getAddress).catch(handleError);

log('= = = =  the call stack is empty  = = = =');
