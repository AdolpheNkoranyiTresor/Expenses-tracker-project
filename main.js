var entryButton = document.getElementById('inputButton')
const tbodyEl = document.querySelector("tbody");
var row = 1;

//click button event
entryButton.addEventListener('click', tableDisplay);

//input value and displaying information
function tableDisplay(e) {
  e.preventDefault()
  var name = document.getElementById('inputName').value;
  var amount = document.getElementById('inputAmount').value;
  var date = document.getElementById('inputDate').value;
  var remarks = document.getElementById('inputRemarks').value;
  
  document.getElementById('inputName').value = '';
  document.getElementById('inputAmount').value = '';
  document.getElementById('inputDate').value = '';
  document.getElementById('inputRemarks').value = '';
  
  if (!name || !amount || !date || !remarks) {
    alert("Please fill all the blanks")
    return;
  }

  name.value = " ";
  amount.value = " ";
  date.value = " ";
  remarks.value = " ";
  
  var table = document.getElementById('displayTable');

  var newRow = table.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = name
  cell2.innerHTML = date
  cell3.innerHTML = amount
  cell4.innerHTML = remarks
  
  total()


  row++;
}

function total(){
    var table = document.getElementById('displayTable');
    let total = 0
    for(let i = 1; i<table.rows.length; i++){
        total+=Number(table.rows[i].cells[2].innerText)
    }
    const totalInput = document.getElementById('total')
    totalInput.value=total

}