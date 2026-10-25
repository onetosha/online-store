export default class BaseController {
  constructor(model, include = []) {
    this.model = model;
    this.include = include;
  }

  getAll = async (req, res) => {
    const items = await this.model.findAll({
      include: this.include,
      order: [['id', 'ASC']]
    });
    res.json(items);
  };

  getOne = async (req, res) => {
    const item = await this.model.findByPk(req.params.id, { include: this.include });
    if (!item) {
      return res.status(404).json({ message: 'Запись не найдена' });
    }
    res.json(item);
  };

  create = async (req, res) => {
    const { id, ...data } = req.body || {};
    const item = await this.model.create(data);
    res.status(201).json(item);
  };

  update = async (req, res) => {
    const item = await this.model.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Запись не найдена' });
    }
    const { id, ...data } = req.body || {};
    await item.update(data);
    res.json(item);
  };

  delete = async (req, res) => {
    const item = await this.model.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Запись не найдена' });
    }
    await item.destroy();
    res.json(item);
  };
}
