import { useForm } from "react-hook-form";
import { useInfo } from "../contexts/InfoContext";
import ContentHeader from "./ContentHeader";
import styles from "./Info.module.css";
import Form from "./Form";

function Info() {
    const { userName, email, phoneNumber, dispatch } = useInfo();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        dispatch({
            type: "addUserInfo",
            payload: {
                userName: data.userName,
                email: data.email,
                phoneNumber: data.phoneNumber,
            },
        });
    }

    return (
        <div className="mainContent">
            <ContentHeader title="Personal info">
                Please provide your name, email address, and phone number.
            </ContentHeader>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                step="first"
                className={styles.infoForm}
            >
                <label htmlFor="name">
                    <span>Name</span>
                    <span className={styles.warningMsg}>
                        {errors.userName?.message}
                    </span>
                </label>
                <input
                    id="name"
                    className={errors.userName ? styles.wrong : ""}
                    type="text"
                    placeholder="e.g. Stephen King"
                    autoComplete="off"
                    {...register("userName", {
                        required: "Your full name is required.",
                        minLength: {
                            value: 4,
                            message: "At least 4 characters",
                        },
                    })}
                    defaultValue={userName}
                />
                <label htmlFor="email">
                    <span>Email Address</span>
                    <span className={styles.warningMsg}>
                        {errors.email?.message}
                    </span>
                </label>
                <input
                    id="email"
                    className={errors.email ? styles.wrong : ""}
                    type="text"
                    placeholder="e.g. stephenking@lorem.com"
                    autoComplete="off"
                    {...register("email", {
                        required: "Valid email is required.",
                        validate: (value) =>
                            value.includes("@") || "Invalid email address",
                    })}
                    defaultValue={email}
                />
                <label htmlFor="phone">
                    <span>Phone Number</span>
                    <span className={styles.warningMsg}>
                        {errors.phoneNumber?.message}
                    </span>
                </label>
                <input
                    id="phone"
                    className={errors.phoneNumber ? styles.wrong : ""}
                    type="tel"
                    placeholder="e.g. +1 234 567 890"
                    autoComplete="off"
                    {...register("phoneNumber", {
                        required: "Valid phone number is required",
                        minLength: {
                            value: 6,
                            message: "at least 6 numbers",
                        },
                    })}
                    defaultValue={phoneNumber}
                />
            </Form>
        </div>
    );
}

export default Info;
