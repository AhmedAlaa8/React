import Image from "next/image";
import Pub from "@/compo/pop";

function X() {
  return (
    <>
      <Pub text="hikiik" />
      <div>1</div>
    </>
  )
}


function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Pub text="hikiik" />
      <p>ahmed</p>
      <X />

    </main>
  );
}

export default Home;
