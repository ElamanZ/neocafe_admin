import React, { useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styles from "../MenuPage/menuPage.module.scss";
import dots_icon from "../../assets/images/table/mdi_dots-vertical.svg";
import { tableBodyDatas } from "../../assets/utils/data.js";
import plusIcon from "../../assets/images/table/mdi_plus.svg";
import downIcon from "../../assets/images/table/downIcon.svg";
import downIcon2 from "../../assets/images/table/dropDownVVerh.svg";
import trashIcon from "../../assets/images/table/mdi_delete-outline.svg";
import editIcon from "../../assets/images/table/mdi_edit.svg";
import deleteIcon from "../../assets/images/table/mdi_delete.svg";
import { deleteCategory } from "../../redux/slices/CategoryMenuSlice";
import NewCategoryModal from "../../components/modals/NewCategoryModal/NewCategoryModal.jsx";
import DeleteCategoryModal from "../../components/modals/DeleteCategoryModal/DeleteCategoryModal.jsx";

const itemsPerPage = 6;

function MenuPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [newCategoryName, setNewCategoryName] = useState("");

  const categories = useSelector((state) => state.categoryData.category);
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = (index) => {
    setSelectedItemId(index);
    setIsDeleteModalOpen(true);
  };

  const handleOptionOpen = (id) => {
    setIsOptionOpen(!isOptionOpen);
    setSelectedItemId(id);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableBodyDatas.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onDelete = () => {
    dispatch(deleteCategory(categories[selectedItemId]));
    setIsDeleteModalOpen(false);
  };

  const onCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleAddCategory = () => {
    dispatch(addNewCategory(newCategoryName))
      .then(() => {
        // Category added successfully
        setIsModalOpen(false);
        setNewCategoryName("");
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding category:", error);
      });
  };

  return (
    <div className={styles.tableBlock}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.trBlock}>
            <th className={styles.table__numSymbol}>№</th>
            <th>Наименование</th>
            <th
              className={`${styles.categoryDropdown} ${
                isDropdownOpen ? styles.categoryDropdown_active : ""
              }`}
            >
              <button
                className={styles.categoryDropdown__toggle}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Категории
                <img
                  src={isDropdownOpen ? downIcon2 : downIcon}
                  alt="downIcon"
                />
              </button>
              {isDropdownOpen && (
                <div className={styles.categoryDropdown__menu}>
                  {categories.map((category, index) => (
                    <div className={styles.categoryDropdown__item} key={index}>
                      {category}
                      <img
                        className={styles.categoryDropdown__deleteIcon}
                        src={trashIcon}
                        alt="trashIcon"
                        onClick={() => handleDelete(index)}
                      />
                    </div>
                  ))}
                  <button
                    className={styles.categoryDropdown__addCategoryButton}
                    onClick={openModal}
                  >
                    Добавить
                    <img src={plusIcon} alt="plusIcon" />
                  </button>
                </div>
              )}
            </th>
            <th></th>
            <th></th>
            <th>Состав блюда и граммовка</th>
            <th>Стоимость</th>
            {/* <th>Филиал</th> */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((tableBodyData, index) => (
            <tr key={tableBodyData.id}>
              <td className={styles.table__numSymbol}>
                №{indexOfFirstItem + index + 1}
              </td>
              <td>{tableBodyData.name}</td>
              <td>{tableBodyData.category}</td>
              <td></td>
              <td></td>
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
          total={tableBodyDatas.length}
          pageSize={itemsPerPage}
        />
      </div>
      <NewCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCategory={handleAddCategory}
        newCategoryName={newCategoryName}
        setNewCategoryName={setNewCategoryName}
      />
      <DeleteCategoryModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onCancel={() => setIsDeleteModalOpen(false)}
        onDelete={(selectedItemId) => {
          dispatch(deleteCategory(selectedItemId));
        }}
        selectedItemId={selectedItemId}
      />{" "}
    </div>
  );
}

export default MenuPage;
