import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const CodeSnippet = ({code}) => {
  return (
  	<div className="CodeSnippet">
	    <SyntaxHighlighter language="python" style={dracula} className="codeKeeper">
	    {code}
	    </SyntaxHighlighter>
  	</div>

  );
};

export default CodeSnippet;