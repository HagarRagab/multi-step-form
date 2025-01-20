import { useInfo } from "../contexts/InfoContext";

function Feature({ feature, durationStr }) {
    const { planDuration } = useInfo();

    return (
        <>
            <p>{feature.title}</p>
            <span>
                +${feature[planDuration]}/{durationStr}
            </span>
        </>
    );
}

export default Feature;
