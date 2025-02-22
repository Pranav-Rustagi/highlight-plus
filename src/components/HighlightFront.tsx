import React from "react";
import Highlight from "react-highlight";

export interface HighlightFrontProps {
    code_content ?: string | undefined;
    language ?: string | undefined;
}

const HighlightFront: React.FC<HighlightFrontProps> = ({ code_content = "", language }) => {
    if (language === undefined) {
        return (
            <Highlight className="rhp-bck-transparent">
                {code_content}
            </Highlight>
        );
    }

    return (
        <Highlight className={`${language} rhp-bck-transparent`}>
            {code_content}
        </Highlight>
    );
}

export default HighlightFront;