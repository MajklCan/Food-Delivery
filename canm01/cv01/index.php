<!DOCTYPE html>
<html>
<body>

<?php
$image = "https://media-exp1.licdn.com/dms/image/C4E03AQEWpHMl2APNug/profile-displayphoto-shrink_100_100/0/1623871719426?e=1648684800&v=beta&t=zF6rnoCWAGu1mmyUv545CZJ03ApI75jvcm1QjVpn5Qo";
$name = "Michal Caninec";
$firm = "mcdev";
$job = "SW Architekt";
$school = "Praha VŠE fis";
$birthdate = "";
$phone = "722010950";
$address = "Fixtivni 24 420 69";
$webpage = "michal-caninec.cz";
$isAvailable = "Ano";
$mail = "kontakt@michal-caninec.cz";


$birthDate = "10/10/2000";
  //kod z stackoverflow
$birthDate = explode("/", $birthDate);

$age = (date("md", date("U", mktime(0, 0, 0, $birthDate[0], $birthDate[1], $birthDate[2]))) > date("md")
    ? ((date("Y") - $birthDate[2]) - 1)
    : (date("Y") - $birthDate[2]));

/*
Avatar nebo Logo firmy
Příjmení
Jméno
Věk (výpočet z datumu narození)
Povolání nebo Pozice
Název firmy
Ulice
Číslo popisné
Číslo orientační
Město / Městská část
Telefon
Osobní e-mail / firemní e-mail
Webová stránka
Zda jste dostupný k pracovním nabídkám 
*/
?>



<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link rel="stylesheet" href="./style.css">

<div class="container">
  <div class="card column">
      <div class="card-header">    
        <img class="card-image" src="<?php
        echo $image;
        ?>" alt="borja-avatar">
      </div>
      <div class="card-body">
        <h1 class="card-body_name"><?php
        echo $name;
        ?>
        </h1>
        <h2 class="card-body_job"><?php
        echo $job;
        ?></h2>
        <p class="card-body_contact"><i class="fa fa-mobile" aria-hidden="true"></i> <?php
        echo $school;
        ?></p>
        <p class="card-body_contact"><i class="fa fa-info" aria-hidden="true"></i>Adresa: <?php
        echo $address;
        ?></p>
        <p class="card-body_contact">Je aktuálně dostupný pracovním nabídkám:<?php
        echo $isAvailable;
        ?></p>
        <p class="card-body_contact"><i class="fa fa-mail" aria-hidden="true"></i> <?php
        echo $mail;
        ?></p>
        <p class="card-body_contact"><i class="fa fa-info" aria-hidden="true"></i><a href="http://www.<?php
        echo $webpage;
        ?>"> <?php
        echo $webpage;
        ?></a></p>
        <p class="card-body_contact"><i class="fa fa-info" aria-hidden="true"></i>Věk: <?php
        echo $age;
        ?></p>
      </div>
      
      </div>
    </div>
  </div>
</div>

</body>
</html>