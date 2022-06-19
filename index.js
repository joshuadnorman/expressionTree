const assert = require("assert");


class Node{
    constructor(operator,value,left,right){
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree{
    constructor(data){
        this.root = data;
    }

    toString = function(node=this.root){
        if (node==null) return
            switch (node.operator) {
                case "+":
                    return `(${this.toString(node.left)} + ${this.toString(node.right)})`;
                case "-":
                    return `(${this.toString(node.left)} - ${this.toString(node.right)})`;
                case "x":
                    return `(${this.toString(node.left)} x ${this.toString(node.right)})`;
                case "÷":
                    return `(${this.toString(node.left)} ÷ ${this.toString(node.right)})`;
                default:
                    return node.value.toString();
    }
}
};

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

const tree = new ExpressionTree(
new Node(
  "÷",
  null,
  new Node(
    "+",
    null,
    new Node("", 7, null, null),
    new Node(
      "x",
      null,
      new Node("-", null, new Node("", 3, null, null), new Node("", 2, null, null)),
      new Node("", 5, null, null)
    )
  ),
  new Node("", 6, null, null)
)
);


assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());