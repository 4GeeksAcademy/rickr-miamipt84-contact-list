// useEffect will be needed
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer"

// will need to create a fetch.js file for fetches

export const Contact = () => {
    const {store, dispatch} = useGlobalReducer();

    // useEffect will go here

    return (
        <>
            <div className="container">
                {
                    !store && !store.contacts
                    ?
                    <h1>Loading...</h1>
                    :
                    store.contacts.map(contact => {
                        return (
                            <div className="card d-inline-flex flex-row" key={contact.id}>
                                <ContactCard 
                                    name={contact.name}
                                    address={contact.address}
                                    phone={contact.phone}
                                    email={contact.email}
                                />
                                <button>Edit</button>
                                <button>Del</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
