
<?php
    mysql_connect("db4free.net","root","");
    mysql_select_db("minorproject");
    session_start();
    if($_SESSION['adminData']=='' ||empty($_SESSION['adminData']) || !isset($_SESSION['adminData'])){
        $_SESSION['adminData']="DEMO";
        header("location:login.php");
    }
    if($_SESSION['adminData']=="DEMO"){
        header("location:login.php")    
    }

?>