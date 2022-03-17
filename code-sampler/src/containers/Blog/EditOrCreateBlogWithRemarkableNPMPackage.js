import React from 'react';
import hapiserverendpoint from '../../hapiserverendpoint';

import {Button, Modal} from 'semantic-ui-react'
import Remarkable from 'remarkable';

import nl2br from 'nl2br';
import ReactHtmlParser from 'react-html-parser';


let md = new Remarkable('full', {
  html: true,
  breaks: true,
  xhtmlOut: true,
  typographer: true
});

md.inline.ruler.enable([ 'ins', 'mark']);
md.block.ruler.enable([ 'table', 'footnote' ]);




class MarkdownEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };


    // this.handleChange = this.handleChange.bind(this);
  }


  // handleChange(e) {
  //   this.setState({value: e.target.value});
  // }

  getRawMarkup() {
    const prerenderedhtml = nl2br(this.props.value);

    return {__html: md.render(prerenderedhtml)}; // this.state.value RESOLVES TO A STRING
  }

  render() {
    return (
      <div className="MarkdownEditor">

        <strong>
          <p className='center-align'>This textarea HTML element uses the Remarkable NPM package</p>
          <p className='center-align'>It automatically parses markdown and markup</p>
        </strong>


        {/*<h3>Output</h3>*/}
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
        {/*<h3>Input</h3>*/}
        <label htmlFor="markdown-content">
          Enter some markdown:
        </label>
        <br/>
        <br/>
        <textarea
          className='text-area-width'
          rows='4'
          cols='100'
          id="markdown-content"
          onChange={this.props.handleChange}
          defaultValue={this.state.value}
        />
      </div>
    );
  }
}


class CheatSheet extends React.Component {

  remarkableIntro = `
# Remarkable

> Experience real-time editing with Remarkable!

Click the \`clear\` link to start with a clean slate, or get the \`permalink\` to share or save your results.

`;

  headings = `
# h1 Heading 

## h2 Heading 

### h3 Heading 

#### h4 Heading 

##### h5 Heading 

###### h6 Heading 

`;

  horizontalRules = `
___  

***  

*** 
`;

  typoGraphicReplacement = `
Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,

Remarkable -- awesome

"Smartypants, double quotes"

'Smartypants, single quotes'

`;

  emphasis = `
**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Deleted text~~

Superscript: 19^th^

Subscript: H~2~O

++Inserted text++

==Marked text==

`;


  blockQuotes = `
> Blockquotes can also be nested...

>> ...by using additional greater-than signs right next to each other...

> > > ...or with spaces between arrows.
`;

  lists = `
Unordered
+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
Ordered
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`
Start numbering with offset:
57. foo
1. bar
`;

  code = `
Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"
\`\`\`
  Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
  var foo = function (bar) {
  return bar++;
};
  console.log(foo(5));
\`\`\`

`;

// RIGHT-ALIGNED, WHEN IT COMES TO TABLES, MEANS THAT EACH HEADER IS RIGHT-ALIGNED WITH THE COLUMN IT REPRESENTS
  tables = `
## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`;


  links = `
## Links

  [link text](http://dev.nodeca.com)

  [link with title](http://nodeca.github.io/pica/demo/ "title text!")

  Autoconverted link https://github.com/nodeca/pica (enable linkify to see)
`;


  images = `
## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

                    Like links, Images also have a footnote style syntax

![Alt text][id]

  With a reference later in the document defining the URL location:

  [id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
`;


  footnotes = `
## Footnotes

  Footnote 1 link[^first].

  Footnote 2 link[^second].

  Inline footnote^[Text of inline footnote] definition.

  Duplicated footnote reference[^second].

  [^first]: Footnote **can have markup**

  and multiple paragraphs.

  [^second]: Footnote text.
`;

  definitionLists = `

## Definition lists

  Term 1

  :   Definition 1
  with lazy continuation.

  Term 2 with *inline markup*

:   Definition 2

{ some code, part of Definition 2 }

Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b
`;


  abbreviations = `
## Abbreviations

This is HTML abbreviation example.

  It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language


***

__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
i18n with plurals support and easy syntax.

  You'll like those projects! :)
`;


