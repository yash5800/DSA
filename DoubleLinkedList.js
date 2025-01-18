// Double Linked List Push Method
// Double Linked List Pop Method
// Double Linked List Unshift Method
// Double Linked List Shift Method

class node{
  constructor(val){
    this.data = val
    this.rlink = null
    this.llink = null
  }
}

class dll{
  constructor(){
     this.head = new node("Leave me alone...")
     this.tail = this.head
     this.length = 0
  }

  push(val){
    let newnode = new node(val)
    this.tail.rlink = newnode
    newnode.llink = this.tail
    this.tail = newnode
    this.length++
  }

  pop(){
    if(this.length == 0){
      console.log("Empty List!")
    }
    else{
      this.tail = this.tail.llink
      this.tail.rlink = null
      this.length--
    }
  }

  unshift(val){
    if(this.length == 0){ 
       this.push(val) 
    }
    else{
      let newnode = new node(val)
      newnode.rlink = this.head.rlink
      newnode.llink = this.head
      this.head.rlink.llink = newnode
      this.head.rlink = newnode
      this.length++
    }
  }

  shift(){
    if(this.length > 1){
      let pre = this.head.rlink
      this.head.rlink.rlink.llink = this.head
      this.head.rlink = this.head.rlink.rlink
      pre.llink = null
      pre.rlink = null
      pre = null
      this.length--
    } 
    else{
      this.pop()
    }
  }


}

const mydll = new dll()
mydll.push(10)
mydll.pop()
mydll.push(11)
mydll.push(12)
mydll.unshift(0)
mydll.shift()
console.log(mydll)
