// Definition for singly-linked list
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// Iterative
const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  // create placeholder for head of the new linked list
  const head: ListNode = new ListNode();
  let current: ListNode = head;

  // if either list is null, return the other list
  if (!list1 || !list2) return (list1 ? list1 : list2);

  while (list1 && list2) {
    // if list1's value is less than list2
    if (list1.val < list2.val) {
      // next node of current will be the head of list1
      current.next = list1
      // head of list1 will now be list1.next
      list1 = list1.next
      // else is list2's value is less than list1
    } else {
      // next node of current will be the head of list2
      current.next = list2;
      // head of list2 will now be list2.next
      list2 = list2.next
    }
    // after adding new node, shift to next node
    current = current.next
  }

  return head.next;
}

// Time complexity: O(n)
// Space complexity: O(1)

// Recursive
const mergeTwoLists2 = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  // if either list is null, return the other list
  if (!list1 || !list2) return (list1 ? list1 : list2);
  // if val of list2 is greater than val of list1
  if (list1.val < list2.val) {
    // next node of list1 recursively calls the next node in list1 or list2 depending on which one is greater
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(n)
// call stack