  removeLineBreaks = (string) => {
    let stringArray = string.split('<br />');

    /// VERSION2
    stringArray.forEach(function() {
      let index = stringArray.indexOf('<br />');
      if (index > -1) {
        stringArray.splice(index, 1)
      }
    });

    return stringArray.join('');


    // VERSION1 (HOW NOT TO DO IT)
    // for (let element of stringArray) {
    //   console.log('element', element);
    //   let index = stringArray.indexOf('<br />');
    //   if (index > -1) {
    //     stringArray.splice(index, 1)
    //   }
    // }


    // myString = myString.replace(/(\r\n|\n|\r)/gm, "<br />");
  };


  getRawMarkup(value) {

    return {__html: md.render(value)}; // this.state.value RESOLVES TO A STRING
  }


  render() {

    return (
      <div className="MarkdownEditor">


        <div>{this.remarkableIntro}</div>




        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.remarkableIntro)}
        />




        <h1 className='center-align'>HEADERS MARKDOWN-TO-MARKUP EXAMPLES</h1>
        <h2><u>UNPARSED HEADINGS</u></h2>
        <div>{ReactHtmlParser(nl2br(this.headings))}</div>
        <h2><u>PARSED HEADINGS</u></h2>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.headings)}
        />




        <h1 className='center-align'>HORIZONTAL RULES MARKDOWN-TO-MARKUP EXAMPLES</h1>
        <h2><u>UNPARSED HORIZONTAL RULES</u></h2>
        <div>{ReactHtmlParser(nl2br(this.horizontalRules))}</div>
        <h2><u>PARSED HORIZONTAL RULES</u></h2>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.horizontalRules)}
        />






        <h1 className='center-align'>TYPOGRAPHIC REPLACEMENT MARKDOWN-TO-MARKUP EXAMPLES</h1>
        <h2><u>UNPARSED TYPOGRAPHIC REPLACEMENTS MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div>{ReactHtmlParser(nl2br(this.typoGraphicReplacement))}</div>
        <h2><u>PARSED TYPOGRAPHIC REPLACEMENTS MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.typoGraphicReplacement)}
        />






        <h1 className='center-align'>EMPHASIS MARKDOWN-TO-MARKUP EXAMPLES</h1>
        <h2><u>UNPARSED EMPHASIS MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div>{ReactHtmlParser(nl2br(this.emphasis))}</div>
        <h2><u>PARSED EMPHASIS MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.emphasis)}
        />


        
        
        
        <h1 className='center-align'>BLOCKQUOTES MARKDOWN-TO-MARKUP EXAMPLES</h1>
        <h2><u>UNPARSED BLOCKQUOTES MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div>{ReactHtmlParser(nl2br(this.blockQuotes))}</div>
        <h2><u>PARSED BLOCKQUOTES MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.blockQuotes)}
        />




        <h1 className='center-align'>LISTS MARKDOWN-TO-MARKUP EXAMPLES</h1>
        <h2><u>UNPARSED LISTS MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div>{ReactHtmlParser(nl2br(this.lists))}</div>
        <h2><u>PARSED LISTS MARKDOWN-TO-MARKUP EXAMPLES</u></h2>

        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.lists)}
        />



        <h1 className='center-align'>CODE MARKDOWN-TO-MARKUP EXAMPLES</h1>
        <h2><u>UNPARSED CODE MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div>{ReactHtmlParser(nl2br(this.code))}</div>
        <h2><u>PARSED CODE MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.code)}
        />



        <h1 className='center-align'>TABLES MARKDOWN-TO-MARKUP EXAMPLES</h1>
        <h2><u>UNPARSED TABLES MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div>{ReactHtmlParser(nl2br(this.tables))}</div>
        <h2><u>PARSED TABLES MARKDOWN-TO-MARKUP EXAMPLES</u></h2>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.tables)}
        />



        <div>{ReactHtmlParser(nl2br(this.links))}</div>

        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.links)}
        />

        {/*<div>{ReactHtmlParser(this.images)}</div>*/}

        {/*<div*/}
          {/*className="content"*/}
          {/*dangerouslySetInnerHTML={this.getRawMarkup(this.images)}*/}
        {/*/>*/}

        <div>{ReactHtmlParser(this.footnotes)}</div>

        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.footnotes)}
        />

        <div>{ReactHtmlParser(this.definitionLists)}</div>

        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.definitionLists)}
        />

        <div>{ReactHtmlParser(this.abbreviations)}</div>

        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup(this.abbreviations)}
        />

      </div>
    )
  }
}


