class node{
  constructor(val){
    this.data = val
    this.next = null
  }
}

class ll{
  constructor(){
    this.head = new node("Leave me alone...")
    this.tail = this.head
    this.length = 0
  }
  
  //PUSH Operation 
  push(val){
    if(this.head.next === null){
        let newnode = new node(val)
        this.head.next = newnode
        this.tail = newnode
        this.length++
    }
    else{
      let pre = this.head
      while(pre.next!==null){
        pre = pre.next
      }
      let newnode = new node(val)
      pre.next = newnode
      this.tail = newnode
      this.length++
    }
  }
  
  //POP Operation 
  pop(){
    if(this.head.next!==null){
      let pre1 = this.head
      let pre2 = pre1
      while(pre1.next!==null){
        pre2 = pre1
        pre1 = pre1.next
      }
      this.tail = pre2
      this.tail.next = null
      this.length--
    }
    else{
      console.log("list is empty man...")
    }
  }
  
  //UNSHIFT Operation
  unshift(val){
    let newnode = new node(val)
    if(!this.head.next){
      this.tail = newnode
    }
    let pre = this.head
    newnode.next = pre.next
    pre.next = newnode
    this.length++
  }
}

const myll = new ll()
myll.unshift(666)
myll.push(1)
myll.push(2)
myll.pop()
myll.unshift(10)
myll.push(3)
myll.unshift(5)
console.log(myll)