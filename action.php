<?php
 $path = 'data.txt';
 if (isset($_POST['f_name']) && isset($_POST['l_name'])) {
    $fh = fopen($path,"a+");
    $string = $_POST['f_name'].' - '.$_POST['l_name'];
    fwrite($fh,$string); // Write information to the file
    fclose($fh); // Close the file
 }
?>