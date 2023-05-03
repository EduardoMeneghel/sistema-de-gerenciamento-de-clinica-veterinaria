<!DOCTYPE html>
<html class="bg-slate-900">
<head>
    <title>Admin</title>
    @vite('resources/css/app.css')
</head>
<body>
@include('admin.util.header')
<p class="text-4xl text-white text-center my-12 font-black text-gray-900 dark:text-white">Dashboard</p>
<section class="flex container mx-auto">
    <div class="bg-white rounded-lg shadow w-full m-4">
        <canvas id="myChart"></canvas>
    </div>
    <div class="bg-white rounded-lg shadow w-full m-4">
        <canvas id="myChart1"></canvas>
    </div>
    <div class="bg-white rounded-lg shadow w-full m-4">
        <canvas id="myChart2"></canvas>
    </div>
    <div class="bg-white rounded-lg shadow w-full m-4">
        <canvas id="myChart3"></canvas>
    </div>
</section>
<section class="flex container mx-auto">
    <div class="bg-white rounded-lg shadow w-full m-4">
        <canvas id="myChart4"></canvas>
    </div>
    <div class="bg-white rounded-lg shadow w-full m-4">
        <canvas id="myChart5"></canvas>
    </div>
</section>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
@vite('resources/js/chartTest.js')
@vite('resources/js/chartTest1.js')
@vite('resources/js/chartTest2.js')
@vite('resources/js/chartTest3.js')
@vite('resources/js/chartTest4.js')
@vite('resources/js/chartTest5.js')
@vite('node_modules/flowbite/dist/flowbite.min.js')
@vite('node_modules/chart.js/dist/chart.js')
</body>
</html>
