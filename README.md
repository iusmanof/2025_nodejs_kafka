# 2025_nodejs_kafka


npm start

docker compose up 

curl http://localhost:8080/ping
curl -X POST http://localhost:8080/api/send   -H "Content-Type: application/json"   -d '{"message":"hello kafka"}'
