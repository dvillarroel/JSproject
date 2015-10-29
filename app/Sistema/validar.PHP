<?php

require_once("manejomysql.php");
$redir="index.php";
$redir2="principal.php";
//session_register('motos');

conectar_bd();

if (!empty($_POST['text1']) )
{
	if( !empty($_POST['text2'])) 
	{

		$usuario_consulta = mysql_query("SELECT cod_usuario, login, pass FROM usuario WHERE login='".$_POST['text1']."'" ) or die(header ("Location:  $redir?error_login=1"));
		


		if (mysql_num_rows($usuario_consulta) != 0)
		{
			$usuario_datos = mysql_fetch_array($usuario_consulta);
		}
		
							
			if( $_POST['text1'] ==$usuario_datos['login']  )	
			{
					


				 if($_POST['text2'] == $usuario_datos['pass']  )
		 		{
					mysql_query("UPDATE session SET cod_user=".$usuario_datos['cod_usuario']);
					header ("Location:$redir2");
					exit;
				
			 	}
		 		else
		 		{
				header ("Location:$redir?error_login=4");
				exit;
		 
			 	}	
	
			}	
			else
			{
	
				header ("Location:$redir?error_login=3");
				exit;
		
			}
		}
	else
	{

		header ("Location:$redir?error_login=2");
		exit;
	}
}
	
else
{
		header ("Location:$redir?error_login=1");
		exit;
}		
	
?>