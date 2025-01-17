import 'reflect-metadata';
import 'dotenv/config';
import { app } from './config/app';
import { dbConfig } from './config/typeorm';

const { API_PORT } = process.env;

dbConfig
  .initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(API_PORT || 3334, () => {
      console.log(`Server is running on port ${API_PORT || 3334}`);
    });
  })
  .catch((err) => console.log(err));
