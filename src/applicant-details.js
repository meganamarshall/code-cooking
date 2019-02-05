const applicantJSON = window.localStorage.getItem('applicant');
const applicant = JSON.parse(applicantJSON);
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');

console.log(applicantJSON);

nameNode.textContent = applicant.name;
zipCodeNode.textContent = applicant.zipCode;

//how to get an array
if(applicant.snoreType.length === 0) {
    snoreTypeNode.textContent = 'none';
}
else {
    for(let i = 0; i < applicant.snoreType.length, i++) {
        snoreTypeNode.textContent += applicant.snoreType[i] + ', ';
    }
    snoreTypeNode.textContent += applicant.snoreType[applicant.snoreType.length -1]; //using this long format instead of "i" because i is declared inside the for loop
}

