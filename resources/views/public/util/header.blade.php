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
                        <a href="{{ url('') }}" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="{{ url('/minha-conta') }}" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100" aria-current="page">Minha conta</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
