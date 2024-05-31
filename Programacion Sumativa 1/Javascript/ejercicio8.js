// X e Y no se  declaran porque se encuentran declaradas en el ejercicio anterior solo se modifica su valor

x = 15;
y = 2;
document.write(!( x == "15" || x === y ) && !(y !== 2 && x <= y));