import { PhotoService } from './photo.service';
import { Request, Response } from 'express';

export class PhotoController {
  constructor(private readonly photoService?: PhotoService) {}

  async createPhoto(req: Request, res: Response) {
    const photo = req.body;
    const result = await this.photoService?.createPhoto(photo);
    res.json(result);
  }
}
