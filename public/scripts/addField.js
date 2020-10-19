//Procurar o botão
document.querySelector("#add-time").addEventListener("click", cloneField) //Quando clical no botão

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true)

    // pegar os campos
    const fields = newFieldsContainer.querySelectorAll("input")
    
    //para cada campo limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })
    // Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)
}