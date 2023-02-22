<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Livro;
use App\Models\Autor;

class LivroController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
    public function index()
    {
        $Livros = Livro::with("autor")->get(['id','nome','numero_paginas','autor_id']);
        return response()->json($Livros);
    }
    
    public function store(Request $request)
    {
        $Livro = Livro::create($request->post());
        return response()->json([
            'message'=>'Livro Criado Com Sucesso!!',
            'Livro'=>$Livro
        ]);
    }

    
    public function show(Livro $Livro)
    {
        return response()->json($Livro);
    }

    
    public function update(Request $request, Livro $Livro)
    {
        $Livro->fill($request->post())->save();
        return response()->json([
            'message'=>'Livro atualizado com sucesso!!',
            'Livro'=>$Livro
        ]);
    }

    
    public function destroy(Livro $Livro)
    {
        $Livro->delete();
        return response()->json([
            'message'=>'Livro deletado com sucesso!!'
        ]);
    }
}
