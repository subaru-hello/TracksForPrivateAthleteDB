import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';
import { cors } from '..';
import { trackData } from './track';

export const tracks = onRequest(
  {
    cors,
  },
  (request, response) => {
    const helloObject = { hello: 'Hello from Firebase', trackData };
    logger.info('Hello logs!', { structuredData: true });
    response.send(helloObject);
  }
);
