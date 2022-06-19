const Tree = require("./tree")
const Node = require('./node')

test("should throw error if tree parameter is not node", () => {
    expect(()=>{
        new Tree("Invalid Argument")
    }).toThrow("First element in tree needs to be a Node")
    expect(()=>{
        new Tree()
    }).toThrow("First element in tree needs to be a Node")
    expect(()=>{
        new Tree(new Node("+",5,null,null))
    }).not.toThrow("First element in tree needs to be a Node")
})

test("toString function should exist",()=>{
    tree = new Tree(new Node("+",null,new Node(null,5,null,null),new Node(null,5,null,null)))
    typeof(tree.toString()=="function")
})

test("toString should return arithmetic string",()=>{
    tree = new Tree(new Node("+",null,new Node(null,5,null,null),new Node(null,5,null,null)))
    expect(tree.toString()).toStrictEqual("(5 + 5)")
})