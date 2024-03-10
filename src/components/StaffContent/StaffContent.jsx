import React, { useState } from "react";
import { Pagination } from "antd";
import dots_icon from "../../assets/images/table/mdi_dots-vertical.svg";
import editIcon from "../../assets/images/table/mdi_edit.svg";
import deleteIcon from "../../assets/images/table/mdi_delete.svg";
import { staffData } from "../../assets/utils/data";
import styles from "./StaffContent.module.scss";

const itemsPerPage = 10;

const StaffContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = staffData.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOptionOpen = (id) => {
    setIsOptionOpen(!isOptionOpen);
    setSelectedItemId(id);
  };

  return (
    <div className={styles.tableBlock}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.table__numSymbol}>№</th>
            <th className={styles.tableHeader__title}>Имя</th>
            <th className={styles.tableHeader__title}>Должность</th>
            <th className={styles.tableHeader__title}>Выберите филиал</th>
            <th className={styles.tableHeader__title}>Телефон</th>
            <th className={styles.tableHeader__title}>График работы</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((staffData, index) => (
            <tr key={staffData.id} className={styles.branch__item}>
              <td className={styles.table__numSymbol}>
                №{indexOfFirstItem + index + 1}
              </td>
              <td>{staffData.name}</td>
              <td>{staffData.role}</td>
              <td>{staffData.branchId}</td>
              <td>{staffData.phone}</td>
              <td>{staffData.workSchedule}</td>
              <td>
                <button
                  className={styles.table__btn}
                  onClick={() => handleOptionOpen(staffData.id)}
                >
                  <img src={dots_icon} alt="dots_icon" />
                </button>
                {isOptionOpen && selectedItemId === staffData.id && (
                  <div className={styles.optionBlock}>
                    <button
                      className={styles.optionBlock__btnEdit}
                      //   onClick={handleCreateBtnClick}
                    >
                      <img
                        src={editIcon}
                        alt="editIcon"
                        className={styles.dots_img}
                      />
                      Редактировать
                    </button>
                    <button
                      className={styles.optionBlock__btnDelete}
                      //   onClick={() => handleBranchDelete(branchData.id)}
                    >
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
          total={staffData.length}
          pageSize={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default StaffContent;
