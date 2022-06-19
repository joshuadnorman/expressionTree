const ExpressionTree = require("./expressionTree")
const Node = require('./node')


//These tests already exist in Tree test , but i have included them just in case
test("should throw error if tree parameter is not node", () => {
    expect(()=>{
        new ExpressionTree("Invalid Argument")
    }).toThrow("First element in tree needs to be a Node")
    expect(()=>{
        new ExpressionTree()
    }).toThrow("First element in tree needs to be a Node")
    expect(()=>{
        new ExpressionTree(new Node("+",5,null,null))
    }).not.toThrow("First element in tree needs to be a Node")
})

test("toString function should exist",()=>{
    tree = new ExpressionTree(new Node("+",null,new Node(null,5,null,null),new Node(null,5,null,null)))
    typeof(tree.toString()=="function")
})

test("toString should return arithmetic string",()=>{
    tree = new ExpressionTree(new Node("+",null,new Node(null,5,null,null),new Node(null,5,null,null)))
    expect(tree.toString()).toStrictEqual("(5 + 5)")
})

test("result function should exist",()=>{
    tree = new ExpressionTree(new Node("+",null,new Node(null,5,null,null),new Node(null,5,null,null)))
    typeof(tree.result()=="function")
})

test("result should return result of arithmetic expression",()=>{
    tree = new ExpressionTree(new Node("+",null,new Node(null,5,null,null),new Node(null,5,null,null)))
    expect(tree.result()).toStrictEqual(10)
})