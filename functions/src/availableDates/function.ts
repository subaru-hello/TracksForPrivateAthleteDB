import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';
import { allAvailableDates } from './availableDate';
import { getEnvVariable } from '../utils/getEnvVariables';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const availableDates = onRequest(
  {
    cors: getEnvVariable('IS_LOCAL')
      ? true
      : getEnvVariable('CORS_URL')?.split(', '),
  },
  (request, response) => {
    const availableDateObject = {
      message: 'fetch succeeded',
      availableDates: allAvailableDates,
    };
    logger.info('Hello logs!', allAvailableDates, { structuredData: true });
    response.send(availableDateObject);
  }
);
