import React from "react";
import Layout from "../layout/Layout";
import Table from "./Table";
import Form from "./Form";

const Admin = () => {
  return (
    <Layout>
      <div className="flex mt-16 justify-between" style={{ minHeight: 700 }}>
        <Table />
        <Form />
      </div>
    </Layout>
  );
};

export default Admin;
