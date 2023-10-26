document.getElementById("addBtn").addEventListener("click",addBtn)
let arrayStd=[]

function addBtn(){
    let stdName=document.querySelector(".stdName").value
    let stdSureName=document.querySelector(".stdSureName").value
    let student_container=document.querySelector(".StudentWrapper")
    console.log(stdName, stdSureName);
    let StdObj={
        stdName:stdName,
        stdSureNames:stdSureName
    }
    arrayStd.push(StdObj)
    let studentList=document.createElement("li")
    studentList.innerHTML=` Имя студента: ${stdName}, Фамилия студента:${stdSureName} `
    student_container.appendChild(studentList)
    let button= document.createElement("button")
    button.innerHTML="Удалить"
    button.onclick = function() {
        studentList.remove();
    };
    studentList.appendChild(button)
}
