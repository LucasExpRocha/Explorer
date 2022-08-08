registerStudent = () => {
    let aluno = register();
    students.push(aluno);
    
    alert(`Aluno ${aluno.name} registrado`);
}

register = () => {
    let student = {
        name: prompt("Digite seu nome"),
        firstNote: Number(prompt("Qual foi a sua primeira nota?")),
        secondNote: Number(prompt("Qual foi sua segunda nota?"))
    }
    return student
}

avarageNote = (firstNote, secondNote) => {
    return ((firstNote + secondNote)/2) >= 7 ? "Estudante conseguiu passar no concurso" : "Infelizmente não foi desta, tente o proximo concurso";
}

verifyStudentName = (studentName) => {
    for (let student of students) {
        if(student.name === studentName){
            let contest = avarageNote(student.firstNote, student.secondNote)
            
            alert(`
            Estudante ${student.name} encontrado.
            ${contest}                        
            `)


            return
        }
    }
    return alert("Estudante não registrado")
}

viewStudent = () => {
    let idStudent = prompt("Digite o nome do aluno");

    return verifyStudentName(idStudent)
}

/* menu */

let menu;
let students = []

while (menu != 3){
    menu = Number(prompt(`
    Olá, seja bem vindo(a)...
    Para adicionar um aluno digite [1]
    Para saber sobre um aluno digite [2]
    E para sair do programa digite [3]
    `));

    switch (menu){
        case 1:
            registerStudent();
            break;
        case 2:
            viewStudent()
            break;
        case 3:
            alert('Até logo!')
            break;
        default:
            alert('Opção inválida')
    }
}
