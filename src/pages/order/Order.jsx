import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import myContext from "../../context/data/myContext";

function Order() {
  const dataContext = useContext(myContext);

  return (
    <Layout>
      <h1>Order by </h1>
      <h1>color </h1>
    </Layout>
  );
}

export default Order;
