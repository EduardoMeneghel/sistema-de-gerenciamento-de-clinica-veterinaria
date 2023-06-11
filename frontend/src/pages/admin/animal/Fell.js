import React, { useState, useEffect } from 'react';
import Header from '../../../components/admin/util/Header';
import CreateFell from '../../../components/admin/fell/CreateFell';
import TableFell from '../../../components/admin/fell/TableFell';
import EditFell from '../../../components/admin/fell/EditFell';

const Fell = () => {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-2xl">
        <CreateFell />
        <EditFell />
        <TableFell />
      </main>
    </>
  );
};

export default Fell;
