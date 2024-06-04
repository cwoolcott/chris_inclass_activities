const personalFormHandler = async (event) => {
    console.log("here");
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value.trim();

    if (firstName) {
        console.log("firstName", firstName)

        const response = await fetch('/api/personalize', {
            method: 'POST',
            body: JSON.stringify({ firstName }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
            return true;
        }

    }

    alert('Please Try Again!');

};

var personalForm = document.querySelector('.personal-form');
personalForm.addEventListener('submit', personalFormHandler);