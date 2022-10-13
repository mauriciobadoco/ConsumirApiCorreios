const cep = document.querySelector("#cep")
// criar um for para correr a api e trazer todos os campos de lá.
const showData = (result) =>{
    for( const campo in result){
        // cria if para verificar se a informação que tem na api  tem no campo  - faz comparação
        if(document.querySelector("#" +campo))
        //preenche as informações da api  nos campos utilizando o id do html
            document.querySelector("#"+ campo).value =result[campo]
        console.log(campo)
    }
}

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method:'GET',
        mode:'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response=>{response.json()
        .then(data => showData(data))
    })
    .catch( e => console.log('Deu erro: ' +e , message))

})