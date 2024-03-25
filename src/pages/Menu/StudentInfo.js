import { useNavigate, useParams } from "react-router-dom";

import { calcAverage, loadStudentData } from "../../services/helper";
import { useDispatch } from "react-redux";
import { openNav } from "../user/userSlice";

function StudentInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = loadStudentData(id);

  const { name, img, scores, track } = student;

  const dispatch = useDispatch();
  function handleBack() {
    navigate(-1);

    dispatch(openNav(true));
  }
  return (
    <>
      <button className="backBtn" onClick={handleBack}>
        &larr; Go back
      </button>
      <div className="student-info">
        <div>
          <img src={img} alt="student" style={{ borderRadius: "50%" }} />
        </div>

        <div className="info">
          <span>
            <p className="full-names nme">Name:</p>
            <p className="full-names">{name}</p>
          </span>
          <span>
            <p className="tracks">Track:</p>
            <p className="tracks">{track}</p>
          </span>

          <div className="score dsco">
            <div className="full-names  scorelis">Scores:</div>
            <div className="tasks">
              {scores.map((score, i) => (
                <ScoresList score={score} key={i} i={i} />
              ))}
            </div>
          </div>
          <span>
            <p className="avgg">Avg. Score</p>
            <p className="avgg">{calcAverage(scores)}%</p>
          </span>
        </div>
      </div>
    </>
  );
}

function ScoresList({ score, i }) {
  return (
    <div className="task-scores">
      <span className="keyTask">Task {i + 1} score:</span>
      <span className="keyscore">{score}</span>
    </div>
  );
}

export default StudentInfo;
