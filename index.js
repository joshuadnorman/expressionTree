const assert = require("assert");


class Node{
    constructor(operator,value,left,right){
        if ((!left)&&(!right)&&(!value)){
            // This would mean we have passed just an operator as a leaf mode 
            // which would cause a faulty arithmetic expression according
            // to my limited mathmetic knowledge
            throw new Error("Leaf not cannot be an operator")
        }
        this.operator = operator;
        if ((right && right.constructor.name=="Node") || (right==null)){
            this.right = right
        }
        if ((left && left.constructor.name=="Node") || (left==null)){
            this.left = left
        }
        if ((value && typeof(value)=="number")||(value==null)){
            this.value = value
        } else {
            throw new Error("Values in expression tree need to be a Number")
        }
    }
}

class Tree{
    constructor(data){
        if ((data != null) && (data.constructor.name=="Node")){
            this.root = data;
        } else {
            throw new Error("First element in tree needs to be a Node")
        }
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
  new Node("", 6.0, null, null)
)
);


try {
    assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
    assert.strictEqual(2, tree.result());
    console.log("Assertions passed successfully")
} catch (error) {
    console.error("Assertions failed , something is wrong")
}
