import React from "react";
import Layout from "../layout/Layout";
import Video from "./Video";
import Comments from "./Comments";

const Trailer = () => {
  return (
    <Layout>
      <div className="flex justify-center mt-16">
        <Video />
      </div>
      <div className="flex justify-center mt-10 text-white" style={{height: '45%'}}>
        <Comments />
      </div>
    </Layout>
  );
};

export default Trailer;
