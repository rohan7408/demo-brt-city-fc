import Image from "next/image";

import Navbar from "./components/nav-bar";
import Main from "./components/main";
import About from "./components/about";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
