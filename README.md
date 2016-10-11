# MySQL backups

```
export AWS_ACCESS_KEY_ID="id"
export AWS_SECRET_ACCESS_KEY="secret"

node mysql \
--config=config.cnf
--db="dbname"  \
--bucket="aws-backup-bucket"
--file="backup/{host}/{year}/{week}/{month}/{day}/{hours}/{minutes}/{seconds}/{timestamp}.dump.sql.gz"
```

###config.cnf
```ini
[client]
user=root
password=password
host=localhost
```

# Files backups

```
export AWS_ACCESS_KEY_ID="id"
export AWS_SECRET_ACCESS_KEY="secret"

node files \
--dir="/var/www/files/"
--bucket="aws-backup-bucket"
--file="backup/{host}/{year}/{week}/{month}/{day}/{hours}/{minutes}/{seconds}/{timestamp}.dump.tar.gz"
```

