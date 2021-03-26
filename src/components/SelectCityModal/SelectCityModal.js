import React, { useState } from "react";
import { Modal, Button, Row } from "antd";
import "./SelectCityModal.scss";

const listOfCities = [
  {
    name: "Nairobi",
    country: "KE",
  },
  {
    name: "Helsinki",
    country: "FI",
  },
  {
    name: "Tokyo",
    country: "JP",
  },
  {
    name: "Denver",
    country: "US",
  },
  {
    name: "Berlín",
    country: "DE",
  },
];

const SelectCityModal = ({ selectCity }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="selectCityModal">
      <Button onClick={showModal}>Seleccionar otra ciudad</Button>
      <Modal
        title="Ciudades disponibles"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {listOfCities.map((city) => (
          <Row span={24}>
            <Button key={city.name} onClick={() => selectCity(city)}>
              {city.name}
            </Button>
          </Row>
        ))}
      </Modal>
    </div>
  );
};

export default SelectCityModal;
