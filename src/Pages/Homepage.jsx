import React, { Fragment } from 'react';
import Banner from '../components/Banner/Banner';
import CoinsTable from '../components/CoinsTable';
const Homepage = () => {
  return (
    <Fragment>
      <Banner />
      <CoinsTable />
    </Fragment>
  );
};

export default Homepage;
