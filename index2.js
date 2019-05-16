/*var projectArray = [];
window.onload = init;

function addProject(){

        var project = {
        projectName:document.getElementById("projectName").value,
        ProjectDescription:document.getElementById("projectDescription").value,
        completionDate:document.getElementById("completionDate").value
    };

    if(project.projectName!==""&&project.projectDescription!==""&&project.completionDate!==""){
        projectArray = JSON.parse(localStorage.getItem("project")) || [];
        projectArray.push(project);
        localStorage.setItem("project",JSON.stringify(projectArray));
        projectArray = localStorage.getItem("project");
        projectArray = JSON.parse(projectArray);
        
        for(i=0; i < projectArray.length; i++){
            var row = submitted.insertRow(1);

            var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1)
			var cell3 = row.insertCell(2)

            cell1.innerHTML = projectArray[i].projectName;
			cell2.innerHTML = projectArray[i].projectDescription;
			cell3.innerHTML = projectArray[i].completionDate;
			

        }
    
        window.location.reload(true);

    }

} 

function createSchedule(project){
    var table = document.getElementById("submitted");
    var row = document.createElement("tr");

    var cell1 = document.createElement("td")
	var cell2 = document.createElement("td")
	var cell3 = document.createElement("td")

    cell1.innerHTML = project.projectName;
	cell2.innerHTML = project.projectDescription;
	cell3.innerHTML = project.completionDate;
	

    row.appendChild(cell1);
	row.appendChild(cell2);
	row.appendChild(cell3);

    table.appendChild(row);

    //document.querySelector('.welcome #title').innerHTML=project.projectName+" 's ";

   // document.querySelector('.welcome #title').innerHTML=" Successfully submitted ";

    //document.querySelector('.welcome #title').style.color="red";

    //document.querySelector('.welcome #title').style.fontFamily= "cursive";
}

//function addProject(){
  //  localStorage.setItem(project);
    //window.location.reload(true);
//}

function clearForm(){
    localStorage.clear();
    window.location.reload(true);
}



function getprojectArray(){
    return JSON.parse(localStorage.getItem("project"));
}

function init(){
    var projectArray = getprojectArray();

    for(i=0; i < projectArray.length; i++){
        var project = projectArray[i];
        createSchedule(project);
    }
}*/






var workArray = [];
window.onload = init;

function addWork(){

        var work = {
        organizationName:document.getElementById("organizationName").value,
        workDescription:document.getElementById("workDescription").value,
        startingWork:document.getElementById("startingWork").value,
		completionWork:document.getElementById("completionWork").value,
    };

    if(work.organizationName!==""&&work.workDescription!==""&&work.startingWork!==""&&work.completionWork!==""){
        workArray = JSON.parse(localStorage.getItem("work")) || [];
        workArray.push(work);
        localStorage.setItem("work",JSON.stringify(workArray));
        workArray = localStorage.getItem("work");
        workArray = JSON.parse(workArray);
        
        for(i=0; i < workArray.length; i++){
            var row = saved.insertRow(1);

            var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);

            cell1.innerHTML = workArray[i].organizationName;
			cell2.innerHTML = workArray[i].workDescription;
			cell3.innerHTML = workArray[i].startingWork;
			cell4.innerHTML = workArray[i].completionWork;

        } //for-loop end
    
        window.location.reload(true);

    }//end if

}//end addWork 

function createSchedule(work){
    var table = document.getElementById("saved");
    var row = document.createElement("tr");

    var cell1 = document.createElement("td");
	var cell2 = document.createElement("td");
	var cell3 = document.createElement("td");
	var cell4 = document.createElement("td");
	
	
    cell1.innerHTML = work.organizationName;
	cell2.innerHTML = work.workDescription;
	cell3.innerHTML = work.startingWork;
	cell4.innerHTML = work.completionWork;

    row.appendChild(cell1);
	row.appendChild(cell2);
	row.appendChild(cell3);
	row.appendChild(cell4);

    table.appendChild(row);
}


function clearForm(){
    localStorage.clear();
    window.location.reload(true);
}



function getworkArray(){
    return JSON.parse(localStorage.getItem("work"));
}

function init(){
    var workArray = getworkArray();

    for(i=0; i < workArray.length; i++){
        var work = workArray[i];
        createSchedule(work);
    }
}//end map