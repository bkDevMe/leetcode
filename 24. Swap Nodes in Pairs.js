//非递归写法
//时间复杂度：O(n)
//空间复杂度：O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    
    let dummy = new ListNode();
    
    let a = dummy;
    let b = head;
    let c = b.next;
    let d = c.next;
    while(true) {
        a.next = c;
        c.next = b;
        b.next = d;
        if(!d || !d.next) {
            return dummy.next;
        }
        a = b;
        b = d;
        c = d.next;
        d = c.next;
    }
};


//递归写法
//时间复杂度：O(n)
//空间复杂度：O(n)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let a = head;
    let b = a.next;
    let c = b.next;
    b.next = a;
    a.next = swapPairs(c);
    return b;
};