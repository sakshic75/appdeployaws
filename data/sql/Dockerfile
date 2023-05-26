FROM mcr.microsoft.com/mssql/server:2022-latest
ENV ACCEPT_EULA=Y
ENV MSSQL_SA_PASSWORD=Passw@rd2022


COPY ./volume .

RUN sh -c 'chmod +x ./entrypoint.sh; ./entrypoint.sh;'


CMD sh -c '/opt/mssql/bin/sqlservr;'