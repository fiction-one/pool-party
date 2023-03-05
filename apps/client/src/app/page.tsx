import { Inter } from "next/font/google";
import { Button } from "@f1/ui/src";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>F1</h1>
      <Button />
    </div>
  );
}
