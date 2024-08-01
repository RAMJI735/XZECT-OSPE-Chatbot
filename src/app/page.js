import Image from "next/image";
import Chat from "./api/Chat";
import Navbar from "./components/navbar";


export default function Home() {
  return (
<>
<Navbar/>
<Chat/>

</>

  );
}
