import Callout from "../components/Callout";

const MainCallout = ({onToggleDisclaimerModal}) => {
    return (
        <Callout text={<>Pagoda Probe is currently in beta and may contain inaccuracies and errors. <a href="#" onClick={(event) => { event.preventDefault(); onToggleDisclaimerModal(); }}>General Terms of Use</a>.</>} />
    )
}

export default MainCallout;