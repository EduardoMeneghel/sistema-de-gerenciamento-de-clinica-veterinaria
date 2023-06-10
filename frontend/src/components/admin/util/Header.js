import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Header = () => {
  return (
        <header>
            <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="{{ url('') }}" className="flex items-center">
                        <img src={logo} className="h-6 mr-3 sm:h-10" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HVUNIBAVE</span>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm">
                            <li>
                                <Link to="../admin/dashboard" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                                <img src="https://img.icons8.com/material-sharp/24/null/dashboard.png"/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="../admin/order" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                                <img src="https://img.icons8.com/material-sharp/24/null/online-order.png"/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Pedido</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="../admin/financial" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                                <img src="https://img.icons8.com/material-sharp/24/null/check-dollar.png"/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Financeiro</span>
                                </Link>
                            </li>
                            <li>
                                <button data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100">
                                    <img src="https://img.icons8.com/material-sharp/24/null/add-user-male.png"/>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Cadastro</span>
                                </button>
                                <div className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <Link href="{{ url('admin/cadastro/cliente') }}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                        <img src="https://img.icons8.com/material-rounded/24/null/user.png" className="inline-block"/>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Cliente</span>
                                    </Link>
                                    <button data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img src="https://img.icons8.com/material-sharp/24/null/parakeet.png" className="inline-block"/>
                                        <span>Animal</span>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    </button>
                                    <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                            <li>
                                                <Link href="{{ url('admin/cadastro/animal') }}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                    <img src="https://img.icons8.com/material-sharp/24/null/parakeet.png" className="inline-block"/>
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Animal</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="{{ url('admin/cadastro/animal/especie') }}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                <img src="https://img.icons8.com/material-sharp/24/null/platypus.png" className="inline-block"/>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Espécie</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="{{ url('admin/cadastro/animal/raca') }}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                    <img src="https://img.icons8.com/material-sharp/24/null/parrot.png" className="inline-block"/>
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Raça</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="{{ url('admin/cadastro/animal/pelo') }}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                                <img src="https://img.icons8.com/material-sharp/24/null/quill-pen.png" className="inline-block"/>
                                                    <span className="flex-1 ml-3 whitespace-nowrap">Pelo</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="{{ url('admin/cadastro/veterinario') }}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                        <img src="https://img.icons8.com/material-sharp/24/null/veterinarian.png" className="inline-block"/>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Veterinário(a)</span>
                                    </Link>
                                    <Link href="{{ url('admin/cadastro/exame') }}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                        <img src="https://img.icons8.com/material-sharp/24/null/test-passed.png" className="inline-block"/>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Exame</span>
                                    </Link>
                                    <Link href="{{ url('admin/cadastro/vacina') }}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                        <img src="https://img.icons8.com/material-sharp/24/null/syringe.png" className="inline-block"/>    
                                        <span className="flex-1 ml-3 whitespace-nowrap">Vacina</span>
                                    </Link>
                                    <Link href="{{ url('admin/cadastro/documentos') }}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                        <img src="https://img.icons8.com/material-sharp/24/null/document--v1.png" className="inline-block"/>    
                                        <span className="flex-1 ml-3 whitespace-nowrap">Documentos</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link to="../admin/configuration/contact" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                                <img src="https://img.icons8.com/material-outlined/24/null/gear--v1.png"/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Configuração</span>
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
