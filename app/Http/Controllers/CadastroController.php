<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CadastroController extends Controller
{
    //Animal
    public function animal()
    {
        return view('admin/cadastro/animal/animal');
    }

    public function especie()
    {
        return view('admin/cadastro/animal/especie');
    }

    public function raca()
    {
        return view('admin/cadastro/animal/raca');
    }

    public function pelo()
    {
        return view('admin/cadastro/animal/pelo');
    }

    //Cliente
    public function cliente()
    {
        return view('admin/cadastro/cliente/cliente');
    }

    //Documento
    public function documento()
    {
        return view('admin/cadastro/documento/documento');
    }

    public function tipoDeAtendimento()
    {
        return view('admin/tipo-de-atendimento');
    }

    //Exame
    public function exame()
    {
        return view('admin/cadastro/exame/exame');
    }

    //Vacina
    public function vacina()
    {
        return view('admin/cadastro/vacina/vacina');
    }

    //Veterinário
    public function veterinario()
    {
        return view('admin/cadastro/veterinario/veterinario');
    }

}
