const assert = require("assert");

// const Node = (operator, value, left, right) => {
//   const result = function () {
//     switch (this.operator) {
//       case "+":
//         return left.result() + right.result();
//       case "-":
//         return left.result() - right.result();
//       case "x":
//         return left.result() * right.result();
//       case "÷":
//         return left.result() / right.result();
//       default:
//         return value;
//     }
//  };

//   const toString = function () {
//     switch (this.operator) {
//       case "+":
//         return `(${left.toString()} + ${right.toString()})`;
//       case "-":
//         return `(${left.toString()} - ${right.toString()})`;
//       case "x":
//         return `(${left.toString()} x ${right.toString()})`;
//       case "÷":
//         return `(${left.toString()} ÷ ${right.toString()})`;
//       default:
//         return value.toString();
//     }
//   };

//   return {
//     operator,
//     value,
//     left,
//     right,
//     result,
//     toString
//   };
// };


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

const tree = new Tree(
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


console.log(tree.toString())
//assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
//assert.strictEqual(2, tree.result());