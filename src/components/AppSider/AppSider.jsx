import React, {useState} from 'react';
import {Layout} from "antd";
import menuIcon from "../../assets/images/appSlider/mdi_menu.svg"
import warehouseIcon from "../../assets/images/appSlider/mdi_warehouse.svg"
import branchesIcon from "../../assets/images/appSlider/mdi_branches.svg"
import employeesIcon from "../../assets/images/appSlider/mdi_employees.svg"
import exitIcon from "../../assets/images/appSlider/mdi_exit.svg"
import styles from "../AppSider/AppSider.module.scss";
import {menuItems} from "../../assets/utils/data.js"

const siderStyle = {
    color: '#fff',
    backgroundColor: '#35536B',
};



function AppSider(props) {
    const [activeItem, setActiveItem] = useState(menuItems[0].id);

    const handleClick = (itemId) => {
        setActiveItem(itemId);
    };

    return (
        <Layout.Sider width="14%" style={siderStyle}>
            <div className={styles.sider__title}>
                <span className={styles.white}>neo</span>
                <span className={styles.primary}>cafe</span>
            </div>
            <div className={styles.menuBlock}>
                {/*переделать на NAV*/}
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