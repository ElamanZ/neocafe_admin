import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import styles from "../AppHeader/appHeaader.module.scss";
import searchBtn from "../../assets/images/appHeader/mdi_searchBtn.svg";
import createBtnPlus from "../../assets/images/appHeader/createBtnPlus.svg";
import notice from "../../assets/images/appHeader/mdi_notice.svg";

const headerStyle = {
    color: '#2A3440',
    height: 100,
    padding: 24,
    lineHeight: '64px',
    backgroundColor: '#FFFFFF',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative"
};

// function Notification({ onClose }) {
//     const [messages, setMessages] = useState([
//         { id: 1, dateTime: "10 февраля 2024, 15:30", text: "Сообщение 1" },
//         { id: 2, dateTime: "10 февраля 2024, 15:32", text: "Сообщение 2" }
//     ]);
//
//     const clearMessages = () => {
//         setMessages([]);
//     };
//
//     const removeMessage = (id) => {
//         setMessages(messages.filter(msg => msg.id !== id));
//     };
//
//     return (
//         <div className={styles.notification}>
//             <div>Уведомления</div>
//             <Button type="primary" size="small" onClick={clearMessages}>Очистить</Button>
//             <div className={styles["close-button"]} onClick={onClose}>X</div>
//             <div style={{ marginTop: '16px' }}>
//                 {messages.map(msg => (
//                     <div key={msg.id} className={styles.message}>
//                         <div>Дата и время: {msg.dateTime}</div>
//                         <div>{msg.text} <span className={styles["close-button"]} onClick={() => removeMessage(msg.id)}>X</span></div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

function AppHeader(props) {
    // const [showNotification, setShowNotification] = useState(false);
    //
    // const toggleNotification = () => {
    //     setShowNotification(!showNotification);
    // };
    const [isOpenNotification, setIsOpenNotification] = useState(false)
    return (
        <Layout.Header style={headerStyle}>
            <h1 className={styles.header__title}>
                Меню
            </h1>
            <div className={styles.header__block}>
                <div className={styles.header__input}>
                    <button className={styles.header__input_searchBtn}>
                        <img src={searchBtn} alt="searchBtn"/>
                    </button>
                    <input type="text" placeholder="Поиск"/>
                </div>
                <button className={styles.header__createBtn}>
                    Создать
                    <img src={createBtnPlus} alt="createBtnPlus"/>
                </button>
                <button className={styles.header__noticeBtn} onClick={() => setIsOpenNotification(!isOpenNotification)}>
                    <img src={notice} alt="notice"/>
                </button>
                {/*<button className={`${styles.header__noticeBtn} ${showNotification ? styles.noticeBtn_active : ''}`} onClick={toggleNotification}>*/}
                {/*    <img src={notice} alt="notice"/>*/}
                {/*</button>*/}
            </div>
            {/*{showNotification && <Notification onClose={toggleNotification} />}*/}

            <div className={`styles.notificationBlock ${isOpenNotification ? "active" : ''}`}>
                <div className={styles.notificationBlock__header}>
                    <h3>Уведомления</h3>
                    <button>x</button>
                </div>
                <button>Очистить</button>
                <ul className={styles.notificationMessages}>
                    <li className={styles.notificationMessage}>
                        <div className={styles.notificationMessage__info}>
                            <div className={styles.notificationMessage__data}>
                                <span>25.10</span>
                                <div>*</div>
                                <span>14.09</span>
                            </div>
                            <button>x</button>
                        </div>
                        <div>
                            <div className={styles.notificationMessage__text}>Заканчивается продукт: <span className={styles.notificationMessage__product}>Молоко</span></div>
                            <div className={styles.notificationMessage__text}>Филиал: <span className={styles.notificationMessage__product}>NeoCafe Dzerzhinka</span></div>
                        </div>
                    </li>
                </ul>
            </div>
        </Layout.Header>
    );
}

export default AppHeader;
