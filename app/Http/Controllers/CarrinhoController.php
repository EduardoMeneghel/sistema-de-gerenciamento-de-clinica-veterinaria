<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CarrinhoController extends Controller
{
    public function carrinho()
    {
        return view('public/carrinho/carrinho');
    }

    public function adicionarAoCarrinho()
    {
        return view('public/carrinho/carrinho');
    }
}
