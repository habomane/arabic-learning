import { Outlet } from "react-router-dom";
function AppLayout() {

  return (
    <div className="">
      <header>
        header here
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        footer here
      </footer>
    </div>
  );
}

export default AppLayout;