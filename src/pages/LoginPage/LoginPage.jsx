import React, {useState} from 'react';
import styles from './login.module.scss'
import {useForm} from "react-hook-form";

import eyeIcon from "../../assets/images/login/Eye.svg";
import eyeIconNoVisible from "../../assets/images/login/Eye_NoVisible.svg";
import login_picture from "../../assets/images/login/LoginPicture.png"
function Login(props) {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const inputType = showPassword ? 'text' : 'password';


    return (
        <>
            <div className={styles.loginBlock}>
                <div className={styles.login__content}>
                    <div style={{width: '100%'}}>
                        <div className={styles.content_title}>
                            <span className={styles.black}>neo</span>
                            <span className={styles.primary}>cafe</span>
                        </div>
                        <div className={styles.login}>
                            <h1>Вход</h1>
                            <input type="text" placeholder="Логин" className={styles.input_login}/>
                            <div className={styles.login_passwordInput}>
                                <input
                                    type={inputType}
                                    placeholder="Пароль"
                                />
                                <img
                                    src={showPassword ? eyeIcon : eyeIconNoVisible}
                                    alt="eyeIcon"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                            <button className={styles.btn_login} disabled={true}>Войти</button>
                        </div>
                    </div>
                </div>
                <div className={styles.login__image}>
                    <img src={login_picture} alt="login_picture"/>
                </div>
            </div>
        </>
    );
}

export default Login;