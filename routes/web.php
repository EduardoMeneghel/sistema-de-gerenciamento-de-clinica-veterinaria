<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login',
    [
        \App\Http\Controllers\LoginContoller::class, 'login'
    ]
);

Route::get('/contato',
    [
        \App\Http\Controllers\ContatoController::class, 'contato'
    ]
);

Route::get('/contato/{nome}/{sobrenome?}', function (string $nome, string $sobrenome = 'ok'){
    echo 'Bom dia  ' . $nome . $sobrenome;
});
