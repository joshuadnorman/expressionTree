const Node = require('./node')

test("should throw an error if left value is not null and not a node", () => {
    expect(()=>{
        new Node("+",1,"should fail",new Node("/",5,null,null))
    }).toThrow("Left value must be Node/null")
})

test("should throw an error if right value is not null and not a node", () => {
    expect(()=>{
        new Node("+",1,new Node("/",5,null,null),"should fail")
    }).toThrow("Right value must be Node/null")
})

test("should throw an error if value is not a type of number", () => {
    expect(()=>{
        new Node(null,"this is an invalid parameter",new Node("/",5,null,null),new Node("/",5,null,null))
    }).toThrow("Values in expression tree need to be a Number")
    expect(()=>{
        new Node(null,7.485,new Node("/",5,null,null),new Node("/",5,null,null))
    }).not.toThrow("Values in expression tree need to be a Number")
    expect(()=>{
        new Node(null,1,new Node("/",5,null,null),new Node("/",5,null,null))
    }).not.toThrow("Values in expression tree need to be a Number")
})

test("should throw an error if no value and no operator are populated", () => {
    expect(()=>{
        new Node(null,null,new Node("/",5,null,null),new Node("/",5,null,null))
    }).toThrow("Value or Operator required")
})