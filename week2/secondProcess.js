function logResponseBody(data){
    console.log(data);
}

function callBody(result){
    result.json().then(logResponseBody);
}

var sendObj = {
    method:"GET"
}

fetch("http://localhost:4000/handleSum?counter=10", sendObj).then(callBody);