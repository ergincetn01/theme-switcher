import "./Form.css";
function SignupForm({
  isLight,
  submit,
  name,
  updateName,
  lastname,
  updateLastname,
  email,
  updateEmail,
  password,
  updatePassword,
  disabled
}) {
  return (
    <div className={isLight ? "formLight" : "formDark"}>
      <h3 className={isLight ? "h3light" : "h3dark"}>Sign Up for free!</h3>
      <form onSubmit={submit}>
        <p>First Name</p>
        <input value={name} placeholder="Enter your first name..." onChange={updateName} type="text" />
        <p>Last Name</p>
        <input value={lastname} placeholder="Enter your last name..." onChange={updateLastname} type="text" />
        <p>Email</p>
        <input value={email} placeholder="Enter your e-mail address..." onChange={updateEmail} type="text" />
        <p>Password</p>
        <input value={password} placeholder="Enter your password..." onChange={updatePassword} type="text" />
        <div className="btn-container">
          <button className="submit" disabled={disabled} onSubmit={submit}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
