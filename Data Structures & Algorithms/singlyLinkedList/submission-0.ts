class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
    
    private head: ListNode | null;
    private size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;
        let curr = this.head!;
        for (let idx = 0; idx < index; idx++) {
            curr = curr.next!;
        }
        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const node = new ListNode(val);

        if (this.head === null) {
            this.head = node;
        } else {
            let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = node;
        }
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(i: number): boolean {
        if (i < 0 || i >= this.size) return false;

        if (i === 0) {
        this.head = this.head!.next;
        } else {
        let prev = this.head!;
        for (let idx = 0; idx < i - 1; idx++) {
            prev = prev.next!;
        }
        prev.next = prev.next!.next;
    }

    this.size--;
    return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const result: number[] = [];
        let curr = this.head;
        while (curr !== null) 
        {
            result.push(curr.val);
            curr = curr.next;
        }
         return result;

    }
}
