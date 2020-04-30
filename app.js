const app = document.querySelector('#app');

const state = {
    customers: [
    { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2015'},
    { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
    { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'},
    ],
}

const createHeader = () => {
    const header = document.createElement('h1');
    header.innerText = 'Acme Customers VIP';

    return header;
};

const createCustomersContainer = () => {
    const customersContainer = document.createElement('div');
    customersContainer.classList.add('customerContainer');

    return customersContainer;
};

const createCustomer = (objIn) => {
    const customer = document.createElement('div');
    customer.innerText = 'just anything'
    customer.setAttribute('id', objIn.id);


    customer.innerText = `${objIn.name} Joined on ${objIn.dateJoined} And has been...`;
    if (objIn.isVIP){
        customer.classList.add('VIP');
    }else{
        customer.classList.add('notVIP');
    };
    return customer;
};

const render = () => {
    app.innerHTML = '';

    const header = createHeader();
    app.append(header);
    const customersContainer = createCustomersContainer();
    app.append(customersContainer);
    
    state.customers.forEach(element => {
        const customerInrender = createCustomer(element);
        customersContainer.appendChild(customerInrender);
    });
};

render();