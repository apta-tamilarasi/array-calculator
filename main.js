var a=parseInt(prompt("Enter the first value"));
var operator=prompt("Enter the operator");
var b=parseInt(prompt("Enter the second value"));
var c;

document.write(a+" "+operator+" "+b+"<br><br>");
switch(operator){
	case"+":c=a+b;
		document.write("Addition = "+c);
		break;
	case"-":c=a-b;
		document.write("Subraction = "+c);
		break;
	case"*":c=a*b;
		document.write("Multiplication ="+c);
		break;
	case"/":c=a/b;
		document.write("Division = "+c);
		break;
}