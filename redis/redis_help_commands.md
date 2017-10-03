# Redis commands
watch -n1 "redis-cli keys spring*"

watch -n1 "redis-cli INFO"

redis-cli DEBUG sleep 60

redis-cli MONITOR

# Redis Sentinel commands

watch -n1 "redis-cli  -p 26379 sentinel masters"

watch -n1 "redis-cli  -p 26379 sentinel slaves redismaster"

watch -n1 "redis-cli  -p 26379 sentinel  get-master-addr-by-name redismaster"
