import React, { useState } from "react";
import styles from "../../pages/MenuPage/menuPage.module.scss";
import downIcon2 from "../../assets/images/table/dropDownVVerh.svg";
import downIcon from "../../assets/images/table/downIcon.svg";
import trashIcon from "../../assets/images/table/mdi_delete-outline.svg";
import plusIcon from "../../assets/images/table/mdi_plus.svg";
import dots_icon from "../../assets/images/table/mdi_dots-vertical.svg";
import editIcon from "../../assets/images/table/mdi_edit.svg";
import deleteIcon from "../../assets/images/table/mdi_delete.svg";
import { Pagination } from "antd";
import { warehouseRawData } from "../../assets/utils/data.js";
import NewCategoryModal from "../modals/NewCategoryModal/NewCategoryModal.jsx";
import DeleteCategoryModal from "../modals/DeleteCategoryModal/DeleteCategoryModal.jsx";
import { deleteCategory } from "../../redux/slices/categoryMenuSlice.js";

const itemsPerPage = 10;

function RawMaterials(props) {
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
  const currentItems = warehouseRawData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div>
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
          {currentItems.map((warehouseRawData, index) => (
            <tr key={warehouseRawData.id}>
              <td className={styles.table__numSymbol}>
                №{indexOfFirstItem + index + 1}
              </td>
              <td>{warehouseRawData.name}</td>
              <td>{warehouseRawData.quantity}</td>
              <td>{warehouseRawData.limit}</td>
              <td>{warehouseRawData.arrival_date}</td>
              <td>{warehouseRawData.branch}</td>
              <td>
                <button
                  className={styles.table__btn}
                  onClick={() => handleOptionOpen(warehouseRawData.id)}
                >
                  <img src={dots_icon} alt="dots_icon" />
                </button>
                {isOptionOpen && selectedItemId === warehouseRawData.id && (
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
          total={warehouseRawData.length}
          pageSize={itemsPerPage}
        />
      </div>
    </div>
  );
}

export default RawMaterials;
