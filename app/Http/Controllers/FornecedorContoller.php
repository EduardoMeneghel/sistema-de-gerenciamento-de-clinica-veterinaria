<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FornecedorContoller extends Controller
{
    public function fornecedor()
    {
        $fornecedor = ['teste',123, [12]];
        return view('fornecedor', compact('fornecedor'));
    }
}
