import { Router } from 'express';
import { photoController } from './photo.module';

const photoRouter = Router();

photoRouter.post('/create', photoController.createPhoto.bind(photoController));

export { photoRouter };
