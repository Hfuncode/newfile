class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  STTL(l1, l2) {
    if (!l1 && !l2) {
      return "empty";
    }
    let num_l1 = [];
    let num_l2 = [];
    let curr_l1 = l1;
    let curr_l2 = l2;
    while (curr_l1 && curr_l2) {
      if (curr_l1) {
        num_l1.unshift(curr_l1.value);
        curr_l1 = curr_l1.next;
      }
      if (curr_l2) {
        num_l2.unshift(curr_l2.value);
        curr_l2 = curr_l2.next;
      }
    }
    console.log(num_l1);
    console.log(num_l2);
    let sum = num_l1.join() + num_l2.join;

    for (let i = sum.toString().length - 1; i >= 0; i--) {
      let node = new Node(parseInt(sum[i]));
      if (this.head === null) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    }
  }

  sum_two_link_list(link1, link2) {
    if (!link1 && !link2) {
      return "empty";
    }

    let sum = 0;
    let remainder = 0;

    let curr_l1 = link1;
    let curr_l2 = link2;

    while (curr_l1 || curr_l2) {
      let l1_value = curr_l1 ? curr_l1.value : 0;
      let l2_value = curr_l2 ? curr_l2.value : 0;
      sum = l1_value + l2_value + remainder;
      sum = sum.toString();
      if (sum.length == 2) {
        remainder = parseInt(sum[0]);
        let node = new Node(parseInt(sum[1]));
        if (this.head == null) {
          this.head = node;
        } else {
          node.next = this.head;
          this.head = node;
        }
      } else {
        remainder = 0;
        let node = new Node(parseInt(sum));
        if (this.head === null) {
          this.head = node;
        } else {
          node.next = this.head;
          this.head = node;
        }
      }
      if (curr_l1) {
        curr_l1 = curr_l1.next;
      }
      if (curr_l2) {
        curr_l2 = curr_l2.next;
      }
    }
  }
}

let link_item = new LinkList();
// link_item.insert(4);
// link_item.insert(2);
// link_item.insert(5);
// link_item.insert(8);
link_item.STTL(
  {
    value: 8,
    next: {
      value: 5,
      next: {
        value: 2,
        next: { value: 9, next: { value: 2, next: { value: 4, next: null } } },
      },
    },
  },
  {
    value: 8,
    next: { value: 5, next: { value: 2, next: { value: 4, next: null } } },
  }
);
console.log(link_item.head);
