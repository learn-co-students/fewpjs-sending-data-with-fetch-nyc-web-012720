// Add your code here
function submitData(name, email) {
    let body = document.getElementsByTagName('body')[0]
    return fetch('http://localhost:3000/users', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({name, email})
    })
    .then(response => response.json())
    .then(data => {
        let id = data.id 
        body.append(id)
    })
    .catch(error => {
        // let body = document.getElementsByTagName('body')[0]
        body.append(error.message)
    })   
}

// submitData('Alejo', 'Jimmy@gmail.com')
