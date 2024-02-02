import { useRouteError } from "react-router-dom";
// import {useNavigate} from "react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
//   const navigate = useNavigate();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {/* <button onClick={navigate}>Back to home</button> */}
    </div>
  );
}