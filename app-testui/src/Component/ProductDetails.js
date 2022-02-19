import { Modal, Row, Col, Image, Typography } from "antd";

const { Title } = Typography;
const ProductDetails = ({ item, visible, handleModal }) => {
  const infoData = Object.entries(item);

  return (
    <Modal
      title={`${item?.name}`}
      visible={visible}
      onCancel={handleModal}
      footer={null}
    >
      <Row>
        <Col>
          <Image
            src={
              item?.image
                ? item?.image
                : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
          />
        </Col>
        <Col style={{ paddingLeft: "1em" }}>
          {infoData.map((key) => {
            return (
              <Row>
                <Col>
                  <Title level={5}> {`${key[0].toUpperCase()}  : `}</Title>
                </Col>
                <Col style={{ paddingLeft: "0.4em" }}>{key[1]}</Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Modal>
  );
};

export default ProductDetails;
