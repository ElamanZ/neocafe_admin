import React, { useState } from 'react';
import styles from '../MenuPage/menuPage.module.scss';
import dots_icon from '../../assets/images/table/mdi_dots-vertical.svg';
import { MenuHeadDatas } from '../../assets/utils/data.js';
import { tableBodyDatas } from '../../assets/utils/data.js';
import { categoryData } from '../../assets/utils/data.js';
import plusIcon from '../../assets/images/table/mdi_plus.svg';
import downIcon from '../../assets/images/table/downIcon.svg';
import downIcon2 from '../../assets/images/table/dropDownVVerh.svg';
import trashIcon from '../../assets/images/table/mdi_delete-outline.svg';
import editIcon from '../../assets/images/table/mdi_edit.svg';
import deleteIcon from '../../assets/images/table/mdi_delete.svg';
import Button from "../../components/buttons/Button.jsx";

function MenuPage() {

    const [categories, setCategories] = useState(categoryData);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);



    const handleDelete = (index) => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
    };



    const handleOptionOpen = (id) => {
        setIsOptionOpen(!isOptionOpen)
        setSelectedItemId(id);
    };

    return (
        <div className={styles.tableBlock}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.table__numSymbol}>№</th>
                    <th>Наименование</th>
                    <th onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`${styles.categoryDropdown} ${isDropdownOpen ? styles.categoryDropdown_active : ""}`}>
                        Категории
                        <button className={styles.categoryDropdown__toggle} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img src={isDropdownOpen ? downIcon2 : downIcon} alt="downIcon" />
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
                    <tr key={tableBodyData.id}>
                        <td className={styles.table__numSymbol}>№{index + 1}</td>
                        <td>{tableBodyData.name}</td>
                        <td>{tableBodyData.category}</td>
                        <td>{tableBodyData.ingredients}</td>
                        <td>{tableBodyData.price}</td>
                        <td>{tableBodyData.branch}</td>
                        <td>
                            <button
                                className={styles.table__btn}
                                onClick={() => handleOptionOpen(tableBodyData.id)}
                            >
                                <img src={dots_icon} alt="dots_icon" />
                            </button>
                            {isOptionOpen && selectedItemId === tableBodyData.id && (
                                <div className={styles.optionBlock}>
                                    <button className={styles.optionBlock__btnEdit}>
                                        <img src={editIcon} alt="editIcon"/>
                                        Редактировать
                                    </button>
                                    <button className={styles.optionBlock__btnDelete}>
                                        <img src={deleteIcon} alt="deleteIcon"/>
                                        Удалить
                                    </button>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={styles.tableBlock__paginationBlock}>
                <div className={styles.tableBlock__pagination}>table__pagination</div>
            </div>
            <div style={{width:'260px', height: '56px'}}></div>
        </div>
    );
}

export default MenuPage;
