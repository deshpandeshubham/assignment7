/* eslint-disable linebreak-style */
/* global db print */
/* eslint no-restricted-globals: "off" */

const names = ['USPA', 'Adidas', 'Reebok', 'Holister', 'Nike', 'Perfume'];
const categories = ['shirt', 'jeans', 'sweater', 'jacket', 'accessories'];

const initialCount = db.items.count();

for (let i = 0; i < 100; i += 1) {
  const Name = names[Math.floor(Math.random() * 6)];
  const Category = categories[Math.floor(Math.random() * 5)];
  const Price = Math.ceil(Math.random() * 20);
  const Image = `url${i}`;
  const id = initialCount + i + 1;
  const prd = {
    id, Name, Price, Image, Category,
  };
  db.items.insertOne(prd);
}

const count = db.items.count();
db.counters.update({ _id: 'items' }, { $set: { current: count } });
print('New product count:', count);
