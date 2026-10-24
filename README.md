# Online Store

Серверное приложение интернет-магазина на платформе Node.js с использованием фреймворка Express.js.

## Содержание

- [Установка и запуск](#установка-и-запуск)
- [Лабораторная работа №1](#лабораторная-работа-1)

## Установка и запуск

Клонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/onetosha/online-store.git
cd online-store
npm install
```

Запустите сервер:

```bash
npm start
```

Для разработки используйте режим с автоматическим перезапуском при изменении файлов:

```bash
npm run dev
```

После запуска сервер доступен по адресу `http://localhost:3000`. Порт можно изменить через переменную окружения `PORT`.

Чтобы остановить сервер, нажмите `Ctrl + C`.

---

## Лабораторная работа №1

### Задание

Разработать серверное приложение «Online store» на платформе Node.js с помощью фреймворка Express.js. Приложение должно возвращать список продуктов. Каждый продукт должен содержать название, описание, производителя и цену. Список продуктов хранится в массиве. Должна быть возможность выполнять CRUD-операции: получение, добавление, обновление и удаление.

### Модель продукта

| Поле | Тип | Описание |
|---|---|---|
| `id` | number | Уникальный идентификатор, присваивается автоматически |
| `name` | string | Название |
| `description` | string | Описание |
| `manufacturer` | string | Производитель |
| `price` | number | Цена |

Пример продукта:

```json
{
  "id": 1,
  "name": "Смартфон",
  "description": "Экран 6.5 дюймов, 128 ГБ",
  "manufacturer": "Samsung",
  "price": 25000
}
```

### API

| Метод | Адрес | Описание |
|---|---|---|
| GET | `/products` | Получить список всех продуктов |
| GET | `/products/:id` | Получить продукт по `id` |
| POST | `/products` | Добавить новый продукт |
| PUT | `/products/:id` | Обновить продукт по `id` |
| DELETE | `/products/:id` | Удалить продукт по `id` |

#### Получение всех продуктов

```
GET /products
```

Ответ `200 OK` содержит массив продуктов.

#### Получение продукта по id

```
GET /products/1
```

Ответ `200 OK` содержит объект продукта. Если продукт не найден, возвращается `404 Not Found`.

#### Добавление продукта

```
POST /products
Content-Type: application/json
```

Тело запроса (все поля обязательны):

```json
{
  "name": "Мышь",
  "description": "Беспроводная",
  "manufacturer": "Logitech",
  "price": 1500
}
```

Ответ `201 Created` содержит созданный продукт с присвоенным `id`. Если какое-либо поле не указано, возвращается `400 Bad Request`.

#### Обновление продукта

```
PUT /products/1
Content-Type: application/json
```

В теле запроса передаются только те поля, которые нужно изменить:

```json
{
  "price": 23000
}
```

Ответ `200 OK` содержит обновлённый продукт. Если продукт не найден, возвращается `404 Not Found`.

#### Удаление продукта

```
DELETE /products/1
```

Ответ `200 OK` содержит удалённый продукт. Если продукт не найден, возвращается `404 Not Found`.

### Проверка работы

Запросы GET можно открыть в браузере, например `http://localhost:3000/products`.

Для остальных запросов удобно использовать Postman: выберите метод, укажите адрес, а на вкладке **Body** выберите **raw** и **JSON** и введите тело запроса.

Примеры запросов через `curl` (Linux, macOS, Git Bash):

```bash
curl http://localhost:3000/products

curl http://localhost:3000/products/1

curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name":"Mouse","description":"Wireless","manufacturer":"Logitech","price":1500}'

curl -X PUT http://localhost:3000/products/1 -H "Content-Type: application/json" -d '{"price":23000}'

curl -X DELETE http://localhost:3000/products/1
```

Те же запросы в PowerShell:

```powershell
Invoke-RestMethod http://localhost:3000/products

Invoke-RestMethod http://localhost:3000/products/1

Invoke-RestMethod -Method Post -Uri http://localhost:3000/products -ContentType "application/json" -Body '{"name":"Mouse","description":"Wireless","manufacturer":"Logitech","price":1500}'

Invoke-RestMethod -Method Put -Uri http://localhost:3000/products/1 -ContentType "application/json" -Body '{"price":23000}'

Invoke-RestMethod -Method Delete -Uri http://localhost:3000/products/1
```

### Особенности

Данные хранятся в массиве в оперативной памяти. При запуске в нём три тестовых продукта, а после перезапуска сервера все изменения сбрасываются.