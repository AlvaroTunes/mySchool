$(document).read(function() {

    // Criar uma função para monitorar o click em cima do botao com a classe bt-save
    $('btn-save').click(function(e) {
        e.preventDefault()
            // Irei coletar todas asa informações digitadas no formulario
        var dados = $('#adiciona-disciplinas').serialize()
            // Criar uma requisição AJAX assincrona
        $.ajax({
            type: 'POST', //Como as informações serao enviadas para o php
            dataType: 'JSON', //É o modo de transição de dados entre a visao e o modelo
            assync: true, //É somente para demosntrar que a requisição é assincrona
            data: dados, //É as informações que serao enviadas ao PHP
            url: 'src/disciplinas/modelo/adiciona-disciplinas.php', //É para onde irá as informações
            success: function(dados) {
                // Demonstrar se deu certo ou erraado...
                $('#adiciona-disciplinas').after(`
                <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                <strong>${dados.mensagem}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `)
            }
        })
    })
})