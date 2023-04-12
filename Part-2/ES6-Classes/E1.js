class Stack{
    constructor()
    {
        let ctr=0;
    }

    get count()
    {
        console.log(this.ctr);
    }

    
    arr=[];
    push(value)
    {
      this.arr.push(value);
      this.ctr++;
      console.log(this.arr);
    }

    pop()
    {
        if(this.arr.length===0) throw new Error('Empty Stack');
        this.arr.pop();
        this.ctr--;
        console.log(this.arr);
    }

    peek()
    {   if(this.arr.length===0) throw new Error('Empty Stack');
        console.log(this.arr[this.arr.length-1]);
    }


}

const s=new Stack();
s.push(5);
s.push(10);
s.push(50);
s.pop();
s.peek();
s.count;
s.pop();
s.pop();
s.pop();
s.peek();
