<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginContoller extends Controller
{
    public function login()
    {
        return view('login/login');
    }

    public function registro()
    {
        return view('login/registro');
    }

    public function recuperarSenha()
    {
        return view('login/recuperarSenha');
    }
}
