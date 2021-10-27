FROM mysql
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=foo
COPY create_db/foo.sql /docker-entrypoint-initdb.d/
COPY . .
# CMD [ "bash","init.sh" ]
# ENTRYPOINT [ "bash","init.sh" ]


# $ docker run -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=foo  ms01-mysql
