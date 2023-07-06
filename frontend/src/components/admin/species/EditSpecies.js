import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EditSpecies = () => {
    const [speciesEdit, setSpeciesEdit] = useState('');
    const [editSpeciesId, setEditSpeciesId] = useState('');

    return (
        <>
            <div className='mt-8'>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        value={editSpeciesId}
                        onChange={(e) => setEditSpeciesId(e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="id"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Id
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        value={speciesEdit}
                        onChange={(e) => setSpeciesEdit(e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="especie"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Espécie
                    </label>
                </div>
                <Link
                    type="submit"
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-2"
                >
                    Editar
                </Link>
            </div>
        </>
    );
}

export default EditSpecies;