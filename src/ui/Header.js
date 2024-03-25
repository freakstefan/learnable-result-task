import { useState } from "react";
import { findTrack } from "../services/helper";
import { useDispatch, useSelector } from "react-redux";
import { allStudents, updateStudents } from "../pages/user/userSlice";
import { studentsResults } from "../services/studentsObject";

function Header({ open }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tracks, setTracks] = useState("Learnable ");

  const dispatch = useDispatch();
  function handleClick(track) {
    const students = findTrack(track);

    dispatch(updateStudents(students));
    setTracks(track);
    setIsOpen((isop) => !isop);
  }

  function handleOpenModal() {
    setIsOpen((isop) => !isop);
  }
  return (
    <header className="head">
      <h1 className="header">{`${tracks} interns Results`}</h1>

      {open && (
        <span className={`head-span`}>
          <img
            src="/sort-removebg-preview.png"
            alt="sort"
            onClick={handleOpenModal}
          />
          <SortInfo
            handleClick={handleClick}
            dispatch={dispatch}
            isOpen={isOpen}
            setTracks={setTracks}
            setIsOpen={setIsOpen}
          />
        </span>
      )}
    </header>
  );
}

function SortInfo({ isOpen, handleClick, setTracks, dispatch, setIsOpen }) {
  const studentsLists = useSelector(allStudents);

  if (studentsLists.length > 80) setTracks("Learnable");
  return (
    <div className={`sort-details ${!isOpen ? "transition" : "transBack"}`}>
      <p
        className="head-p"
        onClick={() => {
          dispatch(updateStudents(studentsResults));
          setTracks("Learnable");
          setIsOpen((isop) => !isop);
        }}
      >
        All students
      </p>
      <p className="head-p" onClick={() => handleClick("product design")}>
        Product Designers
      </p>
      <p className="head-p" onClick={() => handleClick("Frontend")}>
        Frontend{" "}
      </p>
      <p className="head-p" onClick={() => handleClick("backend")}>
        Backend
      </p>
      <p className="head-p" onClick={() => handleClick("web3")}>
        Web 3
      </p>
    </div>
  );
}

export default Header;
