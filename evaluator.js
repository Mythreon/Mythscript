// evaluator.js

function evaluator(ast) {
    let variables = {};
    let results = [];
  
    ast.forEach(statement => {
      if (statement.type === 'returnStatement') {
        results.push(evaluateExpression(statement.expression, variables));
      } else if (statement.type === 'Assignment') {
        variables[statement.varName] = evaluateExpression(statement.valueExpr, variables);
      }
    });
  
    return results.join('\n');
  }
  
  function evaluateExpression(expr, variables) {
    let evaluatedExpr = expr.map(token => {
      if (isNaN(token)) {
        // Replace variable with its value if it exists
        return variables[token] !== undefined ? variables[token] : token;
      }
      return token;
    }).join(' ');
  
    try {
      return eval(evaluatedExpr); // Simple eval for expressions like a + b
    } catch (e) {
      return `Error: ${e.message}`;
    }
  }
  
