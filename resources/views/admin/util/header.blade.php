<header>
    <nav class="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="{{ url('') }}" class="flex items-center">
                <img src="{{asset('user.png')}}" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HVUNIBAVE</span>
            </a>
            <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm">
                    <li>
                        <a href="{{ url('admin/dashboard') }}" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                        <img src="https://img.icons8.com/material-sharp/24/null/dashboard.png"/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('admin/pedido') }}" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                        <img src="https://img.icons8.com/material-sharp/24/null/online-order.png">
                        <span class="flex-1 ml-3 whitespace-nowrap">Pedido</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ url('admin/financeiro') }}" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                        <img src="https://img.icons8.com/material-sharp/24/null/check-dollar.png"/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Financeiro</span>
                        </a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100">
                            <img src="https://img.icons8.com/material-sharp/24/null/add-user-male.png"/>
                            <span class="flex-1 ml-3 whitespace-nowrap">Cadastro</span>
                        </button>
                        <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <a href="{{ url('admin/cadastro/cliente') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                <img src="https://img.icons8.com/material-rounded/24/null/user.png" class="inline-block"/>
                                <span class="flex-1 ml-3 whitespace-nowrap">Cliente</span>
                            </a>
                            <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <img src="https://img.icons8.com/material-sharp/24/null/parakeet.png" class="inline-block"/>
                                <span>Animal</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </button>
                            <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                    <li>
                                        <a href="{{ url('admin/cadastro/animal') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                            <img src="https://img.icons8.com/material-sharp/24/null/parakeet.png" class="inline-block"/>
                                            <span class="flex-1 ml-3 whitespace-nowrap">Animal</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="{{ url('admin/cadastro/animal/especie') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                        <img src="https://img.icons8.com/material-sharp/24/null/platypus.png" class="inline-block"/>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Espécie</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="{{ url('admin/cadastro/animal/raca') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                            <img src="https://img.icons8.com/material-sharp/24/null/parrot.png" class="inline-block"/>
                                            <span class="flex-1 ml-3 whitespace-nowrap">Raça</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="{{ url('admin/cadastro/animal/pelo') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                        <img src="https://img.icons8.com/material-sharp/24/null/quill-pen.png" class="inline-block"/>
                                            <span class="flex-1 ml-3 whitespace-nowrap">Pelo</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="{{ url('admin/cadastro/veterinario') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                <img src="https://img.icons8.com/material-sharp/24/null/veterinarian.png" class="inline-block"/>
                                <span class="flex-1 ml-3 whitespace-nowrap">Veterinário(a)</span>
                            </a>
                            <a href="{{ url('admin/cadastro/exame') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                <img src="https://img.icons8.com/material-sharp/24/null/test-passed.png" class="inline-block"/>
                                <span class="flex-1 ml-3 whitespace-nowrap">Exame</span>
                            </a>
                            <a href="{{ url('admin/cadastro/vacina') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                <img src="https://img.icons8.com/material-sharp/24/null/syringe.png" class="inline-block"/>    
                                <span class="flex-1 ml-3 whitespace-nowrap">Vacina</span>
                            </a>
                            <a href="{{ url('admin/cadastro/documentos') }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                <img src="https://img.icons8.com/material-sharp/24/null/document--v1.png" class="inline-block"/>    
                                <span class="flex-1 ml-3 whitespace-nowrap">Documentos</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href="{{ url('admin/configuracao') }}" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">
                        <img src="https://img.icons8.com/material-outlined/24/null/gear--v1.png"/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Configuração</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
