// Definition for singly-linked list
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const hasCycle = (head: ListNode | null): boolean => {
  // initiate both pointers at the head
  let slowPointer: ListNode = head;
  let fastPointer: ListNode = head;

  // while there is no null value within the linked list
  while (fastPointer !== null && fastPointer.next !== null) {
    // let slow pointer move by one spot
    slowPointer = slowPointer.next;
    // let fast pointer move by two spots
    fastPointer = fastPointer.next.next;
    // if slow and fast point land on the same spot
    if (slowPointer === fastPointer) {
      // return true
      return true;
    }
  }
  return false;
}