export default class EditOrCreateBlogModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      textArea: this.props.textArea || '',
      cheatSheet: false,
      markdownEditor: true,

      markDownEditorValue: props.markDownEditorValue

    };

    this.handleChange = this.handleChange.bind(this);

  }

  onSubmit = () => {

    const payload = {
      method: 'PUT',
      body: this.state.textArea
    };

    fetch(hapiserverendpoint + `/blog`, payload)
      .then(function (response) {
        return response.json()
      }).then(function (response) {

      window.location.reload(`/blog?topic=${'bananas'}&blogid=${5678}`);

    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  };

  onChange = (e) => {
    this.setState({textArea: e.target.value})
  };


  show = size => () => this.setState({size, open: true});
  close = () => this.setState({open: false});



  handleChange(e) {
    this.setState({markDownEditorValue: e.target.value});
  }



  render() {
    const {open, size} = this.state;

    return (
      <div>

        <Button onClick={this.show('small')}>Edit Blog With Remarkable</Button>

        <Modal size={size} open={open} onClose={this.close} closeOnDimmerClick={false}>
          <Modal.Header>
            {'Edit Blog Entry W/ Remarkable NPM Package'}
          </Modal.Header>
          <Modal.Content>

            {/*THIS WHERE THE PARAGRAPH TEXT GETS PARSED AND AUTOMATICALLY GETS WRITTEN ABOVE THE TEXTAREA BOX*/}

            {/*MARKDOWN EDITOR IS A TEXTAREA HTML ELEMENT WHICH IS AUGMENTED WITH MY OWN CODE, BECAUSE I DID NOT LIKE HOW THE NPM PACKAGE PARSED LINE BREAKS.*/}
            {/*IN ADDITION TO THAT FACT, THE CODE IS SELF-CONTAINED, AND THE IMPLEMENTATION DETAILS ARE SEPARATED FROM THIS COMPONENT AS MUCH AS POSSIBLE*/}

            {/*IN ORDER TO PRESERVE STATE IN THE MARKDOWN EDITOR, I WILL HAVE TO KEEP IT IN THE MODAL CLASS INSTEAD OF THE MARKDOWNEDITOR CLASS*/}
            {this.state.markdownEditor ? <MarkdownEditor handleChange={this.handleChange} value={this.state.markDownEditorValue} /> : null}
            {this.state.cheatSheet ? <CheatSheet /> : null}


          </Modal.Content>


          <Modal.Actions>

            <Button negative onClick={() => this.close()}>
              Exit
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Submit Blog Entry'
                    onClick={() => this.onSubmit()}/>

            {this.state.markdownEditor ? (<Button primary onClick={() => this.setState({cheatSheet: true, markdownEditor: false})}>VIEW Cheat Sheet</Button>) : null}
            {this.state.cheatSheet ? (<Button primary onClick={() => this.setState({cheatSheet: false, markdownEditor: true})}>EXIT Cheat Sheet</Button>) : null}

          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
//
// SCRATCH
// console.log(md.render('# Remarkable rulezz!'));

//
//
//
// up vote
// 1543
// down vote
// accepted
// For the sake of completeness, I got to thinking about which method I should use to do this. There are basically two ways to do this as suggested by the other answers on this page.
//
//   Note: In general, extending the built-in prototypes in JavaScript is generally not recommended. I am providing as extensions on the String prototype simply for purposes of illustration, showing different implementations of a hypothetical standard method on the String built-in prototype.
//
//   Regular Expression Based Implementation
// String.prototype.replaceAll = function(search, replacement) {
//   var target = this;
//   return target.replace(new RegExp(search, 'g'), replacement);
// };
// Split and Join (Functional) Implementation
// String.prototype.replaceAll = function(search, replacement) {
//   var target = this;
//   return target.split(search).join(replacement);
// };
// Not knowing too much about how regular expressions work behind the scenes in terms of efficiency, I tended to lean toward the split and join implementation in the past without thinking about performance. When I did wonder which was more efficient, and by what margin, I used it as an excuse to find out.
//
//   On my Chrome Windows 8 machine, the regular expression based implementation is the fastest, with the split and join implementation being 53% slower. Meaning the regular expressions are twice as fast for the lorem ipsum input I used.
//
//   Check out this benchmark running these two implementations against each other.