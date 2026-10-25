import './env.js';
import express from 'express';
import sequelize from './db.js';
import router from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

try {
  await sequelize.authenticate();
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  });
} catch (error) {
  console.error('Не удалось подключиться к базе данных:', error.message);
}
