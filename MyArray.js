class MyArray{
  constructor(){
    this.len = 0;
    this.data = {};
  }

  push(val){
    this.data[this.len++] = val;
  }

  pop(){
    delete this.data[this.len - 1];
    this.len--;
  }

  shift(index){

     for(let i=0; i< this.len ; i++){
       if(this.data[i+1]){
         this.data[i] = this.data[i+1];
       }
     }

     delete this.data[this.len - 1];
     this.len--;
  }

  delete(index){
    const item = this.data[index];

     for(let i=index; i< this.len ; i++){
       if(this.data[i+1]){
         this.data[i] = this.data[i+1];
       }
     }

    delete this.data[this.len - 1];
    this.len--;

     return item;
  }

}

const newarray = new MyArray();
newarray.push("hi")
newarray.push("lo")
newarray.push("king")
newarray.push("hello")
console.log(newarray);
console.log(`Deleted ${newarray.delete(1)}`);
console.log(newarray);
newarray.shift()
console.log(newarray);