import React, { useState } from "react";
import { Row } from "antd";
import "antd/dist/antd.css";

import Header from "../Component/Header";
import ProductCard from "../Component/ProductCard";
import data from "../Data/data.json";

const Dashboard = () => {
  const [productData, setProductData] = useState(data?.data?.allPeople?.people);

  const handleSearch = (e) => {
    let inputSearch = e.target.value.toLowerCase();

    if (e.target.value) {
      setProductData(
        data?.data?.allPeople?.people.filter((item) => {
          if (item.name.toLowerCase().includes(inputSearch)) {
            return item;
          }
        })
      );
    } else {
      setProductData(data?.data?.allPeople?.people);
    }

    return 0;
  };

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <Row
        style={{ paddingTop: "6em", paddingLeft: "2em", paddingRight: "4em" }}
      >
        {productData.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
