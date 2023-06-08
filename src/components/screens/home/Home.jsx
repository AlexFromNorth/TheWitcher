import React from 'react'
import Layout from '../layout/Layout';
import Content from './Content';
import Details from './Details';
import Girl  from './Girl';
import Carousel from './carousel/Carousel';

const Home = () => {
  return (
    <Layout>
        <Content/>
        <Carousel/>
        <Girl/>
        <Details/>
    </Layout>
  )
}

export default Home;