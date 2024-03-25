import { Link } from "react-router-dom";
import { calcAverage } from "../../services/helper";
import { useDispatch } from "react-redux";
import { openNav } from "../user/userSlice";

function AllStudents({ data, i }) {
  const dispatch = useDispatch();

  function hideNav() {
    dispatch(openNav(false));
  }
  const { studentId, name, scores, track } = data;

  return (
    <div>
      <div className="results">
        <div className="index">{i + 1}</div>
        <p className="full-name">{name}</p>
        <p className="track">{track}</p>
        <p className="avg">{calcAverage(scores)}%</p>

        <Link
          className="link"
          to={`/app/studentInfo/${studentId}`}
          onClick={hideNav}
        >
          full result
        </Link>
      </div>
    </div>
  );
}

export default AllStudents;
