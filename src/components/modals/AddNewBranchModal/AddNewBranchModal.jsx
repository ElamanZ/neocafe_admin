import React, { useState } from "react";
import styles from "./AddNewBranchModal.module.scss";
import { Modal, Form, Input, TimePicker, Button, Checkbox, Upload } from "antd";
import cloudUpload from "../../../assets/images/modals/cloudUpload.svg";
import classNames from "classnames";

const { RangePicker } = TimePicker;
const { Dragger } = Upload;

const AddNewBranchModal = ({ onCancel, isModalOpen }) => {
  const [form] = Form.useForm();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      setSelectedImage(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onFinish = (values) => {
    // Handle form submission
    console.log("Received values:", values);
  };

  const handleTimeChange = (time, day) => {
    console.log(`Selected time for ${day}:`, time);
  };

  return (
    <Modal
      title={<h3 className={styles.modal__title}>Новый филиал</h3>}
      visible={true}
      open={isModalOpen}
      onCancel={onCancel}
      footer={null}
      className={styles.modal}
    >
      <div className={styles.modalContainer}>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="branchImg"
            label={
              <p className={styles.imgUploadTitle}>
                Добавьте фотографию филиала
              </p>
            }
          >
            <div className={styles.dragger_container}>
              <Dragger
                name="file"
                multiple={false}
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleUpload}
                className={styles.draggerInline_container}
              >
                <div>
                  {selectedImage ? (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      style={{ maxWidth: "100%" }}
                    />
                  ) : (
                    <>
                      <img src={cloudUpload} />
                      <p className={styles.upload_text}>
                        Перетащите изображение для изменения или{" "}
                        <span>обзор</span>
                      </p>
                    </>
                  )}
                </div>
              </Dragger>
            </div>
          </Form.Item>
          <h3 className={styles.modal__subtitle}>Название и адрес</h3>
          <Form.Item
            name="branchName"
            label={
              <span className={styles.modal__label}>Название кофейни</span>
            }
          >
            <Input
              placeholder="Введите название филиала"
              className={styles.modal__input}
            />
          </Form.Item>
          <Form.Item
            name="branchAddress"
            label={<span className={styles.modal__label}>Адрес</span>}
          >
            <Input
              placeholder="Введите адрес филиала"
              className={styles.modal__input}
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label={<span className={styles.modal__label}>Номер телефона</span>}
          >
            <Input
              placeholder="Введите номер телефона"
              className={styles.modal__input}
            />
          </Form.Item>
          <Form.Item
            name="2gisLink"
            label={<span className={styles.modal__label}>Ссылка на 2ГИС</span>}
          >
            <Input
              placeholder="Вставьте ссылку на 2ГИС"
              className={styles.modal__input}
            />
          </Form.Item>
          <Form.Item
            name="tableCount"
            label={
              <span className={styles.modal__label}>Количество столиков</span>
            }
          >
            <Input
              type="number"
              placeholder="Введите количество столиков"
              className={styles.modal__input}
            />
          </Form.Item>

          <h3>График работы</h3>

          <div className={styles.schedule}>
            <div className={classNames(styles.row, styles.header)}>
              <div className={styles.cell}>День недели</div>
              <div className={styles.cell}>Время работы</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Понедельник</div>
              <div>
                <Checkbox />
              </div>
              <div className={styles.cell}>
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Понедельник")}
                />
                {" - "}
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Понедельник")}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Вторник</div>
              <div>
                <Checkbox />
              </div>
              <div className={styles.cell}>
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Вторник")}
                />
                {" - "}
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Вторник")}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Среда</div>
              <div>
                <Checkbox />
              </div>
              <div className={styles.cell}>
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Среда")}
                />
                {" - "}
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Среда")}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Четверг</div>
              <div>
                <Checkbox />
              </div>
              <div className={styles.cell}>
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Четверг")}
                />
                {" - "}
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Четверг")}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Пятница</div>
              <div>
                <Checkbox />
              </div>
              <div className={styles.cell}>
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Пятница")}
                />
                {" - "}
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Пятница")}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>
                Суббота <Checkbox />
              </div>

              <div className={styles.cell}>
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Суббота")}
                />
                {" - "}
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Суббота")}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Воскресенье </div>

              <div className="cell">
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Воскресенье")}
                />
                {" - "}
                <TimePicker
                  format="HH:mm"
                  onChange={(time) => handleTimeChange(time, "Воскресенье")}
                />
              </div>
            </div>
          </div>

          <Form.Item>
            <div className={styles.modal__btnWrapper}>
              <Button
                className={classNames(styles.modal__btn, styles.cancel__btn)}
                onClick={onCancel}
              >
                Отмена
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className={classNames(styles.modal__btn, styles.submit__btn)}
              >
                Сохранить
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddNewBranchModal;
