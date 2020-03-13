// Add your code here

// function submitData(name, email) {
//   let formData = {
//     name,
//     email
//   };

//   // method: "POST" is missing from the object below
//   let configObj = {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify(formData)
//   };

//   return fetch("http://localhost:3000/users", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });
// }

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }