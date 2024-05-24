import { Outlet } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

function AppLayout() {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
