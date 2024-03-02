import React, { useState } from "react";
import { Layout } from "antd";
import styles from "../AppHeader/appHeaader.module.scss";
import searchBtn from "../../assets/images/appHeader/mdi_searchBtn.svg";
import createBtnPlus from "../../assets/images/appHeader/createBtnPlus.svg";
import notice from "../../assets/images/appHeader/mdi_notice.svg";
import closeIcon from "../../assets/images/appHeader/mdi_close.svg";
import closeIconBlack from "../../assets/images/appHeader/mdi_closeBlack.svg";

const noticeDataList = [
  {
    id: 1,
    data: 25.09,
    time: 14.1,
    fewProducts: "Молоко",
    branch: "NeoCafe Dzerzhinka",
  },
  {
    id: 2,
    data: 27.09,
    time: 11.53,
    fewProducts: "Сахар",
    branch: "NeoCafe Gogolya",
  },
  {
    id: 3,
    data: 28.09,
    time: 10.3,
    fewProducts: "Хлеб",
    branch: "NeoCafe Pushkina",
  },
  {
    id: 4,
    data: 29.09,
    time: 12.45,
    fewProducts: "Картофель",
    branch: "NeoCafe Tolstogo",
  },
  {
    id: 5,
    data: 30.09,
    time: 15.2,
    fewProducts: "Яйца",
    branch: "NeoCafe Chekhova",
  },
  {
    id: 6,
    data: 11.1,
    time: 19.0,
    fewProducts: "Масло",
    branch: "NeoCafe Lermontova",
  },
];

function AppHeader({ props, title, onCreateBtnClick }) {
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isOpenNotificationList, setIsOpenNotificationList] = useState(false);
  const [notificationList, setNotificationList] = useState(noticeDataList);

  const openNotification = () => {
    setIsOpenNotification(!isOpenNotification);
  };

  const closeNotificationList = (id) => {
    const updatedNotificationList = notificationList.filter(
      (item) => item.id !== id
    );
    setNotificationList(updatedNotificationList);
  };

  const closeAllNotificationList = () => {
    setNotificationList([]);
  };

  const handleClick = (id) => {
    console.log(`Элемент с id ${id} был кликнут!`);
  };

  const handleCreateBtnClick = () => {
    onCreateBtnClick();
  };

  return (
    <Layout.Header className={styles.header}>
      <h1 className={styles.header__title}>
        {/* Меню */}
        {title}
      </h1>
      <div className={styles.header__block}>
        <div className={styles.header__searchBlock}>
          <button className={styles.header__searchBtn}>
            <img src={searchBtn} alt="searchBtn" />
          </button>
          <input type="text" placeholder="Поиск" />
        </div>
        <button
          className={styles.header__createBtn}
          onClick={handleCreateBtnClick}
        >
          Создать
          <img src={createBtnPlus} alt="createBtnPlus" />
        </button>
        <button
          className={`${styles.header__noticeBtn} ${
            isOpenNotification ? styles.noticeBtn_active : ""
          }`}
          onClick={openNotification}
        >
          <img src={notice} alt="notice" />
        </button>
      </div>

      <div
        className={`${styles.notificationBlock} ${
          isOpenNotification ? styles.notificationBlock_active : ""
        }`}
      >
        <div className={styles.notificationBlock__titleBlock}>
          <div></div>
          <h3>Уведомления</h3>
          <button onClick={openNotification}>
            <img src={closeIcon} alt="closeIcon" />
          </button>
        </div>

        <div className={styles.notificationBlock__clearBtnBlock}>
          <button
            onClick={closeAllNotificationList}
            className={styles.notificationBlock__clearBtn}
          >
            Очистить
          </button>
        </div>
        <ul className={styles.notificationBlock__innerBlock}>
          {notificationList.length === 0 ? (
            <h3 className={styles.notificationBlock__noNotifications}>
              Уведомлений нет
            </h3>
          ) : (
            notificationList.map((noticeData) => (
              <li
                id={noticeData.id}
                onClick={() => handleClick(noticeData.id)}
                key={noticeData.id}
                className={`${styles.notificationBlock__list} ${
                  isOpenNotificationList
                    ? styles.notificationBlock__list_active
                    : ""
                }`}
              >
                <div className={styles.notificationBlock__info}>
                  <div className={styles.notificationBlock__data}>
                    <span>{noticeData.data}</span>
                    <span className={styles.notificationBlock__data_marker}>
                      &bull;
                    </span>
                    <span>{noticeData.time}</span>
                  </div>
                  <button onClick={() => closeNotificationList(noticeData.id)}>
                    <img src={closeIconBlack} alt="closeIconBlack" />
                  </button>
                </div>
                <div className={styles.notificationBlock__listText}>
                  Заканчивается продукт:{" "}
                  <span className={styles.notificationBlock__listText_blue}>
                    {noticeData.fewProducts}
                  </span>
                </div>
                <div className={styles.notificationBlock__listText}>
                  Филиал:{" "}
                  <span className={styles.notificationBlock__listText_blue}>
                    {noticeData.branch}
                  </span>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </Layout.Header>
  );
}

export default AppHeader;
