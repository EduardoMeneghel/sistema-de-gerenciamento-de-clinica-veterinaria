<?php

use Illuminate\Support\Facades\Route;

Route::get('/',[\App\Http\Controllers\HomeController::class, 'index'])->name('index');
Route::get('/minha-conta',[\App\Http\Controllers\MinhaContaController::class, 'minhaConta'])->name('minhaConta');
//TCC

Route::prefix('/admin')->group( function (){

    //Home
    Route::get('',[\App\Http\Controllers\AdminController::class, 'admin'])->name('admin');

    //Dashboard
    Route::get('/dashboard',[\App\Http\Controllers\AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('/configuracao',[\App\Http\Controllers\ConfiguracaoController::class, 'configuracao'])->name('configuracao');

    //Cadastro
    Route::prefix('/cadastro')->group( function (){
        Route::get('',[\App\Http\Controllers\AdminController::class, 'dashboard'])->name('cadastro-geral');
        Route::get('/cliente',[\App\Http\Controllers\CadastroController::class, 'cliente'])->name('cadastro-cliente');
        Route::prefix('/animal')->group( function (){
            Route::get('',[\App\Http\Controllers\CadastroController::class, 'animal'])->name('cadastro-animal');
            Route::get('/especie',[\App\Http\Controllers\CadastroController::class, 'especie'])->name('cadastro-especie');
            Route::get('/raca',[\App\Http\Controllers\CadastroController::class, 'raca'])->name('cadastro-raca');
            Route::get('/pelo',[\App\Http\Controllers\CadastroController::class, 'pelo'])->name('cadastro-pelo');;
        });
        Route::get('/veterinario',[\App\Http\Controllers\CadastroController::class, 'veterinario'])->name('cadastro-veterinario');
        Route::get('/exame',[\App\Http\Controllers\CadastroController::class, 'exame'])->name('cadastro-exame');
        Route::get('/vacina',[\App\Http\Controllers\CadastroController::class, 'vacina'])->name('cadastro-vacina');
        Route::get('/tipo-de-atendimento',[\App\Http\Controllers\CadastroController::class, 'tipoDeAtendimento'])->name('cadastro-tipo-de-atendimento');
        Route::get('/documentos',[\App\Http\Controllers\CadastroController::class, 'documento'])->name('cadastro-documentos');
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
