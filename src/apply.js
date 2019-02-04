const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
// another way to do this
// const nameValue = inputNode.value;

// another way to do this
// const nameValue = formNode.elements.name.value;

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        name: nameNode.value,
        zipCode: zipCodeNode.value
    };

    console.log(applicant);
})