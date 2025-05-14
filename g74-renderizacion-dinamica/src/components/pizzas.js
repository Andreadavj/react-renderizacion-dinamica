import pestoMargarita from '../assets/img/pesto-margarita.png';
import criolla from '../assets/img/criolla.png';
import pepperoni from '../assets/img/pepperoni.png';
import espanola from '../assets/img/española.png';
import todasLasCarnes from '../assets/img/todas-las-carnes.png';
import classic from '../assets/img/classic.png';
import formaggi from '../assets/img/formaggi.jpg';
import hawaiTocino from '../assets/img/Hawai.jpg';
import iberica from '../assets/img/una.jpg';
import bbq from '../assets/img/bbq.png'; // asegúrate que el archivo exista

const pizzas = [
  {
    id: 1,
    name: "Pesto Margarita",
    ingredients: ["Tomate cherry", "Mozzarella", "Pesto"],
    stock: 10,
    quantity: 0,
    price: 5950,
    image: pestoMargarita,
  },
  {
    id: 2,
    name: "Criolla",
    ingredients: ["Tomate", "Chorizo", "Pimiento verde"],
    stock: 8,
    quantity: 0,
    price: 11990,
    image: criolla,
  },
  {
    id: 3,
    name: "Española",
    ingredients: ["Tomate", "Pepperoni", "Pimentón"],
    stock: 8,
    quantity: 0,
    price: 11990,
    image: espanola,
  },
  {
    id: 4,
    name: "Todas las Carnes",
    ingredients: ["Jamón", "Pepperoni", "Tocino"],
    stock: 6,
    quantity: 0,
    price: 13990,
    image: todasLasCarnes,
  },
  {
    id: 5,
    name: "Classic",
    ingredients: ["Aceitunas", "Jamón", "Mozzarella"],
    stock: 7,
    quantity: 0,
    price: 10990,
    image: classic,
  },
  {
    id: 6,
    name: "Formaggi",
    ingredients: ["Mozzarella", "Salsa de tomate", "Parmesano", "Roquefort"],
    stock: 9,
    quantity: 0,
    price: 16000,
    image: formaggi,
  },
  {
    id: 7,
    name: "Hawai Tocino",
    ingredients: ["Salsa de tomate", "Tocino", "Cebolla", "Piña en cubos"],
    stock: 5,
    quantity: 0,
    price: 5420,
    image: hawaiTocino,
  },
  {
    id: 8,
    name: "BBQ Chicken",
    ingredients: ["BBQ Sauce", "Mozzarella", "Chicken", "Red Onions"],
    stock: 6,
    quantity: 0,
    price: 7780,
    image: bbq,
  },
  {
    id: 9,
    name: "Ibérica",
    ingredients: ["Mozzarella", "Jamón serrano", "Rúcula", "Parmesano"],
    stock: 10,
    quantity: 0,
    price: 9990,
    image: iberica,
  },
];

export default pizzas;
