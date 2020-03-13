import React, { Component } from "react"


window.MonacoEnvironment = {
  getWorkerUrl: function (workerId, label) {
    return '/monaco-editor-worker-loader-proxy.js';
  }
};


export const EditorContainer = props => {
  return (
    <div
      id="editor-container"
      style={{
        width: props.width ? props.width : "500px",
        height: props.height ? props.height : "500px",
      }}
    ></div>
  )
}

// https://github.com/Lamden/ide/blob/master/src/components/monacoeditor.jsx
class MonacoWindow extends Component {
  componentDidMount() {
    let url =
      "https://raw.githubusercontent.com/moj-analytical-services/splink/dev/splink/files/settings_jsonschema.json"

    let p1 = import("monaco-editor")
    let p2 = fetch(url).then(res => res.json())

    Promise.all([p1, p2]).then(data => {
      let monaco = data[0]
      let my_schema = data[1]
      let text_value = this.props.editor_contents_string

      this.monaco = monaco

      var modelUri = this.monaco.Uri.parse("a://b/foo.json") // a made up unique URI for our model
      var model = this.monaco.editor.createModel(text_value, "json", modelUri)

      this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        schemas: [
          {
            uri: url, // id of the first schema
            fileMatch: [modelUri.toString()], // associate with our model
            schema: my_schema
          },
        ],
      })

      this.editor = this.monaco.editor.create(
        document.getElementById("editor-container"),
        {
          value: text_value,
          language: "json",
          model: model
        }
      )

      //   debugger;
    })
  }

  componentDidUpdate(prevProps) {
    this.editor.setValue(this.props.editor_contents_string)
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
