// Clear the calculator result
function clearResult() {
    document.getElementById('result').value = '';
  }
  
  // Delete the last character from the calculator result
  function deleteLast() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }
  
  // Append a value to the calculator result
  function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  // Calculate the result
  function calculateResult() {
    var result = document.getElementById('result').value;
    var calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
  }
  