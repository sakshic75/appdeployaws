FROM microsoft/mssql-server-linux:latest

COPY . .

CMD sh -c ' chmod +x ./entrypoint.sh; ./entrypoint.sh & /opt/mssql/bin/sqlservr;'