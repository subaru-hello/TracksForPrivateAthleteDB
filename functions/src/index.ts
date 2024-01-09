import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';
export { availableDates } from './availableDates';
export { tracks, trackById } from './tracks';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript
export const helloworld = onRequest(
  {
    cors: process.env.IS_LOCAL ? '*' : process.env.CORS_URL?.split(', '),
  },
  (_, response) => {
    logger.info('Hello logs!', { structuredData: true });
    response.send('Hello');
  }
);
