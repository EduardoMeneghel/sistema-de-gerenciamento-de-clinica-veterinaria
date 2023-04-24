<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProdutoDetalheController extends Controller
{
    public function produto()
    {
        return view('public/produto');
    }
}
