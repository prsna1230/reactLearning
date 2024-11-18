import { useRouteError } from "react-router-dom";

export default ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>OOPS..!!</h2>
      <h3>
        {err.status}: {err.error.message}
      </h3>
    </div>
  );
};
