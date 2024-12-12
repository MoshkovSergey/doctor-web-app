import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Home</h1>
      <Button>Test</Button>
      
      built with Next.js
    </div>
  );
}
