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
}

const mydll = new dll()
console.log(mydll)