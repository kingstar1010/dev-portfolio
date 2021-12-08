import type { NextPage } from "next";
import Landing from "./landing";
import NavBar from "../components/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Landing />
    </div>
  );
};

export default Home;
