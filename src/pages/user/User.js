import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";

function User() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // move to redux
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    dispatch(updateName(name));

    navigate("/app");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="header loginH">
        {name
          ? `Hey ${name} Click enter to continue`
          : "Hey Genie Enter Your name to continue!"}
      </h1>
      <div className="login">
        <input
          className="userInput"
          type="text"
          placeholder="Enter your name genie"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {name.length > 0 && <Button className="submit-Btn">Go genie</Button>}
      </div>
    </form>
  );
}

export default User;
