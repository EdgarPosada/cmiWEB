<?php
$accion = intval($_GET['accion']);



$con = mysqli_connect('localhost','root','root','cmiweb');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

//Se vlaida que accion se recibe por GET
//Si es igual a 1 se agrega
if($accion == 1)
{
    $cant = $_GET['cant'];
    $pu = $_GET['pu'];
    $concepto = $_GET['con'];
    $imp = $_GET['imp'];

    $sql = "INSERT INTO conceptos (conCantidad, conPunitario, conConcepto, conImporte) VALUES('$cant', '$pu', '$concepto', '$imp')";
    mysqli_query($con, $sql);
}
//Si es igual a 2 se elimina el concepto seleccionado
if($accion == 2)
{
    
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM conceptos";
$result = mysqli_query($con,$sql);

echo "<table border='1'>
<tr>
<th>Cantidad</th>
<th>Concepto</th>
<th>Precio Unitario</th>
<th>Importe</th>
<th>Accion</th>
</tr>";

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['conCantidad'] . "</td>";
  echo "<td>" . $row['conConcepto'] . "</td>";
  echo "<td>" . $row['conPunitario'] . "</td>";
  echo "<td>" . $row['conImporte'] . "</td>";
  echo "<td> <img src="."assets/img/tacha.png"." title="."Eliminar Concepto"." id="."elimina"." onclick="."showUser(this.id,cantidad.value,pUnitario.value,concepto.value,importe.value)"." /> </td>";
  echo "</tr>";
}
echo "</table>";


mysqli_close($con);
?>