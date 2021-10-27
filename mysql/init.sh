while ! mysqladmin ping -hlocalhost --silent; do
    sleep 1
done

mysql -uroot -ppassword foo -e "ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';"
mysql -uroot -ppassword foo -e "FLUSH PRIVILEGES;"
