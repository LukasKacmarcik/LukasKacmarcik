class Counter {
  counter: number;
  initialValue: number;

  constructor(counter:number = 0) {
    this.counter = counter;
    this.initialValue = this.counter;
  }

  public add(number: number = 1) {
    this.counter += number;
  }
  public get() {
    console.log(this.counter); 
  }
  public reset() {
    this.counter = this.initialValue;
  }
}

// let pocitadlo = new Counter();
// console.log(pocitadlo.counter);
// pocitadlo.add();
// console.log(pocitadlo);
// pocitadlo.get();
// pocitadlo.reset();
// pocitadlo.get();

// let ppocitadlo = new Counter(10);
// console.log(ppocitadlo.counter);
// ppocitadlo.add(3);
// console.log(ppocitadlo);
// ppocitadlo.get();
// ppocitadlo.reset();
// ppocitadlo.get()