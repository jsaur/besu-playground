
docker-compose up --scale node=3
docker exec -it pet-shop npm run migrate
docker exec -it pet-shop npm run test



#### Tab 1  
`docker network create --driver=bridge besu-network` 
`cd besu-quickstart`  
`./run.sh -c clique -p 32770`  

simple test that besu is running:  
`curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'  http://localhost:32770/jsonrpc`   

#### Tab 2  
`cd pet-shop`  
`docker-compose up`  
`docker exec -it pet-shop npm run migrate`  
`docker exec -it pet-shop npm run test`  
  
Note: truffle consumes a lot of memory so needed to increase the Docker memory to 4GB 
