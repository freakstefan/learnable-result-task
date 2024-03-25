import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { navOpen } from "../pages/user/userSlice";

function AppLayout() {
  const navOpened = useSelector(navOpen);

  return (
    <div>
      {navOpened && <Nav />}

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
