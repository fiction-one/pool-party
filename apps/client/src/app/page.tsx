import { Inter } from "next/font/google";
import ClientComponent from "../lib/client-component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ClientComponent />;
    </>
  );
}
