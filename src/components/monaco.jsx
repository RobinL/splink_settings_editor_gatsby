import React, { Component } from 'react';

export const EditorContainer = (props) => {
    return <div
            id="editor-container">Hello</div>
  };

// https://github.com/Lamden/ide/blob/master/src/components/monacoeditor.jsx
class MonacoWindow extends Component {

    componentDidMount() {

        import("monaco-editor")
          .then( monaco => {
            this.monaco = monaco;
            this.editor = this.monaco.editor.create(document.getElementById("editor-container"),
              {
               theme: 'vs-dark',
               automaticLayout: true,
              }
            );


          })
      }

      render() {
          return (
            <span>
            <EditorContainer className="monaco-window" />
          </span>
          )
      }

}

export default MonacoWindow
