// parser.js

function parser(tokens) {
    const ast = [];
    let current = 0;
  
    while (current < tokens.length) {
      let token = tokens[current];
  
      if (token === 'return') {
        current++;
        const expr = parseExpression(tokens, current);
        ast.push({ type: 'ReturnStatement', expression: expr });
        current += expr.length;
      } else if (tokens[current + 1] === '=') {
        const varName = token;
        current += 2; // Skip the variable name and '='
        const valueExpr = parseExpression(tokens, current);
        ast.push({ type: 'Assignment', varName, valueExpr });
        current += valueExpr.length;
      } else {
        current++;
      }
    }
  
    return ast;
  }
  
  // Helper function to parse expressions
  function parseExpression(tokens, current) {
    const expression = [];
    while (current < tokens.length && tokens[current] !== 'return' && tokens[current + 1] !== '=') {
      expression.push(tokens[current]);
      current++;
    }
    return expression;
  }
  
