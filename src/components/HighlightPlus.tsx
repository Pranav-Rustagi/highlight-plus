import React from "react";
import HighlightFront from "./HighlightFront";
import HighlightBack from "./HighlightBack";

export interface HighlightPlusProps {
    code_content?: string;
    language?: string;
    word_to_highlight?: string;
    highlight_color?: string;
}

const HighlightPlus: React.FC<HighlightPlusProps> = ({ code_content, language, word_to_highlight, highlight_color }) => {
    return (
        <div className="rhp-cont hljs">
            <HighlightFront
                code_content={code_content}
                language={language}
            />
            <HighlightBack
                code_content={code_content}
                word_to_highlight={word_to_highlight}
                highlight_color={highlight_color}
            />
        </div>
    )
}

export default React.memo(HighlightPlus);
