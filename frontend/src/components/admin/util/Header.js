import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSecondDropdown, setShowSecondDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };


    const toggleSecondDropdown = () => {
        setShowSecondDropdown(!showSecondDropdown);
    };

    return (
        <header>
            <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-6 mr-3 sm:h-10" alt="Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HVUNIBAVE</span>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm">
                            <li>
                                <Link to="../admin/dashboard" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                                    <img src="https://img.icons8.com/material-sharp/24/null/dashboard.png" alt="Dashboard" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="../admin/order" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                                    <img src="https://img.icons8.com/material-sharp/24/null/online-order.png" alt="Order" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="../admin/financial" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                                    <img src="https://img.icons8.com/material-sharp/24/null/check-dollar.png" alt="Financial" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Financial</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={toggleDropdown} className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100">
                                    <img src="https://img.icons8.com/material-sharp/24/null/add-user-male.png" alt="Cadastro" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Cadastro</span>
                                </button>
                                {showDropdown && (
                                    <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                            <button
                                                onClick={toggleSecondDropdown}
                                                data-dropdown-toggle="doubleDropdown"
                                                data-dropdown-placement="right-start"
                                                type="button"
                                                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <img src="https://img.icons8.com/material-sharp/24/null/parakeet.png" alt="Animal" className="inline-block" />
                                                <span>Animal</span>
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                            {showSecondDropdown && (
                                                <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" style={{ left: 180 + 'px', top: 0 + 'px' }}>
                                                    <li>
                                                        <Link to="../admin/animal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                            <img src="https://img.icons8.com/material-sharp/24/null/parakeet.png" alt="Animal" className="inline-block" />
                                                            <span className="flex-1 ml-3 whitespace-nowrap">Animal</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="../admin/animal/species" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                            <img src="https://img.icons8.com/material-sharp/24/null/platypus.png" alt="Espécie" className="inline-block" />
                                                            <span className="flex-1 ml-3 whitespace-nowrap">Espécie</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="../admin/animal/race" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                            <img src="https://img.icons8.com/material-sharp/24/null/parrot.png" alt="Raça" className="inline-block" />
                                                            <span className="flex-1 ml-3 whitespace-nowrap">Raça</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="../admin/animal/fell" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                            <img src="https://img.icons8.com/material-sharp/24/null/quill-pen.png" alt="Pelo" className="inline-block" />
                                                            <span className="flex-1 ml-3 whitespace-nowrap">Pelo</span>
                                                        </Link>
                                                    </li>
                                                </div>
                                            )}
                                            <li>
                                                <Link to="../admin/cadastro/cliente" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                    <img src="https://img.icons8.com/material-rounded/24/null/user.png" alt="Cliente" className="inline-block" />
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Cliente</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="../admin/cadastro/veterinario" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                    <img src="https://img.icons8.com/material-sharp/24/null/veterinarian.png" alt="Veterinário(a)" className="inline-block" />
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Veterinário(a)</span>
                                                </Link>
                                            </li>
                                            <Link to="../admin/cadastro/exame" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                <img src="https://img.icons8.com/material-sharp/24/null/test-passed.png" alt="Exame" className="inline-block" />
                                                <span className="flex-1 ml-3 whitespace-nowrap">Exame</span>
                                            </Link>
                                            <li>
                                                <Link to="../admin/cadastro/vacina" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                    <img src="https://img.icons8.com/material-sharp/24/null/syringe.png" alt="Vacina" className="inline-block" />
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Vacina</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="../admin/cadastro/documentos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                    <img src="https://img.icons8.com/material-sharp/24/null/document--v1.png" alt="Documentos" className="inline-block" />
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Documentos</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                            </li>
                            <li>
                                <Link to="../admin/configuration/contact" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                                    <img src="https://img.icons8.com/material-outlined/24/null/gear--v1.png"/>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Configuração</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
