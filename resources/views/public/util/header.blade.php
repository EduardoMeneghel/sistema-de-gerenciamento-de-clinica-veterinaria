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
                        <a href="{{ url('') }}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <img src="https://img.icons8.com/material-sharp/24/null/home.png"/>
                            <span class="ml-3">Home</span>
                        </a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100">
                            <img src="https://img.icons8.com/material-sharp/24/null/user-male-circle.png"/>
                            <span class="ml-3">Minha Conta</span>
                        </button>
                        <div id="dropdownNavbar" class="z-30 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                <li>
                                    <a href="{{ url('/minha-conta') }}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="https://img.icons8.com/material-rounded/24/null/user.png"/>
                                    <span class="ml-3">Perfil</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="https://img.icons8.com/material-sharp/24/null/parakeet.png"/>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Animais</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="https://img.icons8.com/material-sharp/24/null/online-order.png"/>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Pedidos</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ url('/login') }}"  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="https://img.icons8.com/material-sharp/24/null/enter-2.png"/>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Login</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="https://img.icons8.com/material-sharp/24/null/emergency-exit.png"/>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Sair</span>
                                    </a>
                                </li>
                            </ul> 
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
