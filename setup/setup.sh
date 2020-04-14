# https://variax.wordpress.com/2017/03/18/adding-https-to-the-raspberry-pi-apache-web-server/comment-page-1/
sudo mkdir -p /etc/ssl/localcerts
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/localcerts/robot.key -out /etc/ssl/localcerts/robot.crt
sudo openssl req -new -x509 -days 365 -nodes -out /etc/ssl/localcerts/robot2.pem -keyout /etc/ssl/localcerts/robot2.key
sudo ln -s /etc/apache2/mods-available/headers.load /etc/apache2/mods-enabled/headers.load
cd /etc/apache2/sites-available
sudo cp default-ssl.conf robot.conf
cd ../sites-enabled
sudo vi 000-default.conf

# DocumentRoot /var/www/html
RequestHeader set X-Forwarded-Proto "https"
RequestHeader set X-Forwarded-Port "443"
Redirect / https://192.168.0.50

sudo vi robot.conf

SSLCertificateFile      /etc/ssl/localcerts/server.crt
SSLCertificateKeyFile   /etc/ssl/localcerts/server.key

sudo ln -s /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-enabled/000-default-ssl.conf
sudo ln -s /etc/apache2/mods-available/proxy.load /etc/apache2/mods-enabled/proxy.load
sudo ln -s /etc/apache2/mods-available/proxy.conf /etc/apache2/mods-enabled/proxy.conf
sudo ln -s /etc/apache2/mods-available/proxy_http.load /etc/apache2/mods-enabled/proxy_http.load
sudo service apache2 restart