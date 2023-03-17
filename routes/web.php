<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//TCC

Route::prefix('/admin')->group( function (){
    Route::get('',[\App\Http\Controllers\AdminController::class, 'admin'])->name('admin');
    Route::get('/dashboard',[\App\Http\Controllers\AdminController::class, 'dashboard'])->name('dashboard');
});

Route::prefix('/login')->group( function (){
    Route::get('',[\App\Http\Controllers\LoginContoller::class, 'login']);
})->name('login');

Route::prefix('/registro')->group( function (){
    Route::get('',[\App\Http\Controllers\LoginContoller::class, 'registro']);
})->name('registro');

Route::prefix('/recuperar-senha')->group( function (){
    Route::get('',[\App\Http\Controllers\LoginContoller::class, 'recuperarSenha']);
})->name('recuperar-senha');

Route::prefix('/documentos')->group(function(){
    Route::get('/ficha-de-acompanhamento-clinico/{hash}',[\App\Http\Controllers\FichaDeAcompanhamentoClinico::class, 'ficha']);
});

Route::fallback(function() {echo "Not found - 404";});

//CURSO
//
//Route::get('/categoria/{nome}/{id}', function (string $nome, int $id){
//    echo $nome . $id;
//})->where('nome','[A-Za-z]+')->where('id', '[0-9]+');
//
//Route::prefix('/app')->group(function(){
//    Route::get('/login',[\App\Http\Controllers\LoginContoller::class, 'login']);
//});
