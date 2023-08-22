<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Students extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'    => [
                'type'          => 'INT',
                'constraint'    => 11,
                'auto_increment'    => True
            ],
            'nome'    => [
                'type' => 'VARCHAR',
                'constraint' => 255,
            ],
            'email'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 200
            ],
            'telefone'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 11,
            ],
            'endereco'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 200,
            ],
            'foto'    => [
                'type'          => 'varchar',
                'constraint'    => 300,
            ]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('students', true);
    }

    public function down()
    {
        $this->forge->dropTable('students');
    }
}
