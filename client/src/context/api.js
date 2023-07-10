import axios from "axios";

const data = JSON.stringify({
  jsonrpc: "2.0",
  id: 1,
  method: "eth_blockNumber",
  params: [],
});

const config = {
  method: "post",
  url: "https://app.zeeve.io/shared-api/poly/b12fce9e7a4515d22120b5c3f109dca5b9e0baff3d6e1e78/",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
