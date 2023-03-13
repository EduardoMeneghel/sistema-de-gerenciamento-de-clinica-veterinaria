<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login',[\App\Http\Controllers\LoginContoller::class, 'login']);

Route::get('/contato',[\App\Http\Controllers\ContatoController::class, 'contato']);

Route::get('/fornecedor',[\App\Http\Controllers\FornecedorContoller::class, 'fornecedor']);

Route::get('/categoria/{nome}/{id}', function (string $nome, int $id){
    echo $nome . $id;
})->where('nome','[A-Za-z]+')->where('id', '[0-9]+');

Route::prefix('/app')->group(function(){
    Route::get('/login',[\App\Http\Controllers\LoginContoller::class, 'login']);
});

Route::fallback(function() {
    echo "Not found - 404";
});