/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 方法1 转成数组 
// 时间复杂度 O(n)
// 空间复杂度 o(n)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if(!head) return head;
    let record = [];
    while(head) {
        record.push(head);
        head = head.next;
    }
    return record[Math.floor(record.length / 2)]
};

// 方法2 快慢双指针
// 时间复杂度O(n)
// 空间复杂度O(1)

var middleNode1 = function(head) {
    if(!head) return head;
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}