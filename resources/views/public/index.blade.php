<!DOCTYPE html>
<html class="bg-slate-900">
<head>
    <title>HVUNIBAVE</title>
    @vite('resources/css/app.css')
</head>
<body>
@include('public.util.header')
@include('public.util.carousel')
<main class="container mx-auto">
    @include('public.products.productListing')
    @include('public.products.productsNews')
</main>
@include('public.util.footer')
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
@vite('resources/js/chartTest.js')
@vite('resources/js/chartTest1.js')
@vite('resources/js/chartTest2.js')
@vite('node_modules/flowbite/dist/flowbite.min.js')
@vite('node_modules/chart.js/dist/chart.js')
</body>
</html>
