import { Router } from 'express';
import { photoRouter } from './features/photo/photo.routes';

const router = Router();

router.use('/photo', photoRouter);

export { router };
