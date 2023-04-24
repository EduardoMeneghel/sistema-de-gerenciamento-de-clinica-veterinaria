<!DOCTYPE html>
<html class="bg-slate-900">
    <head>
        <title>HVUNIBAVE</title>
        @vite('resources/css/app.css')
    </head>
    <body>
        @include('public.util.header')
        <main class="container mx-auto">
            @include('public.products.productDetails')

        </main>
        @include('public.util.footer')
        @vite('node_modules/flowbite/dist/flowbite.min.js')
    </body>
</html>
