//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.navbar .d-flex');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchInput = document.querySelector('.navbar input[type="search"]');
        const searchTerm = searchInput.value.trim();

        console.log('Search Term:', searchTerm);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const mailingListForm = document.getElementById('mailingListForm');
    let subscriptionList = [];

    mailingListForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        const person = { name: name, email: email };
        subscriptionList.push(person);

        console.log('Mailing List Subscription:', person);
        console.log('Updated Subscription List:', subscriptionList);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';

    });
});




