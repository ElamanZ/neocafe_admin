import React, {useState} from 'react';
import FinishedProducts from "./FinishedProducts.jsx";
import styles from "../../pages/MenuPage/menuPage.module.scss";
import styleWarehouse from "../WarehouseContent/Warehouse.module.scss"
import RawMaterials from "./RawMaterials.jsx";
import EndingProducts from "./EndingProducts.jsx";

function WarehouseContent(props) {
    const [activeTab, setActiveTab] = useState('finishedProducts');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div style={{padding: "24px 24px 56px"}}>
            <div className={styles.tableBlock}>
                <header className={styleWarehouse.tableHeader}>
                    <nav className={styleWarehouse.tableNav}>
                        <ul className={styleWarehouse.ul}>
                            <li className={`${styleWarehouse.li} ${activeTab === 'finishedProducts' ? styleWarehouse.active : ''}`} onClick={() => handleTabChange('finishedProducts')}>
                                Готовая продукция
                            </li>
                            <li className={`${styleWarehouse.li} ${activeTab === 'rawMaterials' ? styleWarehouse.active : ''}`} onClick={() => handleTabChange('rawMaterials')}>
                                Сырье
                            </li>
                            <li className={`${styleWarehouse.liRed} ${activeTab === 'endingProducts' ? styleWarehouse.activeRed : ''}`} onClick={() => handleTabChange('endingProducts')}>
                                Заканчивающиеся продукты
                            </li>
                        </ul>
                    </nav>
                </header>
                {activeTab === 'finishedProducts' && <FinishedProducts />}
                {activeTab === 'rawMaterials' && <RawMaterials />}
                {activeTab === 'endingProducts' && <EndingProducts />}
            </div>
        </div>
    );
}

export default WarehouseContent;