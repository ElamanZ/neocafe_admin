import React, { useState } from "react";
import styles from "./loginPage.module.scss";
import eyeIcon from "../../assets/images/login/Eye.svg";
import eyeIconNoVisible from "../../assets/images/login/Eye_NoVisible.svg";
import login_picture from "../../assets/images/login/LoginPicture.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/userSlice.js";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export function LoginPage(props) {
  // const [adminValue, setAdminValue] = useState("");
  // const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [isAdminError, setIsAdminError] = useState(false);
  // const [isPasswordError, setIsPasswordError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const inputType = showPassword ? "text" : "password";

  // const handleChangeAdminValue = (e) => {
  //   setAdminValue(e.target.value);
  //   setIsAdminError(false);
  // };
  // const handleChangePasswordValue = (e) => {
  //   setPasswordValue(e.target.value);
  //   setIsPasswordError(false);
  // };
  // const loginData = {
  //   login: adminValue,
  //   password: passwordValue,
  // };
  //   const clickLogBtn = () => {
  //     navigate("/main");
  //     return console.log(loginData);
  //   };
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   if (adminValue === "" || passwordValue === "") {
  //     setIsAdminError(adminValue === "");
  //     setIsPasswordError(passwordValue === "");
  //     return;
  //   }
  //   let userCredentials = {
  //     email: adminValue,
  //     password: passwordValue,
  //   };
  //   try {
  //     const resp = await dispatch(loginUser(userCredentials));
  //     if (resp.payload.isAuthenticated) {
  //       navigate("/main");
  //     } else {
  //       setIsAdminError(true);
  //       setIsPasswordError(true);
  //     }
  //     console.log(resp);
  //   } catch (error) {
  //     setIsAdminError(true);
  //     setIsPasswordError(true);
  //     console.log(error);
  //   }
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleLogin = async (values) => {
    try {
      const resp = await dispatch(loginUser(values));
      if (resp.payload.isAuthenticated) {
        navigate("/main");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                {({ isSubmitting, touched, errors }) => (
                  <Form className={styles.login_form} onSubmit={handleLogin}>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Логин"
                      // value={adminValue}
                      // onChange={handleChangeAdminValue}
                      // className={classNames(styles.input_login, {
                      //   [styles.input_error]: isAdminError,
                      // })}
                      className={classNames(styles.input_login, {
                        [styles.input_error]: touched.email && errors.email,
                      })}
                    />
                    {/* <div
                  className={classNames(styles.login_passwordInput, {
                    [styles.input_error]: isPasswordError,
                  })}
                > */}
                    <div className={classNames(styles.login_passwordInput)}>
                      <Field
                        type={inputType}
                        name="password"
                        placeholder="Пароль"
                        // value={passwordValue}
                        // onChange={handleChangePasswordValue}
                        className={classNames({
                          [styles.input_error]:
                            touched.password && errors.password,
                        })}
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
                      disabled={isSubmitting}
                      // disabled={adminValue === "" || passwordValue === ""}
                      isModalButton={false}
                    >
                      Войти
                    </Button>
                  </Form>
                )}
              </Formik>
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
