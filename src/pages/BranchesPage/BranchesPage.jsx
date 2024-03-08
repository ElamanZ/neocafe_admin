import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../../redux/slices/modalSlice";
import { branchData } from "../../assets/utils/data";
import { Pagination } from "antd";
import dots_icon from "../../assets/images/table/mdi_dots-vertical.svg";
import editIcon from "../../assets/images/table/mdi_edit.svg";
import deleteIcon from "../../assets/images/table/mdi_delete.svg";
import styles from "./BranchesPage.module.scss";

const itemsPerPage = 10;

const BranchesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = branchData.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOptionOpen = (id) => {
    setIsOptionOpen(!isOptionOpen);
    setSelectedItemId(id);
  };

  // const onCreateBtnClick = () => {
  //   console.log("hi");
  // };

  // const dispatch = useDispatch();
  // const handleCreateBtnClick = () => {
  //   dispatch(showModal("addNewBranch"));
  //   console.log(showModal);
  // };

  return (
    <div className={styles.tableBlock}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.table__numSymbol}>№</th>
            <th className={styles.tableHeader__title}>Название кофейни</th>
            <th className={styles.tableHeader__title}>Адрес</th>
            <th className={styles.tableHeader__title}>Время работы</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((branchData, index) => (
            <tr key={branchData.id} className={styles.branch__item}>
              <td className={styles.table__numSymbol}>
                №{indexOfFirstItem + index + 1}
              </td>
              <td>{branchData.name}</td>
              <td>{branchData.address}</td>
              <td>{branchData.schedule}</td>
              <td>
                <button
                  className={styles.table__btn}
                  onClick={() => handleOptionOpen(branchData.id)}
                >
                  <img src={dots_icon} alt="dots_icon" />
                </button>
                {isOptionOpen && selectedItemId === branchData.id && (
                  <div className={styles.optionBlock}>
                    <button
                      className={styles.optionBlock__btnEdit}
                      // onClick={handleCreateBtnClick}
                    >
                      <img
                        src={editIcon}
                        alt="editIcon"
                        className={styles.dots_img}
                      />
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
          total={branchData.length}
          pageSize={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default BranchesPage;
