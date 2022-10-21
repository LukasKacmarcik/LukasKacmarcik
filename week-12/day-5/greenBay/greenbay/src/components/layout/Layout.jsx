import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ paddingBottom: "40px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
