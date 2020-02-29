curl "http://localhost:3000/profile"
curl -H "Content-Type: application/json" -X POST -d '{"first_name":"Azat","last_name":"kosh","email":"azat@gmail.com"}' "http://localhost:3000/profile" 
sleep 1
curl -H "Content-Type: application/json" -X PUT -d '{"first_name":"Azaaat","last_name":"kosssh","email":"azat@gmail.com"}' "http://localhost:3000/profile" 
sleep 1
curl "http://localhost:3000/profile"
curl -X DELETE "http://localhost:3000/profile"

# for creating .sh files: ctrl+shift+p then search "change End of line sequence" and choose LF for linux