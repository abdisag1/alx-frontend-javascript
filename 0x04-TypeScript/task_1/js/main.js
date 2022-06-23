var stud1 = {
    firstName: "Abdisa",
    lastName: "Gemechu",
    age: 25,
    location: "Addis ababa"
};
var stud2 = {
    firstName: "tihtina",
    lastName: 'sisay',
    age: 25,
    location: "Addis ababa"
};
var studentsList = [stud1, stud2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "lightgray";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "2px solid white";
    locationCell.style.border = "2px solid white";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
