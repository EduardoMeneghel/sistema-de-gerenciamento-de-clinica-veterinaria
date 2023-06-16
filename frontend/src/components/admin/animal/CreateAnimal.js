import React from 'react';
import { Link } from 'react-router-dom';
import SelectSpecies from '../species/SelectSpecies';
import SelectRace from '../race/SelectRace';
import SelectFell from '../fell/SelectFell';

const CreateAnimal = () => {
    return (
        <>
            <main className="mx-auto w-full max-w-2xl">
                <h1 className="text-4xl font-black text-white text-center mt-16">Animal</h1>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="nome"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Nome
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <SelectSpecies />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <SelectRace />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <SelectFell />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <select
                    type="text"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                    >
                        <option className="text-black" selected>
                            Selecione o gênero
                        </option>
                        <option className="text-black" value="1" key="1">
                        Macho
                        </option>
                        <option className="text-black" value="1" key="1">
                        Femea
                        </option>
                    </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                    type="date"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Data de nascimento aproximada"
                    />
                </div>
                <a href="{{ url('admin/dashboard') }}"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Voltar</a>
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2">
                    Salvar
                </button>
            </main>
        </>
    );
}

export default CreateAnimal;