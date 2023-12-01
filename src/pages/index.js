import Image from "next/image";
import { Inter } from "next/font/google";
import { headers } from "../../next.config";
import Form from "@/components/ui/form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <main>
      <Form />
    </main>
  );
}
