import type { Book } from "../types/types.Book";

export const books : Book[] = [
    {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 499,
    isAvailable: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 699,
    isAvailable: true,
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 899,
    isAvailable: false,
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 550,
    isAvailable: true,
  }
]