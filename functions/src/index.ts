import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';
export { availableDates } from './availableDate';
export { tracks } from './trackData';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript
export const cors = process.env.CORS_URL?.split(', ');
console.log('-----', cors, process.env.CORS_URL?.split(', '));
export const helloworld = onRequest(
  {
    cors,
  },
  (request, response) => {
    logger.info('Hello logs!', { structuredData: true });
    response.send(
      `Hello ${process.env.PLANET} and ${
        process.env.AUDIENCE
      } ${cors} process: ${typeof process.env.CORS_URL} ${typeof []}`
    );
  }
);
