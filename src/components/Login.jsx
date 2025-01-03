const Login = () => {
  return (
    <div>
      <h3 className="text-center mt-5 text-primary">Login</h3>

      <form className="w-25 mx-auto login">
        <div className="form-floating">
          <input
            type="email"
            id="email"
            placeholder="email"
            required
            className="form-control login-email"
          />
          <label for="email">Email address:</label>
        </div>
        <div className="mt-3 form-floating">
          <input
            type="password"
            id="password"
            placeholder="password"
            required
            className="form-control login-password"
          />
          <label htmlFor="email">Password</label>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="btn btn-primary mx-auto d-block w-25"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
