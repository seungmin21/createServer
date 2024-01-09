function surbur(callback) {
  let request = {
    insa : "Hello"
  }
  let response = {
    insa : "bye"
  };
  return callback(request, response);
}

surbur(function(request, response) {
  console.log(request.insa);
  console.log(response.insa);
})

const add = surbur((request, response) => {
  console.log(request.insa);
  console.log(response.insa);
})