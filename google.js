const scriptURL = 'https://script.google.com/macros/s/AKfycbxhDgQOq1nKqZlBKkysKA9e0wUhEPz5vDJCXyDAZNKIPLXi8yT8bFfLJA-qlzY3DbfOIA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        if (response.ok) {
            alert("Thank you! Your form is submitted successfully.")
            location.reload(); // Reload halaman setelah form berhasil dikirim
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => console.error('Error!', error.message))
})
