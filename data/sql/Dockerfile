FROM mcr.microsoft.com/mssql/server:2022-latest

COPY . .

CMD sh -c ' chmod +x ./entrypoint.sh; ./entrypoint.sh & /opt/mssql/bin/sqlservr;'