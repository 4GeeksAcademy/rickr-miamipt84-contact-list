// create the async functions needed to connect to the Contact List API
// DONE fetchAllContacts (GET)
// DONE addContact (POST)
// updateContact (PUT)
// deleteContact (DELETE)

// these async functions need access to the storeReducer
// you can pass the dispatch() function from useGlobalReducer as an argument to the functions
//  below to update the store


export const fetchAllContacts = async(dispatch) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/rickrod');
    try {
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type: 'fetchedContacts',
            payload: data.contacts,
        });
        return data;
    }
    catch (error) {
        console.error("Error getting agenda. Check if URL is correct or if agenda exists.", error);
    }
}

export const addContact = async(name, address, phone, email, dispatch) => {
    const newContact = {
        name: name,
        address: address,
        phone: phone,
        email: email,
    }

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
    }

    const response = await fetch('https://playground.4geeks.com/contact/agendas/rickrod/contacts', options);
    try {
        if(!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type: 'createdContact',
            payload: newContact,
        });
        return data;
    }
    catch (error) {
        console.error("Error creating new contact in agenda.", error);
    }
}

// updateContact arguments: id, name, address, phone, email, dispatch
export const updateContact = async() => {}

// deleteContact arguments: id, dispatch
export const deleteContact = async() => {}
