const form = document.querySelector('#form')


// extracting send button
const btn = document.querySelector('#btn');
const input = document.querySelector('.input')

// btn.onclick = () => console.log('clicked');

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log('button clicked');
    await fetch('https://notificationsgeneratorbackend.onrender.com/home', {
        method: 'POST',
        body: JSON.stringify({
            description: input.value,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        input.value = ""

})

// extracting input value on button click

// here you can attach any callbacks, interact with the web component API
let nc = document.getElementsByTagName('notification-center-component')[0];
nc.onLoad = () => console.log('hello world!');