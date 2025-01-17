import { PhotoRepository } from './photo.repository';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';

const photoRepository = new PhotoRepository();
const photoService = new PhotoService(photoRepository);
const photoController = new PhotoController(photoService);

export { photoController };
