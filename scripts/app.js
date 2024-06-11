
const studentName = "Harshvardhansinh Sisodiya";
const studentNumber = "1162492";


console.log(`${studentName} - ${studentNumber}`);


const headerContent = document.querySelector('h1');


headerContent.innerHTML = `${studentName} - ${studentNumber}`;


headerContent.classList.add('heading1');
