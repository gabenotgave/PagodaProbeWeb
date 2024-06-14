import { createSlice } from "@reduxjs/toolkit";
import { agreeToTermsOfUse, hasAgreedToTermsOfUse } from "../utility/DisclaimerHelper";

const modalSlice = createSlice({
    name: "modal",
    initialState: { // State of slice on reload
        showDisclaimerModal: !hasAgreedToTermsOfUse()
    },
    reducers: {
        toggleDisclaimerModal: (state) => { // State of slice in duration user does not reload
            state.showDisclaimerModal = !state.showDisclaimerModal;
            if (state.showDisclaimerModal === false) {
                agreeToTermsOfUse();
            }
        }
    }
});

export const { toggleDisclaimerModal } = modalSlice.actions;
export const { reducer } = modalSlice;