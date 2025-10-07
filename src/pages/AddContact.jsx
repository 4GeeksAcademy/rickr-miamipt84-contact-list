// DONE we are creating a form for users to create a new contact
// DONE we will need useState
// DONE since we will be using fetch, we will need to create a function to fetch POST
// DONE we will need useGlobalReducer to apply the dispatch to the fetch function
import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

import { addContact } from "../lib/fetch";

export const AddContact = () => {
    const [contactName, setContactName] = useState('');
    const [contactAddress, setContactAddress] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    const {store, dispatch} = useGlobalReducer();

    return (
        <>
            {/* Heading */}
            <div className="row mt-3">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1>Add A New Contact</h1>
                </div>
                <div className="col-4"></div>
            </div>

            {/* Form */}
            <div className="row add-contact-row">
                <div className="col-2"></div>
                <div className="col-8">
                    <form className="contact-form">
                        <div className="mb-3">
                            <label 
                                htmlFor="contactName" 
                                className="form-label"
                            >Full Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="contactName"
                                value={contactName}
                                onChange={e => setContactName(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label 
                                htmlFor="contactAddress" 
                                className="form-label"
                            >Address</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="contactAddress"
                                value={contactAddress}
                                onChange={e => setContactAddress(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label 
                                htmlFor="contactPhone" 
                                className="form-label"
                            >Phone Number</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="contactPhone"
                                value={contactPhone}
                                onChange={e => setContactPhone(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label 
                                htmlFor="contactEmail" 
                                className="form-label"
                            >Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="contactEmail"
                                value={contactEmail}
                                onChange={e => setContactEmail(e.target.value)} 
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => addContact(contactName, contactAddress, contactPhone, contactEmail, dispatch)}
                        >Submit</button>
                    </form>
                    <Link to="/">
                        Go back home
                    </Link>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}
