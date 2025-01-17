import { DataSource } from 'typeorm';
import { Photo } from '../features/photo/photo.entity';

const { DB_NAME, DB_USER, DB_PORT, DB_PASSWORD } = process.env;

export const dbConfig = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Photo],
  synchronize: true,
  logging: ['error'],
});
