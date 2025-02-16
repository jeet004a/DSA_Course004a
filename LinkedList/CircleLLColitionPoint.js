//Detected the position where linked list colide
function checkDetectionPoint(head) {
    let slow = head
    let fast = head
    let c = 1
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next

        if (slow == head) {
            slow = head
            while (slow != fast) {
                slow = slow.next
                fast = fast.next
                if (slow == fast) {
                    break
                }
            }
            return slow
        }
    }

    return null
}