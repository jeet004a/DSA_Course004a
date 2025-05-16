// 237. Delete node from LL
//This question cotains only the logic for delete a node
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next

};