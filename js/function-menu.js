$(document).ready(function() {

    // Criando uma função para adicionar o formulario de cadastro na tela pelo botao #add-disciplina
    $('#add-disciplina').click(function(e) {
        e.preventDevault()
        $('#conteudo').empyt()
        $('#conteudo').load('src/disciplinas/visao/adiciona-disciplinas.html')
    })


})