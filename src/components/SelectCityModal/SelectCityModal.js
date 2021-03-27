import React, { useState } from "react";
import { Modal, Button, Row } from "antd";
import "./SelectCityModal.scss";

const SelectCityModal = ({ onSelectCity, citiesList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="selectCityModal">
      <Button onClick={toggleModal}>Seleccionar otra ciudad</Button>
      <Modal
        title="Ciudades disponibles"
        visible={isModalVisible}
        // onOk={toggleModal}
        onCancel={toggleModal}
      >
        <Row span={24} className="modal__body">
          {citiesList.map((city) => (
            <Button
              className="modal__body-option"
              key={city.city}
              onClick={() => {
                onSelectCity(city);
                toggleModal();
              }}
            >
              {city.city}
            </Button>
          ))}
        </Row>
      </Modal>
    </div>
  );
};

export default SelectCityModal;
