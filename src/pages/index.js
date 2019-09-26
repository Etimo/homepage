import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Splash from "../components/splash";
import Content from "../components/content";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Splash />
    <Content />
  </Layout>
);

export default IndexPage;
