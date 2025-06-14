function displaySubmitData() {
    let count = localStorage.getItem('reviewCount');
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count);
    }
    count++;
    localStorage.setItem('reviewCount', count);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let div = document.getElementById('reviewSummary');
    const firstName = urlParams.get('firstName');
    const lastName = urlParams.get('lastName');
    const email = urlParams.get('email');
    const message = urlParams.get('message');
    div.innerHTML = `
    <h3>First Name:</h3>
    <p>${firstName}</p>
    <h3>Last Name:</h3>
    <p>${lastName}</p>
    <h3>Email:</h3>
    <p>${email}</p>
    <h3>Message:</h3>
    <p>${message}</p>
    <h3>Form submitted: ${count}</h3>
    `;
}

displaySubmitData();