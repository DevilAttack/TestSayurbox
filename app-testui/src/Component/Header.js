import { Typography, Layout, Input } from "antd";

const { Title } = Typography;
const { Header } = Layout;

const HeaderData = ({ handleSearch }) => {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: "white",
        borderBottom: "1px solid lightgray",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          height: "30px",
          padding: "1rem",
        }}
      >
        <Title
          style={{
            fontWeight: "normal",
            fontFamily: "Gilroy",
            fontSize: 25,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 17,
          }}
        >
          Sayurbox - Test
        </Title>

        <Input
          placeholder="Search Name"
          onChange={handleSearch}
          style={{ width: "12em", height: "2.5em", borderRadius: "4px" }}
        />
      </div>
    </Header>
  );
};

export default HeaderData;
