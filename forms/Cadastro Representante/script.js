$(document).ready(function () {
 $('#representante_cep').focusout(function () {
        var cep = $('#representante_cep').val();
        cep = cep.replace('-','');

        var urlstr = 'http://viacep.com.br/ws/'+cep+'/json/';
        $.ajax({
            url : urlstr,
            type :'get',
            dataType :'json',
            success : function (data) {
                console.log(data);
                $('#representante_cidade').val(data.localidade);
                $('#representante_rua').val(data.logradouro);
                $('#representante_uf').val(data.uf);
                $('#representante_bairro').val(data.bairro);

            },
            error : function (erro) {
                console.log(erro)
            }
        });
    });$('#empresa_cep').focusout(function () {
        var cep = $('#empresa_cep').val();
        cep = cep.replace('-','');

        var urlstr = 'http://viacep.com.br/ws/'+cep+'/json/';
        $.ajax({
            url : urlstr,
            type :'get',
            dataType :'json',
            success : function (data) {
                console.log(data);
                $('#empresa_cidade').val(data.localidade);
                $('#empresa_rua').val(data.logradouro);
                $('#empresa_uf').val(data.uf);
                $('#empresa_bairro').val(data.bairro);

            },
            error : function (erro) {
                console.log(erro)
            }
        });
    });
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




