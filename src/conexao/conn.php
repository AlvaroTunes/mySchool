<?php

    //Demonstre todos os erros e alertas nos meus codigos quanto ao meu codigo e quanto a interação com o B.D.;
        // os comandos abaixo sao comandos de configuração do nosso servidor apache;
    ini_set('display_error', true);
    error_reporting(E_ALL);

    // CRIAÇÂO das variaveis para conexao com o banco de dados;

    $hostname = "localhost";
    $database = "myschool";
    $username = "root";
    $password = "";

    if($conecta = mysqli_connect($hostname, $username, $password, $database)){
       // echo 'Conectado: '.$database.'.....';
    } else {
        echo 'Erro: '.mysqli_connect_error();
    }