let age = prompt("ingrese su edad");
//alert(age);
if(age >=1 && age % 1 == 0){

	if (age == 1 ) {
		document.write("toddler");
	}
	else if(age >= 2 && age <= 4 ){
		document.write("preschooler");
	}
	else if(age >= 5 && age <= 12 ){
		document.write("gradeschooler");
	}
	else if(age >= 13 && age <= 18 ){
		document.write("teenager");
	}
	else if(age >= 19 && age <= 30 ){
		document.write("young adult");
	}
	else if(age > 30 ){
		document.write("adult");
	}
}else{
	alert("Error: Ingrese una edad valida");
}