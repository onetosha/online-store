import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'Смартфон', description: 'Экран 6.5 дюймов, 128 ГБ', manufacturer: 'Samsung', price: 25000 },
  { id: 2, name: 'Ноутбук', description: '16 ГБ ОЗУ, SSD 512 ГБ', manufacturer: 'Lenovo', price: 60000 },
  { id: 3, name: 'Наушники', description: 'Беспроводные, шумоподавление', manufacturer: 'Sony', price: 12000 }
];
let nextId = 4;

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Продукт не найден' });
  }
  res.json(product);
});

app.post('/products', (req, res) => {
  const { name, description, manufacturer, price } = req.body || {};
  if (!name || !description || !manufacturer || price === undefined) {
    return res.status(400).json({ message: 'Необходимо указать name, description, manufacturer и price' });
  }
  const product = { id: nextId++, name, description, manufacturer, price: Number(price) };
  products.push(product);
  res.status(201).json(product);
});

app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Продукт не найден' });
  }
  const { name, description, manufacturer, price } = req.body || {};
  if (name !== undefined) product.name = name;
  if (description !== undefined) product.description = description;
  if (manufacturer !== undefined) product.manufacturer = manufacturer;
  if (price !== undefined) product.price = Number(price);
  res.json(product);
});

app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Продукт не найден' });
  }
  const deleted = products.splice(index, 1)[0];
  res.json(deleted);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
