import Container from "@/components/Container";
import Homebanner from "@/components/Homebanner";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="p-10">
      <Homebanner/>
    </Container>
  );
}
