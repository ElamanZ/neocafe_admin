import React, {useState} from 'react';
import {Layout} from "antd";
import menuIcon from "../../assets/images/appSlider/mdi_menu.svg"
import warehouseIcon from "../../assets/images/appSlider/mdi_warehouse.svg"
import branchesIcon from "../../assets/images/appSlider/mdi_branches.svg"
import employeesIcon from "../../assets/images/appSlider/mdi_employees.svg"
import exitIcon from "../../assets/images/appSlider/mdi_exit.svg"
import styles from "../AppSider/AppSider.module.scss";

const siderStyle = {
    color: '#fff',
    backgroundColor: '#35536B',
};

const menuItems = [
    { id: 'menu', label: 'Меню', img: menuIcon},
    { id: 'warehouse', label: 'Склад', img: warehouseIcon},
    { id: 'branches', label: 'Филиалы', img: branchesIcon},
    { id: 'employees', label: 'Сотрудники', img: employeesIcon},


];

function AppSider(props) {
    const [activeItem, setActiveItem] = useState(menuItems[0].id);

    const handleClick = (itemId) => {
        setActiveItem(itemId);
    };

    return (
        <Layout.Sider width="18%" style={siderStyle}>
            <div className={styles.sider__title}>
                <span className={styles.white}>neo</span>
                <span className={styles.primary}>cafe</span>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 'calc(100vh - 128px)' }}>
                <ul className={styles.menuList}>
                    {menuItems.map(item => (
                        <li
                            key={item.id}
                            className={`${styles.menuItem} ${activeItem === item.id ? styles.menuItem__active : ''}`}
                            onClick={() => handleClick(item.id)}
                        >
                            <img src={item.img} alt={item.label} className={styles.menuItem__icon} />
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className={styles.sider__buttonExit}>

                    <button>
                        <img src={exitIcon} alt="exitIcon"/>
                        Выйти
                    </button>
                </div>
            </div>

        </Layout.Sider>
    );
}

export default AppSider;