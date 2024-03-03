import React, {useState} from 'react';
import styles from "../../pages/MenuPage/menuPage.module.scss";
import downIcon2 from "../../assets/images/table/dropDownVVerh.svg";
import downIcon from "../../assets/images/table/downIcon.svg";
import trashIcon from "../../assets/images/table/mdi_delete-outline.svg";
import plusIcon from "../../assets/images/table/mdi_plus.svg";
import dots_icon from "../../assets/images/table/mdi_dots-vertical.svg";
import editIcon from "../../assets/images/table/mdi_edit.svg";
import deleteIcon from "../../assets/images/table/mdi_delete.svg";
import {Pagination} from "antd";
import {warehouseData} from "../../assets/utils/data.js";
import NewCategoryModal from "../modals/NewCategoryModal/NewCategoryModal.jsx";
import DeleteCategoryModal from "../modals/DeleteCategoryModal/DeleteCategoryModal.jsx";
import {deleteCategory} from "../../redux/slices/CategoryMenuSlice.js";


const itemsPerPage = 6;


function FinishedProducts(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);


    const handleOptionOpen = (id) => {
        setIsOptionOpen(!isOptionOpen);
        setSelectedItemId(id);
    };
    const onPageChange = (page) => {
        setCurrentPage(page);
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = warehouseData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <table className={styles.table}>
                <thead>
                <tr className={styles.trBlock}>
                    <th className={styles.table__numSymbol}>№</th>
                    <th>Наименование</th>
                    <th>Количество</th>
                    <th>Лимит</th>
                    <th>Дата прихода</th>
                    <th>Филиал</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((warehouseData, index) => (
                    <tr key={warehouseData.id}>
                        <td className={styles.table__numSymbol}>
                            №{indexOfFirstItem + index + 1}
                        </td>
                        <td>{warehouseData.name}</td>
                        <td>{warehouseData.quantity}</td>
                        <td>{warehouseData.limit}</td>
                        <td>{warehouseData.arrival_date}</td>
                        <td>{warehouseData.branch}</td>
                        <td>
                            <button
                                className={styles.table__btn}
                                onClick={() => handleOptionOpen(warehouseData.id)}
                            >
                                <img src={dots_icon} alt="dots_icon" />
                            </button>
                            {isOptionOpen && selectedItemId === warehouseData.id && (
                                <div className={styles.optionBlock}>
                                    <button className={styles.optionBlock__btnEdit}>
                                        <img src={editIcon} alt="editIcon" />
                                        Редактировать
                                    </button>
                                    <button className={styles.optionBlock__btnDelete}>
                                        <img src={deleteIcon} alt="deleteIcon" />
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
                <Pagination
                    current={currentPage}
                    onChange={onPageChange}
                    total={warehouseData.length}
                    pageSize={itemsPerPage}
                />
            </div>
        </>
    );
}

export default FinishedProducts;