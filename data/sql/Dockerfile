FROM mcr.microsoft.com/mssql/server:2022-latest

COPY . .

RUN sh -c 'chmod +x ./entrypoint.sh; ./entrypoint.sh;'

CMD sh -c '/opt/mssql/bin/sqlservr;'