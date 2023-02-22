<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Autor;

class AutorController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
    public function index()
    {
        $Autors = Autor::all(['id','nome','idade','sexo','brasileiro']);
        return response()->json($Autors);
    }

    
    public function store(Request $request)
    {
        $Autor = Autor::create($request->post());
        return response()->json([
            'message'=>'Autor Criado Com Sucesso!!',
            'Autor'=>$Autor
        ]);
    }

    
    public function show(Autor $Autor)
    {
        return response()->json($Autor);
    }

    
    public function update(Request $request, Autor $Autor)
    {
        $Autor->fill($request->post())->save();
        return response()->json([
            'message'=>'Autor atualizado com sucesso!!',
            'Autor'=>$Autor
        ]);
    }

    
    public function destroy(Autor $Autor)
    {
        $Autor->delete();
        return response()->json([
            'message'=>'Autor deletado com sucesso!!'
        ]);
    }
}
