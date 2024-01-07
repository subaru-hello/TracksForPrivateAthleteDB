import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';
import { cors } from '..';
import { allAvailableDates } from './availableDate';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const availableDates = onRequest(
  {
    cors,
  },
  (request, response) => {
    const availableDateObject = {
      message: 'fetch succeeded',
      availableDates: allAvailableDates,
    };
    logger.info('Hello logs!', { structuredData: true });
    response.send(availableDateObject);
  }
);
