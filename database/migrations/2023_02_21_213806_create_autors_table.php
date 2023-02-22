<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('autors', function (Blueprint $table) {
            $table->id();
            $table->string("nome",191);
            $table->string("idade",191);
            $table->enum('sexo', ['Masculino', 'Feminino', 'Oculto']);
            $table->enum('brasileiro', ['Sim', 'Não', 'Oculto']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('autors');
    }
};
