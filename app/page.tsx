import Image from "next/image";

function Pub() {
  return (
    <div>hi</div>
  )
}

function X() {
  return (
    <>
      <Pub />
      <div>5</div>
    </>
  )
}


function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Pub />
      <p>ahmed</p>
      <X />

    </main>
  );
}

export default Home;
