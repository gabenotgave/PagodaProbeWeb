import { React, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { insertSpaceBeforeUpperCase } from "../utility/TextHelper";
import DocketCaseModal from "../components/DocketCaseModal";
import { useGetPersonByNameQuery } from "../services/pagodaProbeApi";
import Callout from "../components/Callout";
import Error from "../components/Error";
import { isPersonSearchValid } from "../utility/ValidationHelper";
import { useNavigate } from "react-router-dom";

const PersonProfile = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [docketCaseNumber, setDocketCaseNumber] = useState("");
    const [docketCaseCaption, setDocketCaseCaption] = useState("");
    const [showDocketCaseModal, setShowDocketCaseModal] = useState(false);
    const [showError, setShowError] = useState(false);

    const { data, error, isLoading } = useGetPersonByNameQuery({
        firstName: searchParams.get("firstName") ?? "",
        middleInitial: searchParams.get("middleInitial") ?? "",
        lastName: searchParams.get("lastName") ?? "",
        birthDate: searchParams.get("birthDate") ?? "",
        state: searchParams.get("state") ?? "",
        county: searchParams.get("county") ?? ""
    });
    const person = data;
    if (error) {
        setShowError(true);
    }
    

    if (!isPersonSearchValid({
        firstName: searchParams.get("firstName") ?? "",
        lastName: searchParams.get("lastName") ?? "",
        state: searchParams.get("state") ?? "",
        county: searchParams.get("county") ?? ""
    }).isValid) {
        const navigate = useNavigate();
        navigate("/");
        return;
    }

    useEffect(() => {
        const firstName = searchParams.get("firstName") ?? "";
        const middleInitial = searchParams.get("middleInitial") ?? "";
        const lastName = searchParams.get("lastName") ?? "";
        const birthDate = searchParams.get("birthDate") ?? "";
        const state = searchParams.get("state") ?? "";
        const county = searchParams.get("county") ?? "";

        let title = "";
        if (firstName && middleInitial && lastName) {
            title = `${firstName.toUpperCase()} ${middleInitial.toUpperCase()} ${lastName.toUpperCase()}`;
        } else if (firstName && lastName) {
            title = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
        }

        if (birthDate) {
            title += ` (${birthDate.split('T')[0].replace('0001-01-01', '')})`;
        }

        if (county != "All") {
            title += ` of ${county.toUpperCase()}, ${state}`;
        } else {
            title += ` of ${state}`;
        }

        title += " - Pagoda Probe";

        document.title = title;
        document.querySelector('meta[property="og:title"]').setAttribute('content', title);
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', title);
        document.querySelector('meta[name="description"').setAttribute('content', "Find address and criminal records for anyone in Pennsylvania");
    }, []);

    return (
        <>
            {error && <Error description={"An error has occurred."} />}
            {<DocketCaseModal docketCaseNumber={docketCaseNumber} docketCaseCaption={docketCaseCaption} show={showDocketCaseModal} setShow={setShowDocketCaseModal} />}
            {isLoading ? <Spinner /> : (
                <div id="person" className="row">
                    <div className="col-sm-4 d-none d-md-block">
                        <img id="personPhoto" className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg" />
                    </div>
                    <div className="col">
                        <h5 className="d-inline" style={{marginRight:10}} id="name">{person.firstName} {person.middleInitial} {person.lastName}</h5>{/*<a id="copyLink" href="javascript:void(0);" className="small">Copy link</a> */}
                        {person.parcels.length === 0 ? (
                            person.county === "All" ? (
                                <Callout type="warning" text={<>County must be specified for parcel search</>} />
                            ) : (
                                <div>No parcels found</div>
                            )
                        ) : (
                            <>
                                <div id="address" className="text-secondary fw-bold mb-0 text-uppercase">{person.parcels[0].streetAddress}, {person.parcels[0].municipality} {person.county !== "All" ? person.county : ""}</div>
                                <div id="parcelOwner" className="text-secondary fw-bold d-block mt-0 mb-0 fst-italic">{person.parcels[0].ownerName}</div>
                                <span style={{marginRight:8}}><Link id="parcelReport" target="_blank" to={person.parcels[0].reportPdf}>Parcel report</Link></span>
                                {person.parcels[0].confidence === 0 ? (
                                    <span id="confidentTag" className="badge text-bg-success">Confident</span>
                                ) : (
                                    <span id="notConfidentTag" className="badge text-bg-warning">Not confident</span>
                                )}
                                {person.parcels.length === 1 ? null : (
                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <h5>Other possible residences</h5>
                                            <div className="table-responsive">
                                                <table id="parcelsTable" className="table small">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Owner(s)</th>
                                                            <th scope="col">Address</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="parcelsTableBody">
                                                        {person.parcels.slice(1).map((parcel, key) => {
                                                            return (<tr key={key}>
                                                                <td className="fst-italic">{parcel.ownerName}</td>
                                                                <td>{parcel.streetAddress}, {parcel.municipality}</td>
                                                                {parcel.confidence === 0 ? (
                                                                    <td><span id="confidentTag" className="badge text-bg-success">Confident</span></td>
                                                                ) : (
                                                                    <td><span id="notConfidentTag" className="badge text-bg-warning">Not confident</span></td>
                                                                )}
                                                            </tr>)
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className="col-12">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5>PA Docket Cases</h5>
                                <div className="table-responsive">
                                    <table id="docketTable" className="table small">
                                        <thead>
                                            <tr>
                                                <th scope="col">Type</th>
                                                <th scope="col">Case</th>
                                                <th scope="col">Filing date</th>
                                                <th scope="col">County</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody id="docketTableBody" className="docket-table-records">
                                            {person.docketCases.map((dc, key) => {
                                                return (
                                                    <tr key={key} onClick={() => setDocketCaseNumber(dc.docketNumber) & setDocketCaseCaption(dc.caseCaption) & setShowDocketCaseModal(true)}>
                                                        <td>{insertSpaceBeforeUpperCase(dc.courtType)}</td>
                                                        <td>{dc.caseCaption}</td>
                                                        <td>{dc.filingDate.split('T')[0]}</td>
                                                        <td>{dc.county}</td>
                                                        {dc.confidence === 0 ? (
                                                            <td><span id="confidentTag" className="badge text-bg-success">Confident</span></td>
                                                        ) : (
                                                            <td><span id="notConfidentTag" className="badge text-bg-warning">Not confident</span></td>
                                                        )}
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default PersonProfile;