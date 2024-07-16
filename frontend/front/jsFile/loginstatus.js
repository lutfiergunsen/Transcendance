
function loginstatus(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', serverIP + 'api/loginstatus/', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    const username = localStorage.getItem('username');
    xhr.onload = function() {
        if (xhr.status === 200) {
            isLoggedIn = true;
        } if(xhr.status === 201) {
            localStorage.setItem('isLoggedIn', false);
            isLoggedIn = false; 
        }
    };
    if(username === false)
    xhr.send(JSON.stringify({username: username}));
}


function exituser() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', serverIP + 'api/exituser/', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    const username = localStorage.getItem('username');
    xhr.onload = function() {
        if(xhr.status === 201)
        {    
            isLoggedIn = false;
        }
        if(xhr.status === 400)
        {     
            alert('Çikiş Yapilamadi');
        }
    };
    xhr.send(JSON.stringify({username: username}));
}
