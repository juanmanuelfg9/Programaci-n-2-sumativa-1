
//En este caso se aplica el mismo codigo del ejercicio 1 , la unica diferencia  es que no sera necesario declarar estas variables porque ya se encuentran declaradas en el ejercicio 1

//Se crea el objeto Date el cual proporciona la fecha y hora actual y se guarda en la variable date
 date = new Date();
 dia_del_mes = date.getDate();
 numero_mes = date.getMonth()+1;   //Se suma 1 porque los meses van del 0 al 11,esto lo va adaptar a un rango del 1 al 12
 year = date.getFullYear();
 mes;
 hora = date.getHours();
minuto = date.getMinutes();
numero_dia = date.getDay()+1; //Se suma 1 porque los meses van del 0 al 11,esto lo va adaptar a un rango del 1 al 12
dia;
//Se utiliza el numero de mes extraido del objeto date con la funcion getMonth() para transformarlo en el nombre del mes correspondiente 
switch(numero_mes){

    case 1:
        mes = "enero";
        break;
    case 2:
        mes = "febrero";
        break;
    case 3:
        mes = "marzo";
        break;
    case 4:
        mes = "abril";
        break;
    case 5:
         mes = "mayo";
        break;
    case 6:
         mes = "junio";
        break;
    case 7:
        mes = "julio";
            break;
    case 8:
        mes = "agosto";
        break;
    case 9:
        mes = "septiembre";
        break;
    case 10:
        mes = "octubre";
        break;
    case 11:
        mes = "noviembre";
        break;
    case 12:
        mes = "diciembre";
        break;
    default:
        console.log('ERROR');
    }
  //Se utiliza el numero del dia de la semana gracias al objeto date usandon la funcion getDay() para transformarlo en el nombre del dia de la semana 
switch (numero_dia) {
    case 1:
        dia = "Domingo";
        break;
    case 2:
        dia = "Lunes";
        break;
    case 3:
        dia = "Martes";
        break;
    case 4:
         dia = "Miercoles";
        break;
    case 5:
        dia = "Jueves";
        break;
    case 6:
        dia = "Viernes";
        break;
    case 7:
        dia = "Sabado";
        break;

    default:
        console.log(error);
        break;
}
//Se envia el mensaje 
document.write('Bienvenido a Juans web <br>');
document.write('Fecha: '+ dia +" "+dia_del_mes + " de "+mes+" de "+year+"<br>");
document.write('Hora: '+hora+":"+minuto);