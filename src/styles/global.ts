import { globalCss } from ".";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing:'border-box'
    },

    body: {
        "-webkit-font-smoothing": "antiliased",
        color:'$gray100',
        backgroundColor:'$gray900',
    },
    "body, input, textarea,button": {
        fontFamily: "Roboto",
        fontWeight: 400,
    },
});
