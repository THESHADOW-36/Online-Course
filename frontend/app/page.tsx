import Image from "next/image";
import Link from "next/link";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <a href="/dashboard">a Dashboard</a>
      <br />
      <Link href="/dashboard">link Dashboard</Link>
      <Products />
    </main>
  );
}
