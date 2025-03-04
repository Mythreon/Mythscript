// lexer.js

function lexer(code) {
    const tokens = [];
    const lines = code.split('\n').map(line => line.trim()).filter(line => line);
  
    lines.forEach(line => {
      // Remove content inside [] (treat as comment)
      line = line.replace(/\[.*?\]/g, '').trim();
      if (line === '') return; // Skip empty lines after removing comments
  
      // Tokenize the line into variables, numbers, and operators
      const tokenized = line.match(/([a-zA-Z_][a-zA-Z0-9_]*|\d+|[=+\-*\/\(\)])/g);
      if (tokenized) {
        tokens.push(...tokenized);
      }
    });
  
    return tokens;
  }
  
