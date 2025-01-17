import { Repository } from 'typeorm';
import { dbConfig } from '../../config/typeorm';
import { Photo } from './photo.entity';

export class PhotoRepository {
  private repository: Repository<Photo>;

  constructor() {
    this.repository = dbConfig.getRepository(Photo);
  }

  async createPhoto(photo: any) {
    return await this.repository.save(photo);
  }
}
