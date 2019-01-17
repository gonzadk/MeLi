'use strict';

import { Router } from 'express';
import { ItemsRouter } from "../controllers/items/items.router";

export const MiddlewareRouter = Router();

MiddlewareRouter.use('/items', ItemsRouter);
