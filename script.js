document.getElementsByTagName('form')[0].addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('username').value
    var password = document.getElementById('password').value

    console.log(`Username: ${name}, password: ${password}`)
});