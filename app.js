let age = prompt("ingrese su edad");
//alert(age);
if(age >=1 && age % 1 == 0){

	if (age >= 1 && age <=3 ) {
		document.write("toddler");
	}
	else if(age > 3 && age <= 5 ){
		document.write("preschooler");
	}
	else if(age > 5 && age <= 12 ){
		document.write("gradeschooler");
	}
	else if(age > 12 && age <= 18 ){
		document.write("teenager");
	}
	else if(age > 18 && age <= 21 ){
		document.write("young adult");
	}
	else if(age > 21 ){
		document.write("adult");
	}
}else{
	alert("Error: Ingrese una edad valida");
}