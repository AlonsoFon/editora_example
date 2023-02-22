<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
    use SoftDeletes;
    protected $fillable = ['nome','numero_paginas','autor_id'];

    public function autor(){
        return $this->belongsTo(Autor::class, 'autor_id', 'id');
    }
}
