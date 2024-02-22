import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from "../../buttons/Button.jsx";
import styles from "../NewCategoryModal/NewCategoryModal.module.scss";
import HeaderModal from "../HeaderModal/HeaderModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from '../../../redux/slices/CategoryMenuSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#FFFFFF',
    border: 'none',
    boxShadow: 24,
    borderRadius: "20px",
    p: 4,
};

function DeleteCategoryModal({ isOpen, onClose, onCancel, onDelete, selectedItemId }) {
    const text = "Удаление";
    const categories = useSelector(state => state.categoryData.category);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCategory(categories[selectedItemId]));
        onClose();
    };

    return (
        <Modal
            open={isOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={onClose}
        >
            <Box sx={style}>
                <HeaderModal text={text} onClick={onClose}/>
                <p className={styles.modalText}>Вы действительно хотите удалить категорию <span style={{color: "#35536B"}}>“{categories[selectedItemId]}”</span>?</p>

                <div className={styles.newCategoryModal__btnsBlock}>
                    <div className={styles.newCategoryModal__btnBlock}>
                        <Button onClick={onCancel} isModalButton={true} isModalButtonBorder={true}>Отмена</Button>
                    </div>
                    <div className={styles.newCategoryModal__btnBlock}>
                        <Button onClick={handleDelete} isModalButton={true}>Удалить</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default DeleteCategoryModal;
