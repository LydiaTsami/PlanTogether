const Register: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Register Page</h1>
      <form>
        <div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
