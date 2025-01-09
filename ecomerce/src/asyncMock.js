import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./services/firebase";

const products = [
  {
    id: "1",
    name: "Playera Nastee",
    price: 299,
    category: "playeras",
    img: "https://m.media-amazon.com/images/I/81Tg4eD0hoL._AC_SX679_.jpg",
    stock: 25,
    description: "Playera de algodón con diseño exclusivo.",
  },
  {
    id: "2",
    name: "Sudadera Nastee",
    price: 499,
    category: "sudaderas",
    img: "https://m.media-amazon.com/images/I/71jfMY1NpZS._AC_SY879_.jpg",
    stock: 20,
    description: "Sudadera de algodón ideal para el frío.",
  },
  {
    id: "3",
    name: "Playera Cool",
    price: 249,
    category: "playeras",
    img: "https://m.media-amazon.com/images/I/91Cn+j5d4ML._AC_SY879_.jpg",
    stock: 30,
    description: "Estilo fresco y cómodo para cualquier ocasión.",
  },
  {
    id: "4",
    name: "Sudadera Urban",
    price: 599,
    category: "sudaderas",
    img: "https://m.media-amazon.com/images/I/71b0rOFKTUL._AC_SX679_.jpg",
    stock: 15,
    description: "Perfecta para un look casual y urbano.",
  },
  {
    id: "5",
    name: "Playera Street",
    price: 279,
    category: "playeras",
    img: "https://m.media-amazon.com/images/I/81fsyO75VHS._AC_SY879_.jpg",
    stock: 18,
    description: "Diseño callejero para destacar.",
  },
  {
    id: "6",
    name: "Sudadera Comfort",
    price: 520,
    category: "sudaderas",
    img: "https://m.media-amazon.com/images/I/61neCjTolQL._AC_SX679_.jpg",
    stock: 22,
    description: "Comodidad y estilo en una sola pieza.",
  },
  {
    id: "7",
    name: "Playera Classic",
    price: 259,
    category: "playeras",
    img: "https://m.media-amazon.com/images/I/71Ne0qee7QL._AC_SY879_.jpg",
    stock: 35,
    description: "Un básico que no puede faltar en tu armario.",
  },
  {
    id: "8",
    name: "Sudadera Polar",
    price: 649,
    category: "sudaderas",
    img: "https://m.media-amazon.com/images/I/91LMt7N5DCL._AC_SY879_.jpg",
    stock: 10,
    description: "Perfecta para las bajas temperaturas.",
  },
  {
    id: "9",
    name: "Playera Graphic",
    price: 299,
    category: "playeras",
    img: "https://m.media-amazon.com/images/I/91LmL-OSzIL._AC_SY879_.jpg",
    stock: 20,
    description: "Con gráficos únicos y llamativos.",
  },
  {
    id: "10",
    name: "Sudadera Sport",
    price: 479,
    category: "sudaderas",
    img: "https://m.media-amazon.com/images/I/61aQ+3Rk6iL._AC_SX679_.jpg",
    stock: 18,
    description: "Para un look deportivo y casual.",
  },
  {
    id: "11",
    name: "Playera Minimal",
    price: 239,
    category: "playeras",
    img: "https://m.media-amazon.com/images/I/51Hy3MiN8SL._AC_SX679_.jpg",
    stock: 40,
    description: "Diseño simple y elegante.",
  },
  {
    id: "12",
    name: "Sudadera Retro",
    price: 560,
    category: "sudaderas",
    img: "https://m.media-amazon.com/images/I/81lX52kCw1L._AC_SX679_.jpg",
    stock: 12,
    description: "Estilo retro que nunca pasa de moda.",
  },
  {
    id: "13",
    name: "Playera Vibrant",
    price: 289,
    category: "playeras",
    img: "https://m.media-amazon.com/images/I/81S-MQjyy3L._AC_SY879_.jpg",
    stock: 28,
    description: "Colores vivos para resaltar.",
  },
  {
    id: "14",
    name: "Sudadera Deluxe",
    price: 680,
    category: "sudaderas",
    img: "https://m.media-amazon.com/images/I/514BAwuax+L._AC_SX679_.jpg",
    stock: 8,
    description: "Material de alta calidad para un look premium.",
  },
  {
    id: "15",
    name: "Playera Sport",
    price: 269,
    category: "playeras",
    img: "https://m.media-amazon.com/images/I/81BrhaMunQL._AC_SX679_.jpg",
    stock: 25,
    description: "Ligera y transpirable, ideal para el ejercicio.",
  },
  {
    id: "16",
    name: "Sudadera Hoodie",
    price: 510,
    category: "sudaderas",
    img: "https://m.media-amazon.com/images/I/51eiNUtaLTL._AC_SX679_.jpg",
    stock: 14,
    description: "Con capucha y bolsillos funcionales.",
  },
  {
    id: "17",
    name: "Playera Tropical",
    price: 299,
    category: "playeras",
    img: "https://m.media-amazon.com/images/I/41wRc11oRxL._AC_SX679_.jpg",
    stock: 19,
    description: "Perfecta para días soleados.",
  },
  {
    id: "18",
    name: "Sudadera Classic Fit",
    price: 540,
    category: "sudaderas",
    img: "https://m.media-amazon.com/images/I/515eqs3A5jL._AC_SX679_.jpg",
    stock: 17,
    description: "Un estilo clásico que siempre queda bien.",
  },
];


export const getProducts = () => {
  return new Promise((resolve) => {
    resolve(products);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    resolve(products.filter((prod) => prod.category === categoryId));
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    resolve(products.find((prod) => prod.id === productId));
  });
};

export const subirProductosFake = async () => {
  const bactch = writeBatch(db);
  const productRef = collection(db, "products");

  products.forEach((item) => {
    const nuevoDoc = doc(productRef);
    bactch.set(nuevoDoc, item);
  });

  try {
    await bactch.commit();
    console.log("Todos los productos fueron cargados");
  } catch (error) {
    console.log("Error al subir productos", error);
  }
};
