import React, { useState } from "react";
import styles from "./loginPage.module.scss";
import eyeIcon from "../../assets/images/login/Eye.svg";
import eyeIconNoVisible from "../../assets/images/login/Eye_NoVisible.svg";
import login_picture from "../../assets/images/login/LoginPicture.png";
import { useNavigate } from "react-router";
import Button from "../../components/buttons/Button.jsx";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/authCookie.js";

function LoginPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const inputType = showPassword ? "text" : "password";

  const [adminValue, setAdminValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleChangeAdminValue = (e) => {
    setAdminValue(e.target.value);
  };

  const handleChangePasswordValue = (e) => {
    setPasswordValue(e.target.value);
  };

  const loginData = {
    login: adminValue,
    password: passwordValue,
  };

  //   const clickLogBtn = () => {
  //     navigate("/main");
  //     return console.log(loginData);
  //   };

  const handleLogin = async (e) => {
    e.preventDefault();

    let userCredentials = {
      email: adminValue,
      password: passwordValue,
    };

    try {
      await dispatch(loginUser(userCredentials));
      navigate("/main");
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const resultAction = await dispatch(loginUser(userCredentials));
    //   const result = resultAction.payload;

    //   if (result) {
    //     setAdminValue("");
    //     setPasswordValue("");
    //     navigate("/main");
    //   }
    // } catch (error) {
    //   console.log("Login failed", error);
    // }
  };

  // dispatch(loginUser(userCredentials)).then((result) => {
  //   if (result.payload) {
  //     setAdminValue("");
  //     setPasswordValue("");
  //     navigate("/main");
  //   }
  // });
  //   };

  return (
    <>
      <div className={styles.loginBlock}>
        <div className={styles.login__content}>
          <div className={styles.login_item}>
            <div className={styles.content_title}>
              <span className={styles.black}>neo</span>
              <span className={styles.primary}>cafe</span>
            </div>
            <div className={styles.login}>
              <h1>Вход</h1>
              <form className={styles.login_form} onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="Логин"
                  value={adminValue}
                  onChange={handleChangeAdminValue}
                  className={styles.input_login}
                />
                <div className={styles.login_passwordInput}>
                  <input
                    type={inputType}
                    placeholder="Пароль"
                    value={passwordValue}
                    onChange={handleChangePasswordValue}
                  />
                  <img
                    src={showPassword ? eyeIcon : eyeIconNoVisible}
                    alt="eyeIcon"
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <Button
                  type="submit"
                  //   onClick={clickLogBtn}
                  disabled={adminValue === "" || passwordValue === ""}
                  isModalButton={false}
                >
                  Войти
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.login__image}>
          <img src={login_picture} alt="login_picture" />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
