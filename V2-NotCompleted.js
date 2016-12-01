var x = document.querySelectorAll(".child");
for(var i = 0; i < x.length ; ++i){

if(x[i].parentElement.parentElement.parentElement.getAttribute("class") == "commentarea"){
x[i].style.backgroundColor = "#ededed";

if(x[i].children[0] != null){
	if(x[i].children[0].children != null){

	var count = 0;
for(var t = 0; t < x[i].children[0].children.length; t++){
				var allch = x[i].children[0].children[t].querySelectorAll("*");
				for(var kk = 0; allch.length > kk; kk++){
								if(allch[kk] != null){

				if(allch[kk].hasAttribute("data-type")){
					if(allch[kk].getAttribute("data-type") == "comment"){
					count++;
					console.log("count" + count);
				if(count % 2 == 0){
						allch[kk].style.backgroundColor = "#ededed";
					}else{
					allch[kk].style.backgroundColor = "#c6dcff";
					
					}
					}else{
			count--;
					}}}

				}
			
			}
				
		}
	}
	}
}



