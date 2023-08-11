<?php

if(isset($_POST['contact'])){
    if(
        strlen($_POST['name']) >=1 &&
        strlen($_POST['email']) >=1 &&
        strlen($_POST['discord']) >=1 &&
        strlen($_POST['vid']) >=1 &&
        strlen($_POST['message']) >=1 
        ){

            $name=trim($_POST['name']);
            $email=trim($_POST['email']);
            $discord=trim($_POST['discord']);
            $vid=trim($_POST['vid']);
            $mensaje=trim($_POST['message']);
            $fecha=date("d/m/y");

            /*
            $consulta="INSERT INTO datos(nombre,email,direccion, telefono, mensaje, fecha)
            VALUES('$name','$email','$direction','$phone','$mensaje','$fecha')";
            */

            $message="Este mensaje fue enviado por " . $name . "\r\n";
            $message .= "Su e-mail es: " . $email . "\r\n";
            $message .= "Su VID es: " . $vid . "\r\n";
            $message .= "Su discord es: " . $discord . "\r\n";
            $message .= "Enviado el " . $fecha . "\r\n";
            $message .= "-----------------------------------------------------\r\n";
            $message .= "Mensaje: " . $mensaje . "\r\n";
            

            $to= 'rrhh@airprimaryschool.com';
            $subject= 'Nueva solicitud de registro';
            $headers = "MIME-Version: 1.0 \r\n";
            $headers .= "Content-type: text/plain;
            charset=utf-8\r\n";
            $headers .= "From: <$email> \r\n";
            $headers .= "Cc: direccion@airprimaryschool.com \r\n";

            $resultado=mail($to,$subject,$message,$headers);
            if($resultado){
                ?>
                    <h3 class="success">Tu solicitud de registro ha sido enviada</h3>
                <?php
                
            }else{
                ?>
                    <h3 class="error">Ocurrió un error</h3>
                <?php
            }

            /*
            $resultado=@mysqli_query($conex,$consulta);
            if($resultado){
                ?>
                    <h3 class="success">Tu registro se ha completado</h3>
                <?php
                
            }else{
                ?>
                    <h3 class="error">Ocurrió un error</h3>
                <?php
            }
            */

    } else {
        ?>
        <h3 class="error">Rellena todos los campos</h3>
    <?php
    }
}

?>