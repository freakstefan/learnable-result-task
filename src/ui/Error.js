import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="">
      <h1 className=" ">Something went wrong</h1>

      <p className="">{error.data || error.message}</p>

      <button onClick={() => navigate(-1)} className="">
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
