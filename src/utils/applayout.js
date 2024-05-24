import { Outlet } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

function AppLayout() {
  return (
    <div className="">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
