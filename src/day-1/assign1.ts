interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

type Category = 'electronics' | 'books' | 'clothing';


function describeProduct(product: Product): string {
  return `${product.name} costs $${product.price}`;
}

//testing
const laptop: Product = {
  id: "1",
  name: "Laptop",
  price: 999,
  inStock: true
};

console.log(describeProduct(laptop));