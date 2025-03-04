// repl.js

document.getElementById('runBtn').addEventListener('click', function() {
    const code = document.getElementById('editor').value;
    const tokens = lexer(code); // Tokenize the code
    const ast = parser(tokens);  // Parse the tokens into an AST
    const result = evaluator(ast);  // Evaluate the AST and get the result
  
    document.getElementById('output').textContent = result;
  });
  
