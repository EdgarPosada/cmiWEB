function showUser(id,cant,pUnitario,con,importe) {
  if (id=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
  
  //Se valida qu accion se por medio del usuario
  if(id == "agrega")
  {
      var accion = 1;
      xmlhttp.open("GET","getuser.php?accion="+accion+"&"+"cant="+cant+"&"+"pu="+pUnitario+"&"+"con="+con+"&"+"imp="+importe,true);
      xmlhttp.send();
      
  }
  
  if(id == 'elimina')
  {
      var accion = 2;
      xmlhttp.open("GET","getuser.php?accion="+accion+"&"+"cant="+cant+"&"+"pu="+pUnitario+"&"+"con="+con+"&"+"imp="+importe,true);
      xmlhttp.send();
  }
  
}