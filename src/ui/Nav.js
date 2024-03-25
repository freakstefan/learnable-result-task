import { useDispatch, useSelector } from "react-redux";
import {
  menuOpen,
  resetSearch,
  updateStudents,
  username,
} from "../pages/user/userSlice";
import { useNavigate } from "react-router-dom";
import { findStudent } from "../services/helper";
import { useEffect, useState } from "react";

function Nav() {
  const userName = useSelector(username);
  const menu = useSelector(menuOpen);


  // const menu = useSelector(openMenu)
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function handleClick() {
    navigate("/");
  }
  const dispatch = useDispatch();

  useEffect(
    function () {
      const student = findStudent(query);
      if (!query) dispatch(resetSearch());

      dispatch(updateStudents(student));
    },
    [query, dispatch]
  );

  return (
    <nav className="nav">
      <p className="logo" onClick={handleClick} style={{ cursor: "pointer" }}>
        Learnable task
      </p>
      <form>
        {menu && (
          <input
            type="text"
            placeholder="Search Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
      </form>
      <h1 className="username">{userName}</h1>
    </nav>
  );
}

export default Nav;
