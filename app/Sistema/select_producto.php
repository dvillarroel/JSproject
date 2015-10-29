<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

</head>
<link href="hoja_de_estilo.css" type="text/css" rel="stylesheet">
<body background="body2.jpg">
<p>&nbsp;</p>

<?php
	$cliente=$_GET['id_cliente'];
	$pedido=$_GET['id_pedido'];
	
	echo'<form method="post" action="buscar_cli_pedido.php?id_cliente='.$cliente.'&id_pedido='.$pedido.'">';
	
?>

  <br>
   <div align="center"><font color="#330000" size="4" class="titl">BUSCAR PRODUCTO</font><br>
   
  </div>


<table width="35%" border="1" align="center">
  <tr> 
    <td height="34" colspan="2"><div align="center">BUSCAR PRODUCTO</div></td>
  </tr>
  <tr> 
    <td height="44"><select name="menu1" class="Seleccion" >
        <option selected>Codigo de producto</option>
        <option>Nombre de Producto</option>
		<option>Marca</option>
		<option>Industria</option>
        <option>Observaciones</option>
      </select></td>
    <td><input type="text" name="buscar" class="Formulario"></td>
  </tr>
  <tr> 
    <td colspan="2"><div align="center">
        <input name="image"  type="image" onMouseOver= src="images/bu1.gif" onMouseMove= src="images/bu1.gif" onMouseOut=src="images/bu2.gif" value="" SRC="images/bu2.gif" align="middle">
      </div></td>
  </tr>
</table>
</form>
<p>&nbsp;</p>
<p align="center">
<?php echo "<a href=buscar_cliente_pedido2.php?menu1=1&buscar=".$cliente.">VOLVER ATRAS</a></p>"; ?>
<p align="center"><a href="principal_target.php">VOLVER A LA PAGINA PRINCIPAL</a></p>
<p>&nbsp;</p>
</body>
</html>
