import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as functions from 'firebase-functions';
import express from 'express';

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};

createNestServer(server)
  // tslint:disable-next-line:no-console
  .then(() => {
    const hello = 'hello';
    return console.log(hello);
  })
  // tslint:disable-next-line:no-console
  .catch((err) => console.error('Nest broken', err));

export const hello = functions
  .region('asia-northeast1')
  .https.onRequest(server);
