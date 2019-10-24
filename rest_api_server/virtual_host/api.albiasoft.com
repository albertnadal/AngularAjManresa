#NameVirtualHost 35.230.46.252

<VirtualHost *:80>
  ProxyPreserveHost On
  ProxyRequests Off
  ServerName api.albiasoft.com
  ProxyPass / http://localhost:2015/
  ProxyPassReverse / http://localhost:2015/

  LogLevel warn
  ErrorLog  /var/log/httpd/api.albiasoft.com/error.log
  CustomLog /var/log/httpd/api.albiasoft.com/access.log combined
</VirtualHost>

