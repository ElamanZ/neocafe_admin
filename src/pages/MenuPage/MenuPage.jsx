import React, { useState } from 'react';
import styles from '../MenuPage/menuPage.module.scss';
import dots_icon from '../../assets/images/table/mdi_dots-vertical.svg';
import { MenuHeadDatas } from '../../assets/utils/data.js';
import { tableBodyDatas } from '../../assets/utils/data.js';
import plusIcon from '../../assets/images/table/mdi_plus.svg';
import downIcon from '../../assets/images/table/downIcon.svg';
import trashIcon from '../../assets/images/table/mdi_delete-outline.svg';

function MenuPage() {
    const [categories, setCategories] = useState(['Категория 1', 'Категория 2', 'Категория 3']);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDelete = (index) => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
    };

    const handleAdd = () => {
        // Добавляем новую категорию только если она не пустая
        if (newCategory.trim() !== '') {
            setCategories([...categories, newCategory]);
        }
    };

    return (
        <div className={styles.tableBlock}>
            <table className={styles.table}>
                <thead>
                <tr>
                    {/*<th className={styles.table__numSymbol}>№</th>*/}
                    {/*{MenuHeadDatas.map((tableHeadData, index) => (*/}
                    {/*    <th key={index}>{tableHeadData.title}</th>*/}
                    {/*))}*/}
                    {/*<th>*/}
                    {/*    /!* Вставляем кнопку для отображения списка категорий *!/*/}
                    {/*    <button className={styles.dropdownToggle} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>*/}
                    {/*        Категории <img className={styles.addIcon} src={plusIcon} alt="plusIcon" />*/}
                    {/*    </button>*/}
                    {/*    /!* Показываем выпадающий список категорий только если isDropdownOpen true *!/*/}
                    {/*    {isDropdownOpen && (*/}
                    {/*        <div className={styles.dropdownMenu}>*/}
                    {/*            {categories.map((category, index) => (*/}
                    {/*                <div className={styles.dropdownItem} key={index} onClick={() => handleDelete(index)}>*/}
                    {/*                    {category}*/}
                    {/*                    <img className={styles.deleteIcon} src={trashIcon} alt="trashIcon" />*/}
                    {/*                </div>*/}
                    {/*            ))}*/}
                    {/*            /!* Добавляем кнопку для добавления новой категории *!/*/}
                    {/*            <button className={styles.addCategoryButton} onClick={handleAdd}>*/}
                    {/*                Добавить категорию*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</th>*/}
                    {/*<th></th>*/}
                    <th className={styles.table__numSymbol}>№</th>
                    <th>Наименование</th>
                    <th className={styles.categoryDropdown}>
                        Категории
                        <button className={styles.dropdownToggle} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img className={styles.downIcon} src={downIcon} alt="downIcon" />
                        </button>
                        {/* Показываем выпадающий список категорий только если isDropdownOpen true */}
                        {isDropdownOpen && (
                            <div className={styles.dropdownMenu}>
                                {categories.map((category, index) => (
                                    <div className={styles.dropdownItem} key={index} onClick={() => handleDelete(index)}>
                                        {category}
                                        <img className={styles.deleteIcon} src={trashIcon} alt="trashIcon" />
                                    </div>
                                ))}
                                {/* Добавляем кнопку для добавления новой категории */}
                                <button className={styles.addCategoryButton} onClick={handleAdd}>
                                    Добавить категорию
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
