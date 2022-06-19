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

module.exports = Tree