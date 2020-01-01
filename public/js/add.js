const storeForm = document.getElementById('store-form');
const storeId = document.getElementById('store-id');
const storeAddress = document.getElementById('store-address');

// Send POST request to API to add store
async function addStore(e) {
    e.preventDefault();

    if(storeId.value === '' || storeAddress.value === '') {
        alert('Please fill in the fields');
    }

    const sendBody = {
        storeId: storeId.value,
        address: storeAddress.value
    }

    try {
        const res = await fetch('/api/v1/stores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendBody)
        });
        if(res.status === 400) {
            throw Error('store already exists'); // This throw is what is being caught down below
        }

        alert('store added!');
        window.location.href = '/index.html';
        console.log(sendBody);
    } catch (error) {
        alert(error);
    }
}

storeForm.addEventListener('submit', addStore);