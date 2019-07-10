//递归实现
//时间复杂度：O(n)
//空间复杂度: O(n)
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
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let tail = head.next;
    head.next = null
    let newHead = reverseList(tail);
    tail.next = head;
    return newHead;
};

//非递归实现
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
var reverseList = function(head) {
    // if(!head || !head.next) return head;
    // let newList = new ListNode(head.val);
    // let copy = head.next;
    // while(copy) {
    //     let temp = new ListNode(copy.val);
    //     temp.next = newList;
    //     newList = temp;
    //     copy = copy.next;
    // }
    // return newList;

    var a = null;
    var b = head;
    var c = head;
    while(b) {
        c = c.next;
        b.next = a;
        a = b;
        b = c;
    }
    return a;
};
