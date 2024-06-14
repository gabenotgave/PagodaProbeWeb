import { isNullOrWhitespace } from "../utility/TextHelper";

export const isPersonSearchValid = (person) => {
    // TODO: get supported areas through API call
    const supportedAreas = [
        {
            state: "PA",
            counties: ["Berks"]
        }
    ];

    if (isNullOrWhitespace(person.firstName)) {
        return { isValid: false, reason: "First name is required" };
    }

    if (isNullOrWhitespace(person.lastName)) {
        return { isValid: false, reason: "Last name is required" };
    }

    if (isNullOrWhitespace(person.state)) {
        return { isValid: false, reason: "State is required" };
    }

    if (isNullOrWhitespace(person.county)) {
        return { isValid: false, reason: "County is required" };
    }

    const areaIsSupported = supportedAreas.find((area) => area.state === person.state && person.county == "All" || area.counties.includes(person.county));

    if (!areaIsSupported) {
        return { isValid: false, reason: "Area is not supported" };
    }

    return { isValid: true };
}