console.log("feeling better")

// fetch("http://localhost:3000/dogs", {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// });

// let url = "http://localhost:3000/dogs"

// let formData = {
//     dogName: "Hero",
//     dogBreed: "Golden Retriever"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch(url, configObj)
// .then(resp => resp.json())
// .then(json => console.log(json))
// .catch(err => {
//     alert("Bad things! Ragnarők!");
//     console.log(err.message)
// })

let body = document.querySelector('body')
function appendJson(json){
    let li = document.createElement('li')
    li.innerHTML = json
    body.appendChild(li)
}

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "name": `${userName}`, 
            "email": `${userEmail}`
        })
    })
    .then(resp => resp.json())
    .then(json => appendJson(json.id))
    .catch(err => {
        alert('Unauthorized Access');
        appendJson(err.message)
    })
}

