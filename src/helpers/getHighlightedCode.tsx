import React from "react";

const getHighlightedCode = (content = '', word_to_highlight = '', highlight_color = "yellow") => {
    if (!word_to_highlight.trim()) {
        return content;
    }

    const parts = content.split(word_to_highlight);

    return parts.map((part, index) => {
        if (index === parts.length - 1) {
            return part;
        }
        return (
            <React.Fragment key={`rhp-${index}`}>
                {part}
                <span
                    className="rhp-mark"
                    style={{ backgroundColor: highlight_color }}
                >
                    {word_to_highlight}
                </span>
            </React.Fragment>
        );
    });
}

export default getHighlightedCode;
