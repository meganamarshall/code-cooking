const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
const peanutRangeNode = document.getElementById('peanuts');
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');
const peanutNodeTwo = document.getElementById('peanuts-2');
const roleNode = document.getElementById('role');

peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
});

yesNode.addEventListener('change', function() {
    if(yesNode.checked) {
        allergicNumberNode.textContent = 1;
        peanutRangeNode.min = 1;
        peanutRangeNode.value = 1;
        peanutRangeNode.disabled = false;
        peanutNodeTwo.required = yesNode.checked; //you could also use true here
    }
});

noNode.addEventListener('change', function() {
    if(noNode.checked) {
        allergicNumberNode.textContent = 0;
        peanutRangeNode.value = 0;
        peanutRangeNode.min = 0;
        peanutRangeNode.disabled = true;
        peanutNodeTwo.required = !noNode.checked; //you could also use false here
    }
});

formNode.addEventListener('submit', function(event) {
    event.preventDefault();


    const applicant = {
        //name=key, whole thing is "key value pair"
        name: nameNode.value,
        zipCode: zipCodeNode.value,
        allergicScale: peanutRangeNode.value,
        allergicScaleTwo: peanutNodeTwo.value,
        role: roleNode.value
    };

    const jsonApplicant = JSON.stringify(applicant);

    window.localStorage.setItem('applicant', jsonApplicant);

    window.location = 'applicant-details.html';
});
