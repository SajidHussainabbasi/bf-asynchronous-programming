import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* User Summary */

// --- declare some callbacks ---

const createSummary = (user) => {
  const summary = {
    name: user.name,
    city: user.address.city,
    companyName: user.company.name,
  };
  log(summary);
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 5');
/*  {
      name: 'Chelsey Dietrich',
      city: 'Roscoeview',
      companyName: 'Keebler LLC'
    } */
fetchUserById(5).then(createSummary).catch(handleError);

log('fetching and processing user 1');
/*  {
      name: 'Leanne Graham',
      city: 'Gwenborough',
      companyName: 'Romaguera-Crona',
    } */
fetchUserById(1).then(createSummary).catch(handleError);

log('fetching and processing user 10');
/*  {
      name: 'Clementina DuBuque',
      city: 'Lebsackbury',
      companyName: 'Hoeger LLC',
    } */
fetchUserById(10).then(createSummary).catch(handleError);

log('fetching and processing user -1');
// 404
fetchUserById(-1).then(createSummary).catch(handleError);

log('= = = =  the call stack is empty  = = = =');
