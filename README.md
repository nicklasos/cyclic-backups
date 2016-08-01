# mysql2s3
Mysql cyclic backups to S3

```
export AWS_ACCESS_KEY_ID="id"
export AWS_SECRET_ACCESS_KEY="secret"

node index \
--user="root" \
--password="secret" \
--db="dbname"  \
--file="backup/{host}/{year}/{week}/{month}/{day}/{hours}/{minutes}/{seconds}/{timestamp}.dump.sql.gz"
```