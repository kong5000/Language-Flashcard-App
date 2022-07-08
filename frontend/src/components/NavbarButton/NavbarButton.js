import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function NavbarButton(props) {
    const { animation, onClick, label } = props
    let lottieAnimation = null
    switch (animation) {
        case "edit":
            lottieAnimation = require("./animations/pencil.json")
            break;
        case "shop":
            lottieAnimation = require("./animations/basket.json")
            break;
        case "study":
            lottieAnimation = require("./animations/blue-book.json")
            break;
        case "stats":
            lottieAnimation = require("./animations/chart.json")
            break;
        case "settings":
            lottieAnimation = require("./animations/tool.json")
            break;
        default:
            lottieAnimation = require("./animations/blue-book.json")
    }

    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            name: animation,
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: lottieAnimation
        });
        return () => {
            lottie.destroy();
        };
    }, [animation]);

    return (
        <div className="navbar-button"
            onMouseEnter={() => lottie.play(animation)}
            onMouseLeave={() => lottie.stop()}
            onClick={() => onClick(label)}
            >
            <div
                className="navbar-button-icon animation"
                ref={container}
            />
            <div className="navbar-button-label">{label}</div>
        </div>
    );
}

export default NavbarButton;
