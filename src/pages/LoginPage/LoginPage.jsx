import React, { useState } from "react";
import styles from "./loginPage.module.scss";
import eyeIcon from "../../assets/images/login/Eye.svg";
import eyeIconNoVisible from "../../assets/images/login/Eye_NoVisible.svg";
import login_picture from "../../assets/images/login/LoginPicture.png";
import { useNavigate } from "react-router";
import Button from "../../components/buttons/Button.jsx";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/authCookie.js";
import classNames from "classnames";

function LoginPage(props) {
  const [adminValue, setAdminValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAdminError, setIsAdminError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const inputType = showPassword ? "text" : "password";

  const handleChangeAdminValue = (e) => {
    setAdminValue(e.target.value);
    setIsAdminError(false);
  };

  const handleChangePasswordValue = (e) => {
    setPasswordValue(e.target.value);
    setIsPasswordError(false);
  };

  // const loginData = {
  //   login: adminValue,
  //   password: passwordValue,
  // };

  //   const clickLogBtn = () => {
  //     navigate("/main");
  //     return console.log(loginData);
  //   };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (adminValue === "") {
      setIsAdminError(true);
      return;
    }

    if (passwordValue === "") {
      setIsPasswordError(true);
      return;
    }

    let userCredentials = {
      email: adminValue,
      password: passwordValue,
    };

    try {
      const resp = await dispatch(loginUser(userCredentials));
      console.log(resp);
      navigate("/main");
    } catch (error) {
      setIsAdminError(true);
      setIsPasswordError(true);
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
                  type="email"
                  placeholder="Логин"
                  value={adminValue}
                  onChange={handleChangeAdminValue}
                  className={classNames(styles.input_login, {
                    [styles.input_error]: isAdminError,
                  })}
                />
                <div
                  className={classNames(styles.login_passwordInput, {
                    [styles.input_error]: isPasswordError,
                  })}
                >
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
                  onClick={handleLogin}
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
