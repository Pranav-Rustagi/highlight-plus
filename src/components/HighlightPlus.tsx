import React from "react";
import HighlightFront from "./HighlightFront";
import HighlightBack from "./HighlightBack";

export interface HighlightPlusProps {
    code_content?: string | undefined;
    language?: string | undefined;
    word_to_highlight?: string | undefined;
    highlight_color?: string | undefined;
}

const HighlightPlus: React.FC<HighlightPlusProps> = ({ code_content, language, word_to_highlight, highlight_color }) => {
    console.log({code_content, language, word_to_highlight, highlight_color});

    return (
        <div className="rhp-cont hljs">
            <HighlightFront
                code_content={code_content} 
                language={language}
            />
            <HighlightBack
                code_content={code_content}
                search_text={word_to_highlight}
                highlight_color={highlight_color} 
            />
        </div>
    )
}

export default HighlightPlus;

