<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MinhaContaController extends Controller
{
    public function minhaConta()
    {
        return view('public/minhaConta');
    }

}
