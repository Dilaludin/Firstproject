
var list1 =[];
var list2 =[];
var list3 =[];
var list4 =[];
var list5 =[];
var list6 =[];
var list7 =[];
var list8 =[];
var list9 =[];



var n = 1;
var x = 0;

function AddRow(){
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x]=document.getElementById('fname').value;
    list2[x]=document.getElementById('Age').value;
    list3[x]=document.getElementById('Email').value;
    list4[x]=document.getElementById('Phone').value;
    list5[x]=document.getElementById('State').value;
    list6[x]=document.getElementById('District').value;
    list7[x]=document.getElementById('Address').value;
    list8[x]=document.getElementById('Gender').value;
    list9[x]=document.getElementById('Blood_group').value;


    var cel1=NewRow.insertCell(0);
    var cel2=NewRow.insertCell(1);
    var cel3=NewRow.insertCell(2);
    var cel4=NewRow.insertCell(3);
    var cel5=NewRow.insertCell(4);
    var cel6=NewRow.insertCell(5);
    var cel7=NewRow.insertCell(6);
    var cel8=NewRow.insertCell(7);
    var cel9=NewRow.insertCell(8);


    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];
    cel7.innerHTML = list7[x];
    cel8.innerHTML = list8[x];
    cel9.innerHTML = list9[x];

    n++;
    x++;  
}
function bloodfunction(){
    var dropdown=document.getElementById("Blood_group")
    var selectedValue=dropdown.value;
    var table=document.getElementById("show")
    var rows=table.getElementsByTagName('tr')
    for(var i=1;i<rows.length;i++){
        var row=rows[i];
        var blood= row.cells[1].textContent.trim();

        if(selectedValue==="A+" || blood===selectedValue )
        {
            row.style.display="";

        }
        else{
            row.style.display="none";
        }
                 
    }
}