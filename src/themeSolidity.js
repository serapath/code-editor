// https://codemirror.net/demo/theme.html#liquibyte
// check extra plugins/addons like "paranthesis matching"
module.exports = ({
  color_bgEditor,
  color_bgLinebar,
  color_seperator
}) => `
.cm-s-solidity span.cm-string { color: #762; }
.cm-s-solidity span.cm-comment { color: #262; font-style: italic; line-height: 1em; }
.cm-s-solidity span.cm-meta { color: #555; font-style: italic; line-height: 1em; }
.cm-s-solidity span.cm-variable { color: black; }
.cm-s-solidity span.cm-variable-2, .cm-s-solidity span.cm-mathematicalAndCryptographic  { color: #b11; }
.cm-s-solidity span.cm-version { color: #b11; }
.cm-s-solidity span.cm-functionName,.cm-s-solidity span.cm-number,.cm-s-solidity span.cm-etherUnit  { color: #219; }
.cm-s-solidity span.cm-parameterValue { color: rgb(33, 111, 114);}
.cm-s-solidity span.cm-contractRelated { color: rgb(33, 111, 114);}
.cm-s-solidity span.cm-qualifier, .cm-s-solidity span.cm-addressFunction{ color: #555; }
.cm-s-solidity span.cm-keyword { color: #00f;}
.cm-s-solidity span.cm-builtin , .cm-s-solidity span.cm-docReserve  { color: #30a; }
.cm-s-solidity span.cm-abi , .cm-s-solidity span.cm-doc { color: rgb(85, 109, 190) }
.cm-s-solidity span.cm-link { color: #762; }
.cm-s-solidity span.cm-error { background-color: #fdd; }
.cm-s-solidity span.cm-atom,.cm-s-solidity span.cm-operator, .cm-s-solidity span.cm-errorHandling { color: gray; }

.cm-s-solidity .CodeMirror-activeline-background { background: #e8f2ff; }
.cm-s-solidity .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }
`
