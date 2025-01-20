import { useForm } from "react-hook-form";
import { useInfo } from "../contexts/InfoContext";
import { features } from "../purchaseData";
import AddFeature from "./addFeature";
import ContentHeader from "./ContentHeader";
import Form from "./Form";

function AddOns() {
    const { dispatch } = useInfo();
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        dispatch({
            type: "addFeatures",
            payload: data,
        });
    }

    return (
        <div className="mainContent">
            <ContentHeader title="Pick add-ons">
                Add-ons help enhance your gaming experience.
            </ContentHeader>
            <Form onSubmit={handleSubmit(onSubmit)} step="mid">
                {features.map((feature) => (
                    <AddFeature
                        feature={feature}
                        key={feature.id}
                        register={register}
                    />
                ))}
            </Form>
        </div>
    );
}

export default AddOns;
