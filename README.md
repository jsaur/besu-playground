#### Tab 1
`cd besu-quickstart`  
`./run.sh -c clique -p 32770`  

simple test that besu is running:  
`curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'  http://localhost:32770/jsonrpc`   

#### Tab 2
`cd pet-shop`   
`npm install`   
`truffle migrate --network quickstartWallet`   
`truffle test --network quickstartWallet`   
