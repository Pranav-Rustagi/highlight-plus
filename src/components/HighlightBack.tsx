import React from "react";
import getHighlightedCode from "../helpers/getHighlightedCode";

export interface HighlightBackProps {
    code_content ?: string | undefined;
    search_text ?: string | undefined;
    highlight_color ?: string | undefined;
}

const HighlightBack: React.FC<HighlightBackProps> = ({ code_content = "", search_text = "", highlight_color = "yellow" }) => {
    const highlightedCode = getHighlightedCode(code_content, search_text, highlight_color);

    return (
        <pre className="rhp-tlr-0">
            <code className="hljs">
                {highlightedCode}
            </code>
        </pre>
    );
}

export default HighlightBack;