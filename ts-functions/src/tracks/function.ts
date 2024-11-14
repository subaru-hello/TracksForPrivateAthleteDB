import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';
import { trackData, trackDetailById } from './track';
import { getEnvVariable } from '../utils/getEnvVariables';

console.log('Rotracksot:', getEnvVariable('IS_LOCAL'));
console.log('tracks:', getEnvVariable('CORS_URL'));

export const tracks = onRequest(
  {
    cors: getEnvVariable('IS_LOCAL')
      ? true
      : getEnvVariable('CORS_URL')?.split(', '),
  },
  (request, response) => {
    const trackObject = { hello: 'Hello from Firebase', trackData };
    logger.info(trackData, { structuredData: true });
    response.send(trackObject);
  }
);

export const trackById = onRequest(
  {
    cors: process.env.IS_LOCAL ? '*' : process.env.CORS_URL?.split(', '),
  },
  (request, response) => {
    console.log('req', request.body.trackId);
    const trackShowObject = {
      hello: `Hello from Firebase ${trackData}`,
      trackDetail: trackDetailById(request.body.trackId),
    };
    logger.info(trackShowObject, { structuredData: true });
    response.send(trackShowObject);
  }
);
