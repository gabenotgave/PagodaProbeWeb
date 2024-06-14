import { React, useState, useEffect } from "react";
import { useGetDocketCaseByNumberQuery } from "../services/pagodaProbeApi";
import Spinner from "../components/Spinner";
import { roundTo100thPlace } from "../utility/NumberHelper";
import Error from "../components/Error";

const DocketCase = ({docketCaseNumber}) => {
    const { data, error, isLoading } = useGetDocketCaseByNumberQuery(docketCaseNumber);
    const docketCase = data;

    return (
        <div id="docketDetails">
            {isLoading ? <Spinner /> : (
                <>
                    { error && <Error description={error.message} />}
                    <div className="docket-details-title" style={{ marginTop: 0, marginBottom: 5 }}><h5>Case information</h5></div>
                    <div style={{paddingLeft:7}}>
                        <div>
                            <span className="fw-bold">Judge assigned: </span>
                            <span id="dcJudgeAssigned">{docketCase.assignedJudge}</span>
                        </div>
                        <div className="d-none" id="dcClaimAmountDetails">
                            <span className="fw-bold">Claim amount: </span>
                            <span id="dcClaimAmount">${roundTo100thPlace(docketCase.claimAmount)}</span>
                        </div>
                        <div>
                            <span className="fw-bold">Total assessments/fines: </span>
                            <span id="dcTotalAssessments">${roundTo100thPlace(docketCase.totalAssessments)}</span>
                        </div>
                        <div>
                            <span className="fw-bold d-none" id="dcArrestingAgencyDetails">Arresting agency: </span>
                            <span id="dcArrestingAgency">{docketCase.arrestingAgency}</span>
                        </div>
                        <div>
                            <span className="fw-bold">County: </span>
                            <span id="dcCounty">{docketCase.county}</span>
                        </div>
                        <div>
                            <span className="fw-bold">Case status: </span>
                            <span id="dcCaseStatus">{docketCase.caseStatus}</span>
                        </div>
                        <div>
                            <span className="fw-bold">File date: </span>
                            <span id="dcFileDate">{docketCase.filingDate.split("T")[0]}</span>
                        </div>
                        <div>
                            <span className="fw-bold">Processing status: </span>
                            <span id="dcProcessingStatus">{docketCase.caseStatusInformation.processingStatus}</span>
                        </div>
                    </div>
                    <div className="docket-details-title"><h5>Calendar events</h5></div>
                    <div className="table-responsive">
                        <table id="dcCalendarEvents" className="table small">
                            <thead>
                                <tr>
                                    <th scope="col">Event type</th>
                                    <th scope="col">Start date</th>
                                    <th scope="col">Judge name</th>
                                    <th scope="col">Schedule status</th>
                                </tr>
                            </thead>
                            <tbody id="dcCalendarEventsBody" className="docket-details-table">
                                {docketCase.caseCalendarEvents && docketCase.caseCalendarEvents.map((cce, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{cce.caseCalendarEventType}</td>
                                            <td>{cce.scheduleStartDate.split('T')[0]}</td>
                                            <td>{cce.judgeName}</td>
                                            <td>{cce.scheduleStatus}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="docket-details-title"><h5>Case participants</h5></div>
                    <div className="table-responsive">
                        <table id="dcCaseParticipants" className="table small">
                            <thead>
                                <tr>
                                    <th scope="col">Type</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Birthdate</th>
                                    <th scope="col">Sex</th>
                                    <th scope="col">Race</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody id="dcCaseParticipantsBody" className="docket-details-table">
                                {docketCase.caseParticipants && docketCase.caseParticipants.map((casPar, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{casPar.participantType}</td>
                                            <td>{casPar.participantName}</td>
                                            <td>{casPar.birthdate.split('T')[0].replace('0001-01-01', '')}</td>
                                            <td>{casPar.gender ?? ''}</td>
                                            <td>{casPar.race ?? ''}</td>
                                            <td>{casPar.address ?? ''}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="docket-details-title"><h5>Bail</h5></div>
                    <div className="table-responsive">
                        <table id="dcBails" className="table small">
                            <thead>
                                <tr>
                                    <th scope="col">Bail action type</th>
                                    <th scope="col">Bail action date</th>
                                    <th scope="col">Bail type</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody id="dcBailsBody" className="docket-details-table">
                                {docketCase.caseBails && docketCase.caseBails.map((cb, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{cb.bailActionType}</td>
                                            <td>{cb.bailActionDate.split('T')[0]}</td>
                                            <td>{cb.bailType}</td>
                                            <td>${roundTo100thPlace(cb.amount)}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="docket-details-title"><h5>Charges</h5></div>
                    <div className="table-responsive">
                        <table id="dcCharges" className="table small">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Charge</th>
                                    <th scope="col">Grade</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Offense date</th>
                                </tr>
                            </thead>
                            <tbody id="dcChargesBody" className="docket-details-table">
                                {docketCase.caseCharges && docketCase.caseCharges.map((cc, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{cc.number}</td>
                                            <td>{cc.charge}</td>
                                            <td>{cc.grade}</td>
                                            <td>{cc.description}</td>
                                            <td>{cc.offenseDate.split('T')[0]}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="docket-details-title"><h5>Docket entry information</h5></div>
                    <div className="table-responsive">
                        <table id="dcEntryInformation" className="table small">
                            <thead>
                                <tr>
                                    <th scope="col">Filed date</th>
                                    <th scope="col">Entry</th>
                                    <th scope="col">Filer</th>
                                </tr>
                            </thead>
                            <tbody id="dcEntryInformationBody" className="docket-details-table">
                                {docketCase.caseEntries && docketCase.caseEntries.map((ce, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{ce.filedDate.split('T')[0]}</td>
                                            <td>{ce.entry}</td>
                                            <td>{ce.filer ?? ''}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    counter: state.counter 
    //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
  });
  
const mapDispatchToProps = (dispatch) => ({
    getDocketCase: () => dispatch({ type: "SET_DOCKET_CASE_BY_NUMBER" }),
    docketCaseError: () => dispatch({ type: "SET_DOCKET_CASE_BY_NUMBER_ERROR" })
});

export default DocketCase;