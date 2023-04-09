import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Product from "./catalog/page";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ProductCard from "./catalog/ProductCard";

const inter = Inter({ subsets: ["latin"] });

export const producttest = [
  {
    id: 1,
    name: "first",
    description: "lorem ipsum",
    sku: "number",
    imageUrl: "/images/placeholder.png",
    status: "number",
    category: "string",
  },

  {
    id: 2,
    name: "second",
    description: "lorem ipsum",
    sku: "number",
    imageUrl: "/images/placeholder.png",
    status: "number",
    category: "string",
  },

  {
    id: 3,
    name: "last",
    description: "lorem ipsum",
    sku: "number",
    imageUrl: "/images/placeholder.png",
    status: "number",
    category: "string",
  },
];

export default function Home() {
  if (producttest.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className="
                pt-24
                grid
                grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-5
                2xl:grid-cols-6
                gap-8
                ">
          {producttest.map((producttest: any) => {
            return (

                <ProductCard 
                key={producttest.id} 
                data={producttest} />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
