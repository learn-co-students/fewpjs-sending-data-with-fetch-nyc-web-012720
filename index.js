// Add your code here
const submitData = (name, email) => {
    const configObject = {
        method: "POST",
        headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                 },
        body: JSON.stringify({name:name, email:email})
    }

    return fetch("http://localhost:3000/users", configObject)
        .then(res => res.json())
        .then(json => {
            const div = document.createElement('div');
            div.innerHTML = json.id;
            document.body.appendChild(div);
        })
        .catch(err => {
            const div = document.createElement('div');
            div.innerHTML = err.message;
            document.body.appendChild(div);
        });
};