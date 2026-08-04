import React, { useMemo } from "react";
import getHighlightedCode from "../helpers/getHighlightedCode";

export interface HighlightBackProps {
    code_content ?: string;
    word_to_highlight ?: string;
    highlight_color ?: string;
}

const HighlightBack: React.FC<HighlightBackProps> = ({ code_content = "", word_to_highlight = "", highlight_color = "yellow" }) => {
    const highlightedCode = useMemo(
        () => getHighlightedCode(code_content, word_to_highlight, highlight_color),
        [code_content, word_to_highlight, highlight_color]
    );

    return (
        <pre className="rhp-tlr-0">
            <code className="hljs">
                {highlightedCode}
            </code>
        </pre>
    );
}

export default React.memo(HighlightBack);
