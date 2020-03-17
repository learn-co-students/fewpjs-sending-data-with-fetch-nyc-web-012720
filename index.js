// // Add your code here
// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle"
//     })
//   });

function submitData(name, email) {
return fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        "content-type": "application/json",
        "accept": "application/json"
    },
    body: JSON.stringify({ name, email })
    })
    .then( resp => resp.json() )
    .then( obj => {
       document.body.innerHTML =
       obj.id
    })
    .catch(function(error) {
        alert("Unauthorized Access");
        console.log(error.message);
        document.body.innerHTML = error.message
      });
}



// return fetch("http://localhost:3000/dogs", configObj)
//    .then(resp => resp.json())
//    .then(obj => console.log(obj))
   

