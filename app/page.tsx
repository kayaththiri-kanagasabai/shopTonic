import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="p-10 bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quas natus excepturi facere hic officiis dignissimos possimus corrupti fuga, odio nobis. At vitae omnis doloribus error, est natus odit similique libero? Ipsa harum repellendus ipsam excepturi fugit quam quia ab repudiandae minus. Inventore eum placeat voluptatibus repellat itaque beatae maxime, reprehenderit maiores nihil, possimus dicta sunt magni delectus esse quia consequuntur! Dignissimos possimus provident tempore. Eaque sint nisi neque non fugit harum provident, quisquam odio autem id dolorum inventore voluptas eius accusantium laborum optio cumque debitis sequi culpa, architecto doloremque. Eligendi dolores maiores odit? Reiciendis eveniet illum numquam provident molestias?</p>
      <Button className="">Check out</Button>
    </Container>
  );
}
