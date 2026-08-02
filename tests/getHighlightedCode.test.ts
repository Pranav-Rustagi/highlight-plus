import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import getHighlightedCode from "../src/helpers/getHighlightedCode";

function render(result: ReturnType<typeof getHighlightedCode>) {
    if (typeof result === "string") {
        return result;
    }
    return renderToStaticMarkup(React.createElement(React.Fragment, null, result));
}

describe("getHighlightedCode", () => {
    it("returns content unmodified when word_to_highlight is empty", () => {
        const result = getHighlightedCode("foo bar", "", "yellow");
        expect(result).toBe("foo bar");
    });

    it("returns content unmodified when word_to_highlight is whitespace-only", () => {
        const result = getHighlightedCode("foo bar", "   ", "yellow");
        expect(result).toBe("foo bar");
    });

    it("highlights a single match", () => {
        const html = render(getHighlightedCode("foo bar", "bar", "yellow"));
        expect(html).toBe('foo <span class="rhp-mark" style="background-color:yellow">bar</span>');
    });

    it("highlights multiple occurrences", () => {
        const html = render(getHighlightedCode("hello world hello", "hello", "yellow"));
        expect(html).toBe(
            '<span class="rhp-mark" style="background-color:yellow">hello</span> world <span class="rhp-mark" style="background-color:yellow">hello</span>'
        );
    });

    it("returns content unchanged when there is no match", () => {
        const html = render(getHighlightedCode("foo bar", "baz", "yellow"));
        expect(html).toBe("foo bar");
    });

    it("highlights correctly when the search term collides with the old internal marker syntax", () => {
        const marker = "<rhp-mark spotlight>b</rhp-mark>";
        const content = `a ${marker} c ${marker} d`;
        const html = render(getHighlightedCode(content, marker, "yellow"));
        const escaped = "&lt;rhp-mark spotlight&gt;b&lt;/rhp-mark&gt;";
        expect(html).toBe(
            `a <span class="rhp-mark" style="background-color:yellow">${escaped}</span> c <span class="rhp-mark" style="background-color:yellow">${escaped}</span> d`
        );
    });

    it("does not crash on empty content", () => {
        const html = render(getHighlightedCode("", "foo", "yellow"));
        expect(html).toBe("");
    });

    it("highlights the whole string when word_to_highlight equals the entire content", () => {
        const html = render(getHighlightedCode("foo", "foo", "yellow"));
        expect(html).toBe('<span class="rhp-mark" style="background-color:yellow">foo</span>');
    });

    it("is case-sensitive", () => {
        const html = render(getHighlightedCode("Foo bar", "foo", "yellow"));
        expect(html).toBe("Foo bar");
    });

    it("applies a custom highlight_color", () => {
        const html = render(getHighlightedCode("foo bar", "bar", "#ff6347"));
        expect(html).toBe('foo <span class="rhp-mark" style="background-color:#ff6347">bar</span>');
    });

    it("splits adjacent/repeating substrings consistently", () => {
        const html = render(getHighlightedCode("aaaa", "aa", "yellow"));
        expect(html).toBe(
            '<span class="rhp-mark" style="background-color:yellow">aa</span><span class="rhp-mark" style="background-color:yellow">aa</span>'
        );
    });

    it("uses the default highlight_color when omitted", () => {
        const html = render(getHighlightedCode("foo bar", "bar"));
        expect(html).toBe('foo <span class="rhp-mark" style="background-color:yellow">bar</span>');
    });
});
