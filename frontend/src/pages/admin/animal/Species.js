import React from 'react';
import Header from '../../../components/admin/util/Header';
import CreateFell from '../../../components/admin/species/CreateSpecies';
import TableSpecies from '../../../components/admin/species/TableSpecies';
import EditSpecies from '../../../components/admin/species/EditSpecies';
import { Link } from 'react-router-dom';

const Species = () => {
    return (
        <>
            <Header />
            <main className="mx-auto w-full max-w-2xl">
                <CreateFell />
                <EditSpecies />
                <TableSpecies />
            </main>
        </>
    );
}

export default Species;