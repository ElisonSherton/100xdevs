/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Non optimal shaky solution

var addTwoNumbers = function(l1, l2) {
    let carry_over = 0;

    result = new ListNode(-1);
    first_dig = result;

    while (true) {
        
        output = l1.val + l2.val + carry_over;
        console.log(output);
        
        digit = output % 10;
        carry_over = Math.floor(output / 10);
        result.val = digit;
        result.next = new ListNode(-1);
        result = result.next;

        if (l1.next !== null && l2.next !== null){
            l1 = l1.next;
            l2 = l2.next;
        }
        else if (l1.next !== null && l2.next === null){
            l1 = l1.next;
            l2 = new ListNode(0);
        }
        else if (l1.next === null && l2.next !== null){
            l1 = new ListNode(0);
            l2 = l2.next;
        }
        else{
            break;
        }

    };

    console.log(result.val);

    if (carry_over !== 0) {
        result.val = carry_over
    }
    else {
        new_result = new ListNode(first_dig.val);
        new_result_head = new_result;
        let current = first_dig.next;
        while (current !== null) {
            if (current.val !== -1){
                new_result.next = new ListNode(current.val);
                new_result = new_result.next;
            }
            current = current.next;
        }
        return new_result_head;
    }

    return first_dig;

};

// Advanced SOlution: Creating an iterable in JS

var addTwoNumbers = function(l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return iter(l1, l2);
};