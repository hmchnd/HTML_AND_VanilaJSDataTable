function buildTable(data){
var table = document.getElementById("mytable");
 var tr;
for(var i=0; i<data.length;i++){
 tr = '<tr>';
        table.innerHTML+=tr.concat("<td>" + data[i].ProductID + "</td>")
		.concat("<td>" + data[i].ProductName + "</td>")
		.concat("<td>" + data[i].UnitPrice + "</td>")
		.concat("<td>" + data[i].ReorderLevel + "</td>")
		.concat("<td>" + data[i].UnitsInStock + "</td>")
		.concat("<td>" + data[i].UnitsOnOrder + "</td>")
		.concat('</tr>');
        
       	
}

}


let xhr = new XMLHttpRequest();

xhr.open('GET', 
'https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=JSON'
);

xhr.responseType = 'json';

xhr.send();



xhr.onload = function () {
  // Begin accessing JSON data here
  var data = this.response.d.results;

  if (xhr.status >= 200 && xhr.status < 400) {
  buildTable(data);
   
  } else {
    console.log('error')
  }
}


