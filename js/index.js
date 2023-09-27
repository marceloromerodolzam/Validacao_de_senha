let inpSenha = document.getElementById('inpSenha');
let aviso = document.getElementById('aviso');
const caracters = ['@','#','$','%','&','*','!'];
const numeros = [0,1,2,3,4,5,6,7,8,9];
let mostraSenha = document.getElementById('mostraSenha')

aviso.innerHTML = '';

/* verifica se á carcters especias ou numeros*/
function Temcaracters(senha){

    for(let c = 0 ; c < senha.length ; c++ ){

        if(caracters.includes(senha[c])){

            return true;

        }
    }

    for(let n = 0; n < senha.length ; n++ ){
        
        if(numeros.includes(Number(senha[n]))){

            return true

        }

    }

    return false;
}


/* Funcão de verificação */
function validacao(){

    if(inpSenha.value.length == 0){

        aviso.innerHTML = 'Precisa digitar uma senha.';

    }else if(inpSenha.value.length <= 7){

        aviso.innerHTML = 'Precisa ter no minimo 7 caracters.';

    }else if(Temcaracters(inpSenha.value)){

        aviso.innerHTML = 'Senha forte!';

    }else{

        aviso.innerHTML = `Senha fraca, precisa ter um carater especial ou números: ${caracters} ou ${numeros} `;

    }

}

/* Mostra a senha e esconde a mesma. */

mostraSenha.addEventListener('change', function(){

    inpSenha.type = mostraSenha.checked ? 'text' : 'password';

})