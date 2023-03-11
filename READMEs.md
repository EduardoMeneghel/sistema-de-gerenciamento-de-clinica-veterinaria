<h1>Sistema de Gerenciamento de Clínica Veterinária</h1>

<b>Este é um projeto de TCC que visa desenvolver um sistema de gerenciamento para clínicas veterinárias.</b>

<b>Objetivos:</b><br>
O objetivo deste sistema é facilitar o gerenciamento de uma clínica veterinária, permitindo o controle de informações como cadastro de animais e usuários, histórico de consultas, próximas vacinas, cadastro de clientes e controle de estoque de medicamentos.

<b>Começar:</b><br>

Atualizar aplicativos
sudo apt-get update

Instalando Php
sudo apt -y install php8.2
sudo apt-get install php8.2-mbstring
sudo apt-get install php8.2-dom

Verificando se o PHP foi instalado 
php -v

Instalando composer
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

Verificando se o Composer foi instalado
php composer.phar -v

Tornando composer como variavel global
sudo mv composer.phar /usr/local/bin/composer
//Agora o comando do composer é
composer -v

Instalando Laravel
composer create-project laravel/laravel example-app
//caso der erro Your requirements could not be resolved to an installable set of packages.
composer install --ignore-platform-reqs

Iniciar o LocalHost
php -S localhost:8080




