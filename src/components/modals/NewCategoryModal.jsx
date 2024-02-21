import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from "../buttons/Button.jsx";
import styles from "./NewCategoryModal.module.scss";
import styleInput from "../Input/Input.module.scss";
import {useForm} from "react-hook-form";
import HeaderModal from "./HeaderModal/HeaderModal.jsx";

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

function NewCategoryModal({isOpen, onClose}) {
    const text = "Новая категория"
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const onSubmit = (data) => {
        alert(`Новая категория: ${data.category}`);
        reset();
        onClose();
    };

    const onCancel = () => {
        reset();
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
                <p className={styles.modalText}>Название</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className={styleInput.input__newCategory} placeholder="Введите название категории" type="text"
                           {...register('category', {
                               required: "Пожалуйста, заполните это поле",
                               maxLength: {
                                   value: 100,
                                   message: "Максимальная длина - 100 символов"
                               },
                               minLength: {
                                   value: 3,
                                   message: "Минимальная длина - 3 символа"
                               }
                           })}
                    />
                    {errors?.category && (
                        <div style={{color: "red"}}>{errors.category.message}</div>
                    )}
                    <div className={styles.newCategoryModal__btnsBlock}>
                        <div className={styles.newCategoryModal__btnBlock}>
                            <Button onClick={onCancel} isModalButton={true} isModalButtonBorder={true}>Отмена</Button>
                        </div>
                        <div className={styles.newCategoryModal__btnBlock}>
                            <Button type="submit" isModalButton={true}>Добавить</Button>
                        </div>
                    </div>
                </form>
            </Box>
        </Modal>
    );
}

export default NewCategoryModal;
