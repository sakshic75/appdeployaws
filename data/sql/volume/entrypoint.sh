#!/bin/bash
database=Temp
wait_time=15s
password=Passw@rd2022

# wait for SQL Server to come up
echo generate db will start in $wait_time...
sleep $wait_time
echo generate db...

# run the init script to create the DB and the tables in /table
/opt/mssql-tools/bin/sqlcmd -S 0.0.0.0 -U sa -P $password -i statements/init.sql

echo importing tables will start in $wait_time...
sleep $wait_time
echo importing data...

for entry in "statements/tables/*.sql"
do
  pwd
  echo executing $entry
  /opt/mssql-tools/bin/sqlcmd -S 0.0.0.0 -U sa -d $database -P $password -i $entry
done

#import the data from the csv files
for entry in "data/*.csv"
do
  # i.e: transform /data/MyTable.csv to MyTable
  shortname=$(echo $entry | cut -f 1 -d '.' | cut -f 2 -d '/')
  tableName=$database.dbo.$shortname
  echo importing $tableName from $entry
  /opt/mssql-tools/bin/bcp $tableName in $entry -c -t',' -F 2 -S 0.0.0.0 -U sa -P $password
done