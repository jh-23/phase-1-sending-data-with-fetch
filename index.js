// Add your code here

function submitData(name, email) {
    const userInfo = {
        name: name,
        email: email,
    };
    const configurationUser = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify(userInfo),
    }

    return fetch("http://localhost:3000/users", configurationUser)
    .then(function(response){
        return response.json();
    })
    .then(function(user){
        console.log(user.id);
        let body = document.querySelector('body')
        body.append(user.id);
    })
    .catch(function(error) {
        alert("Bad info!")
        let body = document.querySelector('body')
        body.append(error.message);
    })
}
