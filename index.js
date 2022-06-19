const assert = require("assert");
const Node = require("./node");
const ExpressionTree = require("./expressionTree")

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
