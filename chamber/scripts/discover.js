async function getDiscoverData() {
    const response = await fetch('./data/discover.json');
    const data = await response.json();
    displayDiscover(data);
}

const displayDiscover = (data) => {
    let main = document.getElementById('discover');
    data.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('discover-card');
        div.innerHTML = `
            <h2>${element.locationName}</h2>
            <img src="${element.img}" alt="${element.locationName}">
            <p>Location: ${element.address}</p>
            <p>Description: ${element.description}</p>
            <button onclick="window.location.href='${element.link}'">Learn more</button>
        `;
        main.appendChild(div);
    });
}

function displayMessage() {
    let main = document.getElementById('discover');
    let aside = document.createElement('aside');
    if (localStorage.getItem('was_visited') === 'true') {
        aside.classList.add('sidebar');
        aside.innerHTML = `
        <h3>Welcome! Let us know if you have any questions.</h3>
        `;
    } else if (localStorage.getItem('was_visited') === 'false') {
        aside.classList.add('sidebar');
        aside.innerHTML = `
        <h3>Back so soon! Awesome!</h3>
        `;
    }
    main.appendChild(aside);
}

var first_visit = false;
checkFirstVisit();
function checkFirstVisit() {
    if (localStorage.getItem('was_visited')) {
        localStorage.setItem('was_visited', 'false');
        return;
    }
    first_visit = true;
    localStorage.setItem('was_visited', 'true');
}

getDiscoverData();
displayMessage();

/*localStorage.setItem('was_visited', 1);
    
    let aside = document.createElement('aside');
    aside.classList.add('sidebar');
    aside.innerHTML = `
    <span class="close-btn" onclick="this.parentElement.style.display='none'">×</span>
    <h3>Visitor Information</h3>
    <div class="visit-message" id="visit-message"></div>
    `;
    main.appendChild(aside);*/