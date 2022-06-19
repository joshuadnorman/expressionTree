class Node{
    constructor(operator,value,left,right){
        if ((!left)&&(!right)&&(!value)){
            // This would mean we have passed just an operator as a leaf mode 
            // which would cause a faulty arithmetic expression according
            // to my limited mathmetic knowledge
            throw new Error("Leaf node cannot be an operator");
        }
        this.operator = operator;
        if ((right && right.constructor.name=="Node") || (right==null)){
            this.right = right
        } else {
            throw new Error("Right value must be Node/null");
        }
        if ((left && left.constructor.name=="Node") || (left==null)){
            this.left = left
        } else {
            throw new Error("Left value must be Node/null");
        }
        if ((value && typeof(value)=="number")||(value==null)){
            this.value = value
        } else {
            throw new Error("Values in expression tree need to be a Number");
        }
    }
};

module.exports = Node