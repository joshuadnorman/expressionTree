I tried to break up the different parts of the tree into their respective classes

Node : 
* This should probably have a better name such as BinaryNode as it has left and right values , 
    and there may be requirement for a type Node with children for a more extensive tree
* This only allows Node/null to be added to the left and right values
* Value needs to be a type of number , integer/decimal

Tree : 
* Tree only returns the toString function as we may want to create a tree where we do not run a result,
    however this is limited due to the structure of the Node 
* The constructor requires a Node in order to build the tree

ExpressionTree : 
* This extends tree so that we can still print the string result but also generate the result

Additions i would like to add : 
* Operator dictionary to the ExpressionTree and Tree in order to allow further arithmetic operators to be added and handled,
with a function mapped that would handle the left and right values accordingly 


Notes: 
* I was receiving a windows script host popup which i have never received before ,
but npm start and npm run tests were still working. I will investigate this further as i think it may be machine specific 
* I moved the classes all into their own files for simplicity

TLDR : 
* Classes in their own files
* Tests included
* npm run test - Run Tests
* npm run start - Run index.js which includes assertions from specification