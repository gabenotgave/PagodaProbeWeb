import { setCookie, getCookie } from "../utility/CookieHelper";

export const agreeToTermsOfUse = () => {
    setCookie('agreedToTermsOfUse', 'true', 0);
};

export const hasAgreedToTermsOfUse = () => {
    const agreed = getCookie('agreedToTermsOfUse');
    return agreed && agreed === 'true';
};