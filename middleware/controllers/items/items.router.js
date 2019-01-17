'use strict';

import { Router } from 'express';
import { GetAllItems } from "./items-get-all";
import { GetItemById } from "./items-get-by-id";

export const ItemsRouter = new Router();

ItemsRouter.get('/', GetAllItems);
ItemsRouter.get('/:id', GetItemById);
