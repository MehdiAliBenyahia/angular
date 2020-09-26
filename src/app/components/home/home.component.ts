import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = 'Editeur de texte';
  codeMirrorOptions: any = {
    theme: 'idea',
    mode: 'application/ld+json',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: [
      'CodeMirror-linenumbers',
      'CodeMirror-foldgutter',
      'CodeMirror-lint-markers',
    ],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
  };

  obj;

  ngOnInit() {
    this.obj = JSON.stringify(
      {
        $schema: 'http://json-schema.org/draft-07/schema#',
        type: 'object',
        title: 'Object',
        additionalProperties: false,
        properties: {
          string: {
            type: 'string',
            title: 'String',
          },
        },
      },
      null,
      ' '
    );
  }
  setEditorContent(event) {
    // console.log(event, typeof event);
    console.log(this.obj);
  }
}
