import React, { useState } from "react";
import { isPersonSearchValid }  from "../utility/ValidationHelper";
import { useNavigate } from "react-router-dom";
import { objToQueryString } from "../utility/RequestHelper";
import Error from "../components/Error";

const SearchPersonForm = () => {

    const [showError, setShowError] = useState(false);
    const [errorDescription, setErrorDescription] = useState("");


    const navigate = useNavigate();
    const searchPerson = (event) => {
        event.preventDefault();
        const person = {
            firstName: document.getElementById("firstName").value,
            middleInitial: document.getElementById("middleInitial").value,
            lastName: document.getElementById("lastName").value,
            birthDate: document.getElementById("birthdate").value,
            state: document.getElementById("state").value,
            county: document.getElementById("county").value
        }

        const modelState = isPersonSearchValid(person)

        if (modelState.isValid) {
            const queryString = objToQueryString(person);
            navigate(`/profile?${queryString}`);
        } else {
            setErrorDescription(modelState.reason);
            setShowError(true);
        }
    }

    const clearForm = () => {
        const firstName = document.getElementById("firstName").value = "";
        const middleInitial = document.getElementById("middleInitial").value = "";
        const lastName = document.getElementById("lastName").value = "";
        const birthDate = document.getElementById("birthdate").value = "";
        const county = document.getElementById("county").value = "All";
    }

    return (
        <>
            {showError ? <Error description={errorDescription} /> : null}
            <form id="searchPersonForm" onSubmit={searchPerson}>
                <div className="form-group mb-2 row mb-2">
                    <div className="col-6">
                        <label htmlFor="firstName">First name <span className="required">*</span></label>
                        <input type="text" className="form-control" id="firstName" placeholder="John" minLength="2" maxLength="100" autoFocus required />
                    </div>
                    <div className="col">
                        <label htmlFor="middleInitial">Middle initial</label>
                        <input type="text" className="form-control" id="middleInitial" placeholder="E" maxLength="1" />
                    </div>
                    <small className="form-text text-muted">Please enter the target's full first name for the most accurate results.</small>
                </div>
                <div className="form-group mb-2 mb-2">
                    <label htmlFor="lastName">Last name <span className="required">*</span></label>
                    <input type="text" className="form-control" id="lastName" placeholder="Doe" minLength="2" maxLength="100" required />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="birthdate">Date of birth</label>
                    <input type="date" className="form-control" id="birthdate" />
                </div>
                <div className="form-group row mb-2">
                    <div className="col-6">
                        <label htmlFor="county">State of residence <span className="required">*</span></label>
                        <select className="form-select form-control" id="state" required>
                            {/* <option value="All">All</option> */}
                            <option value="PA">PA - Pennsylvania</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="county">County of residence <span className="required">*</span></label>
                        <select className="form-select form-control" id="county" required>
                            <option value="All">All</option>
                            <option value="Berks">Berks</option>
                        </select>
                    </div>
                    <small className="form-text text-muted">The area of residence is used to narrow down addresses.</small>
                </div>
                <div className="form-group pt-2">
                    <input type="submit" className="d-none" id="searchPersonInput" />
                    <input type="submit" className="btn btn-primary" style={{marginRight:5}} value="Search" />
                    <div role="button" className="btn btn-outline-secondary" onClick={clearForm}>Clear</div>
                </div>
            </form>
            {/* {showPersonProfile && <PersonProfile />} */}
        </>
    )
}
export default SearchPersonForm;