async function getBusinessData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    console.log(data);

    displayBusiness(data);
}

const displayBusiness = (data) => {
    let business = document.getElementById('business');
    data.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('business-card');
        div.innerHTML = `
        <h2>${element.name}</h2>
        <h3>${element.industry}</h3>
        <img src="${element.image}" alt="${element.name}">
        <nav>
            <span><b>Address:</b>${element.address}</span>
            <span><b>Phone:</b>${element.phone}</span>
            <span><b>URL:</b>${element.website}</span>
        </nav>
        `;
        business.appendChild(div);
    });
}

getBusinessData();