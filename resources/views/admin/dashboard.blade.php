<!DOCTYPE html>
<html class="bg-slate-900">
<head>
    <title>Admin</title>
    @vite('resources/css/app.css')
</head>
<body>
@include('admin.util.header')
<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 mx-16">
    <div class="h-auto max-w-full rounded-lg mx-8">
        <canvas id="myChart"></canvas>
    </div>
    <div class="h-auto max-w-full rounded-lg mx-8">
        <canvas id="myChart1"></canvas>
    </div>
    <div class="h-auto max-w-full rounded-lg mx-8">
        <canvas id="myChart2"></canvas>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
@vite('resources/js/chartTest.js')
@vite('resources/js/chartTest1.js')
@vite('resources/js/chartTest2.js')
@vite('node_modules/flowbite/dist/flowbite.min.js')
@vite('node_modules/chart.js/dist/chart.js')
</body>
</html>
