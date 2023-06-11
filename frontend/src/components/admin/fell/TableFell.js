import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeleteFell } from '../../../utils/animalController';

const FellTable = () => {
    const [fellData, setFellData] = useState([]);

    const fetchFellData = async () => {
        try {
            const response = await fetch('http://localhost:3002/animal/fell');
            const data = await response.json();
            setFellData(data);
        } catch (error) {
            console.log('Error fetching animal data:', error);
        }
    };

    const DeleteFellById = (id) => {
        DeleteFell(id)
    };

    useEffect(() => {
        fetchFellData();
    }, []);

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pelo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Editar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Excluir
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {fellData.map((fell) => (
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={fell.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {fell.id}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {fell.fell}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full py-2">
                                        Editar
                                    </Link>
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <Link
                                        className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-orange-500 to-red-500 w-full py-2"
                                        onClick={() => DeleteFellById(fell.id)}
                                    >
                                        Excluir
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FellTable;
