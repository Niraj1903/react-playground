import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <>
      <div className="error-container">
        <h2 className="error-heading"> Opps!!!</h2>
        <h2 className="error-heading">Something went wrong!!</h2>
        <h1>
          {err.status} : {err.statusText}
        </h1>
      </div>
    </>
  );
};

export default Error;
