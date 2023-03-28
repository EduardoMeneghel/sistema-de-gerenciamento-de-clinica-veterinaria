<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CadastroController extends Controller
{
    public function animal()
    {
        return view('admin/animal');
    }

    public function cliente()
    {
        return view('admin/cliente');
    }

    public function documento()
    {
        return view('admin/documentos');
    }

    public function exame()
    {
        return view('admin/exame');
    }

    public function vacina()
    {
        return view('admin/vacina');
    }

    public function tipoDeAtendimento()
    {
        return view('admin/tipo-de-atendimento');
    }

    public function veterinario()
    {
        return view('admin/veterinario');
    }

}
