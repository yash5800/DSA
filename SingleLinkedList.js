//Single Linked List Push Method
//Single Linked List Pop Method
//Single Linked List Unshift Method
//Single Linked List Shift Method
//Single Linked List GET FIRST Method
//Single Linked List GET LAST Method
//Single Linked List GET ELEMENT BY INDEX Method
//Single Linked List SET Method
//Single Linked List INSERT Method
//Single Linked List SIZE Method
//Single Linked List CLEAR Method


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
      pre2.next = null
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

  //SHIFT Operation
  shift(){
    let pre = this.head.next
    if(pre!==null){
      this.head.next = pre.next
      this.length--
      pre.next = null
    }
    else{
      console.log("list is empty man...")
    }
  }

  //GETFIRST Operation
  getFirst(){
    if(!this.head.next){
      console.log("list is empty man...")
    }
    else{
      return this.head.next
    }
  }

  //GETLAST Operation
  getLast(){
    if(typeof(this.tail.data) == 'string'){
      console.log("list is empty man...")
    }
    else{
      return this.tail
    }
  }

  //GET Operation
  get(index){
     if(this.length == 0) console.log("list is empty man...")
     else if(this.length - 1 > index && index >= 0 ){
       let pre = this.head.next
       for(let i = 0; i < index; i++){
          pre = pre.next
       }
       return pre  
     }
     else console.log("Index out view...")
  }

  //SET Operation like updating
  set(index,val){
    if(this.length == 0) console.log("list is empty man...")
    else if(this.length - 1 > index && index >= 0 ){
      let pre = this.get(index)
      pre.data = val
      return pre
    }
    else console.log("Index out view...")
  }

  //INSERT Operation 
  insert(pos,val){
    let newnode = new node(val)

    if(pos === 's') this.unshift(val)
    else if(pos === 'e') this.push(val)
    else{
      if(pos === 0) this.unshift(val)
      else if(pos > this.length - 1) console.log("Index out view...")
      else{
         let pre = this.get(pos-1)
         newnode.next = pre.next
         pre.next = newnode
         this.length++
         pre=null
      }
    }
  }

  //SIZE Operations
  size(){
    return this.length
  }

  //CLEAR Operations
  clear(){
    this.head.next = null
    this.tail = this.head
    this.length = 0
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
myll.shift()
console.log(myll.set(0,3))
myll.insert(3,1)
console.log(myll.size())
myll.clear()

console.log(myll)
