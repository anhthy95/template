var sidebar = document.getElementById("sidebar");
if(screen.width < 400 px){
   sidebar.className= 'w3-sidebar w3-bar-block w3-black w3-large'; // += ' blueClass'; to keep existing classes
   sidebar.style.width=30; 
}
else if (screen.width < 700 px) {
   sidebar.className= 'w3-sidebar w3-bar-block w3-black w3-xlarge'; // += ' blueClass'; to keep existing classes
   sidebar.style.width=50; 
}