# MySQL backups

```
export AWS_ACCESS_KEY_ID="id"
export AWS_SECRET_ACCESS_KEY="secret"

node mysql \
--config=config.cnf
--db="dbname"  \
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
--file="backup/{host}/{year}/{week}/{month}/{day}/{hours}/{minutes}/{seconds}/{timestamp}.dump.tar.gz"
```

