const Tree = require('./tree')
class ExpressionTree extends Tree{

    constructor(data){
        super(data)
        this.root = data
    }

    result = function(node=this.root){
    switch (node.operator) {
      case "+":
        return this.result(node.left) + this.result(node.right);
      case "-":
        return this.result(node.left) - this.result(node.right);
      case "x":
        return this.result(node.left) * this.result(node.right);
      case "÷":
        return this.result(node.left) / this.result(node.right);
      default:
        return node.value;
    }
    }
}

module.exports = ExpressionTree