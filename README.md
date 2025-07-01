# 2J-DESENVOLVIMENTO
<?php

class Usuario {
    protected $nome;
    protected $email;
    protected $tipo;

    public function __construct($nome, $email, $tipo) {
        $this->nome = $nome;
        $this->email = $email;
        $this->tipo = $tipo;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getTipo() {
        return $this->tipo;
    }

    public function ehCliente() {
        return $this->tipo === 'cliente';
    }

    public function ehFuncionario() {
        return $this->tipo === 'funcionario';
    }

    public function ehAdministrador() {
        return $this->tipo === 'administrador';
    }
}
