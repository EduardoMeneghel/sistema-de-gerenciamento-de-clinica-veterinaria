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
        return view('admin/cadastro/documentos/documentos');
    }

    public function tipoDeAtendimento()
    {
        return view('admin/tipo-de-atendimento');
    }

    //Exame
    public function exame()
    {
        return view('admin/exame');
    }

    //Vacina
    public function vacina()
    {
        return view('admin/vacina');
    }

    //Veterinário
    public function veterinario()
    {
        return view('admin/veterinario');
    }

}
