# mysql2s3
Mysql cyclic backups to S3

```
node index \
--user="root" \
--password="secret" \
--db="dbname"  \
--file="backup/{host}/{year}/{week}/{month}/{day}/{hours}/{minutes}/{seconds}/{timestamp}.dump.sql.gz"
```