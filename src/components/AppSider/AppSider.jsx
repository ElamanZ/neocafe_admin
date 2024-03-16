import React, { useState } from "react";
import { Layout } from "antd";
import menuIcon from "../../assets/images/appSlider/mdi_menu.svg";
import warehouseIcon from "../../assets/images/appSlider/mdi_warehouse.svg";
import branchesIcon from "../../assets/images/appSlider/mdi_branches.svg";
import employeesIcon from "../../assets/images/appSlider/mdi_employees.svg";
import exitIcon from "../../assets/images/appSlider/mdi_exit.svg";
import styles from "../AppSider/AppSider.module.scss";
import { menuItems } from "../../assets/utils/data.js";
import { logoutSuccess } from "../../redux/slices/userSlice.js";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { showModal } from "../../redux/slices/modalSlice.js";
import DeleteBranchModal from "../modals/DeleteBranchModal/DeleteBranchModal.jsx";

const siderStyle = {
  color: "#fff",
  backgroundColor: "#35536B",
};

function AppSider(props) {
  const [activeItem, setActiveItem] = useState(menuItems[0].id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (itemId) => {
    setActiveItem(itemId);
  };

  const handleLogoutModal = () => {
    dispatch(showModal({ modalType: "deleteBranchModal" }));
  };

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/login");
  };

  // export const menuItems = [
  //   { id: "menu", label: "Меню", img: menuIcon },
  //   { id: "warehouse", label: "Склад", img: warehouseIcon },
  //   { id: "branches", label: "Филиалы", img: branchesIcon },
  //   { id: "employees", label: "Сотрудники", img: employeesIcon },
  // ];

  return (
    <>
      <Layout.Sider width="14%" style={siderStyle}>
        <div className={styles.sider__title}>
          <span className={styles.white}>neo</span>
          <span className={styles.primary}>cafe</span>
        </div>
        <div className={styles.menuBlock}>
          <div>
            <ul className={styles.menuList}>
              {menuItems.map((item) => (
                <NavLink
                  to={`/${item.id}`}
                  key={item.id}
                  // className={`${styles.menuItem} ${
                  //   activeItem === item.id ? styles.menuItem__active : ""
                  // }`}

                  className={({ isActive }) =>
                    [
                      styles.menuItem,
                      isActive ? styles.menuItem__active : styles.menuItem,
                    ].join(" ")
                  }
                  onClick={() => handleClick(item.id)}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className={styles.menuItem__icon}
                  />
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className={styles.sider__buttonExit}>
            {/* <button onClick={handleLogoutModal}> */}
            <button onClick={handleLogout}>
              <img src={exitIcon} alt="exitIcon" />
              Выйти
            </button>
          </div>
        </div>
      </Layout.Sider>
      {/* <DeleteBranchModal navigate={navigate} /> */}
    </>
  );
}

export default AppSider;
