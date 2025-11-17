function formatValue(
  val: string | number | boolean
): string | number | boolean {
  if (typeof val === "string") {
    return val.toUpperCase();
  } else if (typeof val === "number") {
    return val * 10;
  } else {
    return val === true ? false : true;
  }
}

function getLength(val: string | unknown[]): number {
  if (typeof val === "string") {
    return val.length;
  }
  if (Array.isArray(val)) {
    return val.length;
  }

  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Rating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

type bookType = {
  title: string;
  rating: Rating;
};

function filterByRating<T extends bookType>(arrOfObj: T[]): T[] {
  return arrOfObj.filter((obj) => obj.rating >= 4);
}

type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers<T extends UserType>(users: T[]): T[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? "Yes" : "No"}`;
}

function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]) {
  const newArray: (number | string)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    let isFound = false;
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === arr2[i]) {
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      newArray.push(arr2[i]);
    }
  }

  return newArray;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const basePrice = product.quantity * product.price;
    let finalPrice: number;
    if (product.discount) {
      const discountPrice = basePrice * (1 - product.discount / 100);
      finalPrice = discountPrice;
    } else {
      finalPrice = basePrice;
    }
    return total + finalPrice;
  }, 0);
}
