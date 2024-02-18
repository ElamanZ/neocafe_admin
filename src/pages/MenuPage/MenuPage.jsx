import React, { useState } from 'react';
import styles from '../MenuPage/menuPage.module.scss';
import dots_icon from '../../assets/images/table/mdi_dots-vertical.svg';
import { MenuHeadDatas } from '../../assets/utils/data.js';
import { tableBodyDatas } from '../../assets/utils/data.js';
import { categoryData } from '../../assets/utils/data.js';
import plusIcon from '../../assets/images/table/mdi_plus.svg';
import downIcon from '../../assets/images/table/downIcon.svg';
import trashIcon from '../../assets/images/table/mdi_delete-outline.svg';

function MenuPage() {

    const [categories, setCategories] = useState(categoryData);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);



    const handleDelete = (index) => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
    };

    return (
        <div className={styles.tableBlock}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.table__numSymbol}>№</th>
                    <th>Наименование</th>
                    <th className={styles.categoryDropdown}>
                        Категории
                        <button className={styles.categoryDropdown__toggle} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img src={downIcon} alt="downIcon" />
                        </button>
                        {isDropdownOpen && (
                            <div className={styles.categoryDropdown__menu}>
                                {categories.map((category, index) => (
                                    <div className={styles.categoryDropdown__item} key={index} >
                                        {category}
                                        <img className={styles.categoryDropdown__deleteIcon} src={trashIcon} alt="trashIcon" onClick={() => handleDelete(index)}/>
                                    </div>
                                ))}
                                <button className={styles.categoryDropdown__addCategoryButton}>
                                    Добавить
                                    <img src={plusIcon} alt="plusIcon"/>
                                </button>
                            </div>
                        )}
                    </th>
                    <th>Наименование</th>
                    <th>Состав блюда и граммовка</th>
                    <th>Филиал</th>
                    <th></th>
                </tr>

                </thead>
                <tbody>
                {tableBodyDatas.map((tableBodyData, index) => (
                    <tr key={index}>
                        <td className={styles.table__numSymbol}>№{index + 1}</td>
                        <td>{tableBodyData.name}</td>
                        <td>{tableBodyData.category}</td>
                        <td>{tableBodyData.ingredients}</td>
                        <td>{tableBodyData.price}</td>
                        <td>{tableBodyData.branch}</td>
                        <td>
                            <button className={styles.table__btn}>
                                <img src={dots_icon} alt="dots_icon" />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={styles.tableBlock__paginationBlock}>
                <div className={styles.tableBlock__pagination}>table__pagination</div>
            </div>
        </div>
    );
}

export default MenuPage;
