function afunction(){
			window.alert("Save Net Neutrality!");
			document.body.style.backgroundColor = 'red';
			document.getElementById("abutton").disabled = true;
			for(i=0;i<=1;i++){
			document.querySelectorAll('h4')[i].textContent = 'Loading...';
			}
			for(i=0;i<=1;i++){
			document.querySelectorAll('img')[i].src = 'http://media.giphy.com/media/JBeu9q9LC1Kve/giphy.gif';
			}
			for(i=0;i<=1;i++){
			document.querySelectorAll('p')[i].style.backgroundColor = 'black';
			}
			for(i=0;i<=document.querySelectorAll('a').length;i++){
			document.querySelectorAll('a')[i].href = '';
			}
		}
document.getElementById("abutton").addEventListener("click", afunction);