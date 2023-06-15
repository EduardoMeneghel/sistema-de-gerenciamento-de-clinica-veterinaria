import React from 'react';
import Header from '../../../components/admin/util/Header';
import CreateOwner from '../../../components/admin/owner/CreateOwner';
const Owner = () => {

    return(
        <>
            <Header />
            <main className="mx-auto w-full max-w-2xl">
                <CreateOwner />
            </main>
        </>
    );
}

export default Owner;