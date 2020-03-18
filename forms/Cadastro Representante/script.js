$(document).ready(function () {
});

function abrirAba(event, nomeAba) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(nomeAba).style.display ="block";
    event.currentTarget.className += "active";
}
/**
 $('#cep').focusout(function () {
        var cep = $('#cep').val();
        cep = cep.replace('-','');

        var urlstr = 'http://viacep.com.br/ws/'+cep+'/json/';
        $.ajax({
            url : urlstr,
            type :'get',
            dataType :'json',
            success : function (data) {
                console.log(data);
                $('#cidade').val(data.localidade);
                $('#rua').val(data.logradouro);
                $('#uf').val(data.uf);
                $('#bairro').val(data.bairro);

            },
            error : function (erro) {
                console.log(erro)
            }
        });
    });
 **/


