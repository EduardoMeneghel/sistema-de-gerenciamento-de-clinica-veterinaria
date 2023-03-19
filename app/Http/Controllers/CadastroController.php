<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CadastroController extends Controller
{
    public function cliente()
    {
        return view('admin/cliente');
    }
}
