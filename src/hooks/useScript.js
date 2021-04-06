import { useEffect } from "react";

export const useScript = (scriptUrl) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = scriptUrl;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            let allsuspects = document.getElementsByTagName("script");
            for (let i = allsuspects.length; i >= 0; i--) {
                if (
                    allsuspects[i] &&
                    allsuspects[i].getAttribute("src") !== null &&
                    allsuspects[i].getAttribute("src").indexOf(scriptUrl) !== -1
                ) {
                    allsuspects[i].parentNode.removeChild(allsuspects[i]);
                }
            }
        };
    }, []);
};
