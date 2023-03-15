<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FichaDeAcompanhamentoClinico extends Controller
{
    public function ficha($hash)
    {
        return view('fichaDeAcompanhamentoClinico', compact('hash'));
    }
}
