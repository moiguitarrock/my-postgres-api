FROM postgres:9.6

LABEL maintainer "Jobbatical"

ENV POSTGRES_DB assignment

USER postgres

COPY structure.sql /docker-entrypoint-initdb.d/01-structure.sql
COPY data.sql /docker-entrypoint-initdb.d/02-data.sql

# docker build -t eg_postgresql .
# docker run --rm -P --name pg_test eg_postgresql