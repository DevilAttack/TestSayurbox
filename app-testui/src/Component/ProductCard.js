import { useState } from "react";
import { Card, Col, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import ProductDetails from "./ProductDetails";

const { Meta } = Card;
const ProductCard = ({ item, key }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((state) => !state);
  };
  return (
    <>
      {showModal && (
        <ProductDetails
          item={item}
          visible={showModal}
          handleModal={handleModal}
          key ={key}
        />
      )}
      <Col key={key} xs={12} sm={12} md={8} lg={6} xl={6}>
        <Card
          style={{ width: 300, cursor: "pointer", margin: "2em" }}
          cover={
            <img
              alt="example"
              src={
                item?.image
                  ? item?.image
                  : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          onClick={() => handleModal()}
        >
          <Meta
            avatar={
              <Avatar
                src={`https://joeschmoe.io/api/v1/${
                  item?.gender === "female"
                    ? "jess"
                    : item?.gender === "male"
                    ? "jon"
                    : "jabala"
                }`}
              />
            }
            title={item?.name}
            description={item?.gender}
          />
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
