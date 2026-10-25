import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

export const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  avatar: { type: DataTypes.STRING },
  activationLink: { type: DataTypes.STRING },
  activated: { type: DataTypes.BOOLEAN, defaultValue: false },
  resetToken: { type: DataTypes.STRING }
}, { tableName: 'users' });

User.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password;
  return values;
};

export const Category = sequelize.define('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.TEXT }
}, { tableName: 'categories' });

export const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  stock_quantity: { type: DataTypes.INTEGER, defaultValue: 0 }
}, { tableName: 'products' });

export const Review = sequelize.define('review', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT, allowNull: false }
}, { tableName: 'reviews' });

export const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  amount: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0 },
  status: { type: DataTypes.STRING, defaultValue: 'new' }
}, { tableName: 'orders' });

export const OrderItem = sequelize.define('order_item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  price_at_a_time: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
}, { tableName: 'order_items' });

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

User.hasMany(Review, { foreignKey: { name: 'user_id', allowNull: false } });
Review.belongsTo(User, { foreignKey: { name: 'user_id', allowNull: false } });

Product.hasMany(Review, { foreignKey: { name: 'product_id', allowNull: false } });
Review.belongsTo(Product, { foreignKey: { name: 'product_id', allowNull: false } });

User.hasMany(Order, { foreignKey: { name: 'user_id', allowNull: false } });
Order.belongsTo(User, { foreignKey: { name: 'user_id', allowNull: false } });

Order.hasMany(OrderItem, { foreignKey: { name: 'order_id', allowNull: false } });
OrderItem.belongsTo(Order, { foreignKey: { name: 'order_id', allowNull: false } });

Product.hasMany(OrderItem, { foreignKey: { name: 'product_id', allowNull: false } });
OrderItem.belongsTo(Product, { foreignKey: { name: 'product_id', allowNull: false } });
