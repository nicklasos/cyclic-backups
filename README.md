# MySQL backups

```
export AWS_ACCESS_KEY_ID="id"
export AWS_SECRET_ACCESS_KEY="secret"

node mysql \
--user="root" \
--password="secret" \
--db="dbname"  \
--file="backup/{host}/{year}/{week}/{month}/{day}/{hours}/{minutes}/{seconds}/{timestamp}.dump.sql.gz"
```

# Files backups

```
export AWS_ACCESS_KEY_ID="id"
export AWS_SECRET_ACCESS_KEY="secret"

node files \
--dir="/var/www/files/"
--file="backup/{host}/{year}/{week}/{month}/{day}/{hours}/{minutes}/{seconds}/{timestamp}.dump.tar.gz"
```

