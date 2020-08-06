// procurar o botao
document.querySelector("#add-time").addEventListener('click', cloneField)
//quando clicar no botão


//executar uma ação
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll("input")

    // limpar os campos
    fields.forEach(function(field) {
        field.value = ""
    })

    //colocar na pagina
    document.querySelector('#schedule-itens').appendChild(newFieldContainer)

}