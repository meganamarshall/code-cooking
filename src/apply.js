const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
const peanutRangeNode = document.getElementById('peanuts');
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');

peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
});

yesNode.addEventListener('change', function() {
    
});

noNode.addEventListener('change', function() {
    
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        //name=key, whole thing is "key value pair"
        name: nameNode.value,
        zipCode: zipCodeNode.value,
        allergicScale: peanutRangeNode.value
    };

})