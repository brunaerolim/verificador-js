function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO!] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/pequeno.png')
            } else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'img/jovemm.png')
            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'img/adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/pequena.png')
            } else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'img/jovem.png')
            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'img/adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}