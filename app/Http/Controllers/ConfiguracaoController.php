<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConfiguracaoController extends Controller
{
    public function configuracao()
    {
        return view('admin/configuracao/configuracao');
    }
}
