    var thisTry = 0;
    var maxTries = 3;
    var loggedIn = false
    while (thisTry < maxTries && !loggedIn) {

        var username = prompt('Username:');
        var password = prompt('Password:');
        if (username == 'samy123' && password == '12345') {

            alert('Welcome back, ' + username);
            loggedIn = true;

        } else {

            alert('Inaccurate credentials!');

        }
        thisTry++;
    }
