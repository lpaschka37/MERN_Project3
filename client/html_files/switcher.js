var counter = 0;
function optionSwitcher(corncat, conecart, cokeant, conecat, concat, labelconcat) {
  
   var corncat = document.getElementById(corncat);
   var conecart = document.getElementById(conecart);
   var cokeant = document.getElementById(cokeant);
   var conecat = document.getElementById(conecat);
   var concat = document.getElementById(concat);
   var labelconcat = document.getElementById(labelconcat);
  
   
   if(counter === 0)
   {
	corncat.classList.remove("hide"); 
	labelconcat.innerHTML = "Corncatnation";
	
   }
   if(counter === 1)
   {
	conecart.classList.remove("hide"); 
	corncat.classList.add("hide");
	labelconcat.innerHTML = "Concartnation";
   }
    if(counter === 2)
   {
	cokeant.classList.remove("hide"); 
	conecart.classList.add("hide");
	labelconcat.innerHTML = "Cokantnation";
   }
    if(counter === 3)
   {
	conecat.classList.remove("hide"); 
	cokeant.classList.add("hide");
	labelconcat.innerHTML = "Conecatnation";
   }
   if(counter === 4)
   {
	concat.classList.remove("hide"); 
	conecat.classList.add("hide");
	labelconcat.innerHTML = "Concatenation";
   }
   
  counter ++;
  if(counter === 5)
   {
	   counter = 0;
   }   
}

