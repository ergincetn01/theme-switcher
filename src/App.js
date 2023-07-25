import { useEffect, useState } from "react";
import style from "./App.css";
import SignupForm from "./SignupForm";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeLastname = (e) => {
    setLastame(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const [bgColor, setBgColor] = useState("white");
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    if (bgColor === "white") {
      document.body.style.color = "black";
    } else if (bgColor === "black") {
      document.body.style.color = "white";
    }
    const allowSubmit = () => {
      setDisabled(false);
    };
    const blockSubmit = () => {
      setDisabled(true);
    };
  }, [bgColor]);

  const changeTheme = () => {
    if (isLight) {
      setBgColor("black");
      setIsLight(false);
    } else {
      setBgColor("white");
      setIsLight(true);
    }
  };

  const reset = () => {
    setName("");
    setLastame("");
    setEmail("");
    setPassword("");
  };
  const onSubmit = (e) => {
    console.log("name:" + name + "lastname" + lastname + "email:" + email);
    e.preventDefault();
    reset();
  };
  return (
    <div className="app">
      <div className="themeContainer">
        {isLight ? <h1>Light Theme</h1> : <h1>Dark Theme</h1>}
        <div
          className={`switch${isLight ? "Light" : "Dark"}`}
          onClick={changeTheme}
        >
          <div className="onOff"></div>
        </div>
      </div>
      <SignupForm
        isLight={isLight}
        name={name}
        updateName={changeName}
        lastname={lastname}
        updateLastname={changeLastname}
        submit={onSubmit}
        password={password}
        updatePassword={changePassword}
        email={email}
        updateEmail={changeEmail}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
