import React from "react";

const getHighlightedCode = (content = '', word_to_highlight = '', highlight_color = "yellow") => {
    const spotlight_regex = new RegExp("<rhp-mark spotlight>(.*?)</rhp-mark>", 'g');

    console.log({content});
    const rhp_content = content.replaceAll(word_to_highlight, `<rhp-mark spotlight>${word_to_highlight}</rhp-mark>`);


    const highlightedCode = rhp_content.split(spotlight_regex).map((part, index) => {
        if (index % 2 === 0) {
            return part;
        }
        return (
            <span
                className="rhp-mark"
                style={{ backgroundColor: highlight_color }}
                key={`rhp-${index}`}
            >
                {part}
            </span>
        );
    });

    return highlightedCode;

}

export default getHighlightedCode;