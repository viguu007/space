function cha()
	{
		k=10;
		var n=document.getElementById("sub").value;
		switch(n)
			{
				case "1":	k="Rs 7200";
							document.getElementById("r1").style.backgroundColor="#90f542";
							document.getElementById("r2").style.backgroundColor="#f5f5dc";
							document.getElementById("r3").style.backgroundColor="#f5f5dc";
							document.getElementById("r4").style.backgroundColor="#f5f5dc";
							break;
				case "2":	k="Rs 3900";
							document.getElementById("r1").style.backgroundColor="#f5f5dc";
							document.getElementById("r2").style.backgroundColor="#90f542";
							document.getElementById("r3").style.backgroundColor="#f5f5dc";
							document.getElementById("r4").style.backgroundColor="#f5f5dc";
							break;
				case "3":	k="Rs 2100";
							document.getElementById("r1").style.backgroundColor="#f5f5dc";
							document.getElementById("r2").style.backgroundColor="#f5f5dc";
							document.getElementById("r3").style.backgroundColor="#90f542";
							document.getElementById("r4").style.backgroundColor="#f5f5dc";
							break;
				case "4":	k="Rs 750";
							document.getElementById("r1").style.backgroundColor="#f5f5dc";
							document.getElementById("r2").style.backgroundColor="#f5f5dc";
							document.getElementById("r3").style.backgroundColor="#f5f5dc";
							document.getElementById("r4").style.backgroundColor="#90f542";
							break;
				default:k="CHOOSE A SUBSCRIPTION";
			}
		document.getElementById("price").innerHTML=k;
	}
function ct()
	{
		var n=document.getElementById("ctry").value;
		var y;
		switch(n)
			{
				case "ind":y=" +91 "; break;
				case "qat":y=" +974 "; break;
				case "uae":y=" +971 "; break;
				case "usa":y=" +1 "; break;
				case "uk": y=" +44 "; break;
				case "aus":y=" +61 "; break;
				case "rus":y=" +7 "; break;
				case "bah":y=" +973 "; break;
 			}
		document.getElementById("cd").innerHTML=y;
	}
function checker()
	{
		var k=document.getElementById("phn").value;
		k=k.length;
		var n=document.getElementById("ctry").value;
		var y=0;
		switch(n)
			{
				case "ind":if(k!=10)
							y=-1;
						break;
				case "qat":if(k!=8)
							y=-1;
						break;
				case "uae":if(k!=8)
							y=-1;
						break;
				case "usa":if(k!=10)
							y=-1;
						break;
				case "uk":if(k!=10)
							y=-1;
						break;
				case "aus":if(k!=10)
							y=-1;
						break;
				case "rus":if(k!=10)
							y=-1;
						break;
				case "bah":if(k!=8)
							y=-1;
						break;
 			}
		if(y!=0)
			alert("ENTER VALID PHONE NUMBER");
		else
		{
			document.write("Successfully paid <br><a href=\"firstpage.html\" target=\"_self\">Redirect me....</a>");
		}
	}