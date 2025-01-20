import { useForm } from "react-hook-form";
import { useInfo } from "../contexts/InfoContext";
import { plans } from "../purchaseData";
import styles from "./Plans.module.css";
import ContentHeader from "./ContentHeader";
import Plan from "./Plan";
import Switch from "./Switch";
import Form from "./Form";

function Plans() {
    const { isYearlyPlan, dispatch } = useInfo();
    const { register, handleSubmit, watch } = useForm();

    function onSubmit(data) {
        dispatch({
            type: "selectPlan",
            payload: {
                selectedPlan: data.plan,
                isYearlyPlan: data.isYearlyPlan,
            },
        });
    }

    return (
        <>
            <div className="mainContent">
                <ContentHeader title="Select your plan">
                    You have the option of monthly or yearly billing.
                </ContentHeader>
                <Form
                    className={styles.planForm}
                    onSubmit={handleSubmit(onSubmit)}
                    step="mid"
                >
                    {plans.map((plan) => (
                        <Plan
                            plan={plan}
                            key={plan.planName}
                            register={register}
                            isYearlyPlan={watch("isYearlyPlan", isYearlyPlan)}
                        />
                    ))}
                    <Switch
                        register={register}
                        value={watch("isYearlyPlan", isYearlyPlan)}
                    />
                </Form>
            </div>
        </>
    );
}

export default Plans;
