//递归写法
//时间复杂度：O(l1 + l2)
//空间复杂度：O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return l1 || l2;
     
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }
 };

 //非递归写法
 //时间复杂度O(l1 + l2)
 //空间复杂度O(1)
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return l1 || l2;
     
     let newHead = new ListNode(0);
     let pointer = newHead;
     
     while(l1 || l2) {
         let val1 = l1 ? l1.val : Number.MAX_SAFE_INTEGER;
         let val2 = l2 ? l2.val : Number.MAX_SAFE_INTEGER;
         if(val1 < val2) {
             pointer.next = l1;
             l1 = l1.next;
         } else {
             pointer.next = l2;
             l2 = l2.next;
         }
         pointer = pointer.next;
     }
     return newHead.next;
 };