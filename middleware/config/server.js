'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import { ServerConstants } from './server.constants';
import { MiddlewareRouter } from '../router/router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ServerConstants.URI, MiddlewareRouter);

app.listen(
  ServerConstants.PORT,
  () => console.log(`Server listening on http://localhost: ${ServerConstants.PORT}`)
);