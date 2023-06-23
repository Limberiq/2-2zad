function displayArray(){
    var myArray = [1, 2, 3, 4, 5];
  
    var fifthElement = myArray[4];
  
    myArray[4] = 5;
  
    document.getElementById('result').innerHTML = 
    "Пятый элемент массива: " + fifthElement + "<br>" +
    "Массив с измененным пятым элементом: " + myArray;
}