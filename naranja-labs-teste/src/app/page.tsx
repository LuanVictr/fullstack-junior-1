import Body from "@/components/body";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col w-screen">
    <Header />
    <Body />
   </div>
  );
}

// por o heigth no maximo arrumar o botao, arrumar o espaçamento entre o p e o botao, fazer os svgs debaixo e pensar na imagem
