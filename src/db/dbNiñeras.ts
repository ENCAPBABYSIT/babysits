import * as dbNiñeras from './json/dbNiñeras.json';

// Define interfaces to match the JSON structure
interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Database {
  users: User[];
  products: Product[];
}

// Load the JSON file
const loadDatabase = (): Database => {
  const data = dbNiñeras.readFileSync('/json/dbNiñeras.json', 'utf-8');
  return JSON.parse(data);
};

// Example usage
const db = loadDatabase();
console.log('Users:', db.users);
console.log('Products:', db.products);

// You can add functions to manipulate the data
const findUserById = (id: number): User | undefined => {
  return db.users.find(user => user.id === id);
};

const findProductById = (id: number): Product | undefined => {
  return db.products.find(product => product.id === id);
};

// Example usage of the functions
const user = findUserById(1);
const product = findProductById(1);

console.log('User:', user);
console.log('Product:', product);
