# highlight-plus

### Description

`highlight-plus` is a React component built on top of `react-highlight`, extending its functionality by allowing you to highlight specific words within the syntax-highlighted code.

It provides an easy way to highlight keywords, variables, or any other word within the syntax-highlighted code snippet.

<br/>

### Features

- Built on top of `react-highlight`, so it supports various programming languages for syntax highlighting.

- Allows highlighting of specific word within the syntax highlighted code.

- Customizable highlight color with support for all legal CSS color values (hexadecimal, RGB, RGBA, HSL, HSLA, predefined).

<br/>


### Installation

- To install via `npm`:
    ```bash
    npm install highlight-plus
    ```

- To install via `yarn`:
    ```bash
    yarn add highlight-plus
    ```

<br/>


### Usage

- **Basic Usage:**

    ```javascript
    import React from 'react';
    import HighlightPlus from "highlight-plus";

    const MyComponent = () => {
        const code_string = `
            function helloReactHighlightPlus () {
                const greet_msg = "Hello, highlight-plus";
                console.log(greet_msg);
            }
        `;

        const word_to_highlight = "high";

        return (
            <div>
                <h1>React Highlight Plus example one</h1>
                <HighlightPlus
                    language="javascript"
                    word_to_highlight={word_to_highlight}
                    code_content={code_string}
                />
            </div>
        );
    }
    ```

<br/>

- **With custom highlight color:**

    ```javascript
    import React from 'react';
    import HighlightPlus from "highlight-plus";

    const MyComponent = () => {
        const code_string = `
            function helloReactHighlightPlus () {
                const greet_msg = "Hello, highlight-plus";
                console.log(greet_msg);
            }
        `;

        const word_to_highlight = "high";

        return (
            <div>
                <h1>React Highlight Plus example one</h1>
                <HighlightPlus
                    language="javascript"
                    word_to_highlight={word_to_highlight}
                    highlight_color="#ff6347"
                    code_content={code_string}
                />
            </div>
        );
    }
    ```

<br/>

### Props

| Prop name | Description | Data type | Default value |
| -- | -- | -- | -- |
| code_content | Code to be displayed | string | "" |
| word_to_highlight | String to be highlighted | string | "" |
| language | Programming language of the code to be displayed | string | auto-detected |
| highlight_color | Background color of the highlighted string | string | yellow | 

<br/>

### Customizing Syntax Highlighting

`highlight.js` offers a wide range of themes to choose from for syntax highlighting. You can find various CSS files for different themes at [cdnjs.com](cdnjs.com/libraries/highlight.js). 

To use a custom theme, simply link CSS in the `<head>` tag in your HTML file or just import the desired CSS file at the top of your CSS.

Example 1: Linking CSS inside the `<head>` tag
```html
<html>
    <head>
        <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/1c-light.min.css" 
        />
    </head>
    <body></body>
</html>
```

<br/>

Example 2: Importing in CSS file
```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/1c-light.min.css");
```


<br />

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

