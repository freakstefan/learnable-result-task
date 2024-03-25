import { useEffect } from "react";
import { studentsResults } from "../../services/studentsObject";
import Header from "../../ui/Header";
import AllStudents from "./AllStudents";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  allStudents,
  menuOpen,
  openMenu,
  updateStudents,
} from "../user/userSlice";

// const studentsData = studentsResults;

function Menu() {
  const dispatch = useDispatch();
  const studentsData = useSelector(allStudents);
  const isOpen = useSelector(menuOpen);

  useEffect(
    function () {
      dispatch(updateStudents(studentsResults));
    },
    [dispatch]
  );

  function handleIsOpen() {
    dispatch(openMenu(true));
  }

  return (
    <div>
      <Header open={isOpen} />

      {!isOpen && (
        <div className="btnR">
          <Button onClick={handleIsOpen}>Show genies resulsts</Button>
        </div>
      )}
      {isOpen &&
        studentsData.map((data, i) => (
          <AllStudents data={data} i={i} key={data.studentId} />
        ))}
    </div>
  );
}

export default Menu;
