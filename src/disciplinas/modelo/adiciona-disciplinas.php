<?php

    // Iremos nos conectar ao banco de dados
    include('../../conexao/conn.php');

    $disciplina = $_REQUEST['disciplina'];
    $professor = $_REQUEST['professor'];

    if($disciplina = ""){
        echo "O campo com o nome da disciplina nao pode estar vazio, tente novamente";
    }else{
        // Gerar um script SQL para cadastro das informações no banco de dados
        $sql = "INSERT INTO disciplinas (disciplinas, professor) VALUES ('".$disciplina."', '".$professor."') ";
        // Testar o comando sql no banco de dados
        if(mysqli_query($conecta, $sql)){
            echo "Dados cadastrados com sucesso";
        }else{
            echo "Deu ruim no cadastro";
        }
    }