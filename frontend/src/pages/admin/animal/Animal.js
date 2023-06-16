import React from 'react';
import Header from '../../../components/admin/util/Header';
import CreateAnimal from '../../../components/admin/animal/CreateAnimal';
import { Link } from 'react-router-dom';

const Animal = () => {
    return (
        <>
            <Header />
            <CreateAnimal />
        </>
    );
}

export default Animal;