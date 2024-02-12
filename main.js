$(document).ready(function() {
    $(document).on('click', '.item', function(){
        $(this).addClass("checked");
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDaTarefa = $('#nome-da-tarefa').val();
        const novoItem = $(`<li class="item">${nomeDaTarefa}</li>`);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-da-tarefa').val('');
    });
});