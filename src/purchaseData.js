import arcadeImg from "./assets/images/icon-arcade.svg";
import advancedImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";

export const plans = [
    {
        planName: "arcade",
        imgSrc: arcadeImg,
        monthly: 9,
        yearly: 90,
    },
    {
        planName: "advanced",
        imgSrc: advancedImg,
        monthly: 12,
        yearly: 120,
    },
    {
        planName: "pro",
        imgSrc: proImg,
        monthly: 15,
        yearly: 150,
    },
];

export const features = [
    {
        id: "service",
        title: "Online service",
        description: "Access to multiplayer games",
        monthly: 1,
        yearly: 10,
    },
    {
        id: "storage",
        title: "Larger storage",
        description: "Extra 1TB of cloud save",
        monthly: 2,
        yearly: 20,
    },
    {
        id: "profile",
        title: "Customizable Profile",
        description: "Custom theme on your profile",
        monthly: 1,
        yearly: 20,
    },
];
