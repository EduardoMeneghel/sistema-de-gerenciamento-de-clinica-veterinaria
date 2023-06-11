import React from 'react';
import Header from '../../../components/admin/util/Header';
import CreateRace from '../../../components/admin/race/CreateRace';
import TableRace from '../../../components/admin/race/TableRace';
import EditRace from '../../../components/admin/race/EditRace';

const Race = () => {
    return (
        <>
            <Header />
            <main className="mx-auto w-full max-w-2xl">
                <CreateRace />
                <EditRace />
                <TableRace />
            </main>
        </>
    );
}

export default Race;