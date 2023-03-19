<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//TCC

Route::prefix('/admin')->group( function (){
    Route::get('',[\App\Http\Controllers\AdminController::class, 'admin'])->name('admin');
    Route::get('/dashboard',[\App\Http\Controllers\AdminController::class, 'dashboard'])->name('dashboard');

    Route::prefix('/cadastro')->group( function (){
        Route::get('',[\App\Http\Controllers\AdminController::class, 'dashboard'])->name('cadastro-geral');
        Route::get('/cliente',[\App\Http\Controllers\CadastroController::class, 'cliente'])->name('cadastro-cliente');
        Route::get('/animal',[\App\Http\Controllers\AdminController::class, 'cliente'])->name('cadastro-animal');
        Route::get('/veterinario',[\App\Http\Controllers\AdminController::class, 'cliente'])->name('cadastro-veterinario');
        Route::get('/exame',[\App\Http\Controllers\AdminController::class, 'cliente'])->name('cadastro-exame');
        Route::get('/vacina',[\App\Http\Controllers\AdminController::class, 'cliente'])->name('cadastro-vacina');
        Route::get('/tipo-de-atendimento',[\App\Http\Controllers\AdminController::class, 'cliente'])->name('cadastro-tipo-de-atendimento');
        Route::get('/documentos',[\App\Http\Controllers\AdminController::class, 'cliente'])->name('cadastro-documentos');
    });
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
