import { PhotoRepository } from './photo.repository';

export class PhotoService {
  constructor(private readonly photoRepository: PhotoRepository) {}

  async createPhoto(photo: any) {
    return await this.photoRepository.createPhoto(photo);
  }
}
