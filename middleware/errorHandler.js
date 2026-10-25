export default function errorHandler(err, req, res, next) {
  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({ message: err.errors.map(e => e.message).join('; ') });
  }
  if (err.name === 'SequelizeForeignKeyConstraintError') {
    return res.status(400).json({ message: 'Связанная запись не найдена или используется в других записях' });
  }
  if (err.name === 'SequelizeDatabaseError') {
    return res.status(400).json({ message: 'Некорректные данные запроса' });
  }
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Некорректный JSON' });
  }
  console.error(err);
  res.status(500).json({ message: 'Внутренняя ошибка сервера' });
}
