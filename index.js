// Add your code here
function submitData(userName, userEmail){
    //defining fetch request object using submitData's parameters
    const configObject = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({
            name:userName,
            email:userEmail
        })
    }
    

    
    return fetch('http://localhost:3000/users', configObject)
    .then(resp => resp.json())
    .then(object => {
        const h1 = document.createElement('h1');
        h1.textContent = object.id
        document.body.appendChild(h1)
    })
    .catch(error => {
        const h2 = document.createElement('h2')
        h2.textContent = error.message
        document.body.appendChild(h2)
    })
}