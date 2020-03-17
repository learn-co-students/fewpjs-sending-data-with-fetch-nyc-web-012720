
let target = document.querySelector('body')
let newId = document.createElement('h2')

function submitData(nameArg, emailArg)
{
    let newObj = { name:nameArg, email:emailArg }

    let config  = {
        method: "POST",
        headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                 },
        body: JSON.stringify(newObj)
    }

    fetch ('http://localhost:3000/users', config)
    .then(response => response.json())
    .then(function(obj)
        {
            console.log(obj)
                let c = obj.id
                newId = document.createElement('h2')
                newId.innerHTML = `${c}`
                target.appendChild(newId) 
        })
    .catch(function(error)
    {
            alert('Unauthorized Access');
            console.log(error.message);      
    }) ;   
    
}

document.addEventListener('DOMContentLoaded', function(){
    submitData('Steve', 'steve@steve.com')
    // submitData('Mike', 'mike@mike.com')
   
})
