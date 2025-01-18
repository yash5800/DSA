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

  push(val){
    let newnode = new node(val)
    if(this.head.next === null){
        this.head.next = newnode
        this.tail = newnode
        this.length++
    }
    else{
      this.tail.next = newnode
      this.tail = newnode
      this.length++
    }
  }

  reverse(){
    let temp = this.head.next
    this.head.next = this.tail
    this.tail = temp
    let next = temp
    let pre = null
    for(let i = 0; i < this.length; i++){
      next = temp.next
      temp.next = pre
      pre = temp
      temp = next
    }
  } 
}

const myll = new ll()
myll.push(1)
myll.push(2)
myll.push(3)
myll.reverse()

console.log(myll)