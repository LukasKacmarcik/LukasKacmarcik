class BlogPost  {
  autorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(autorName:string, title:string, publicDate: string, text?:string) {
    this.autorName = autorName;
    this.title = title;
    this.publicationDate = publicDate;
  }
}

let blog1 = new BlogPost('John Doe', 'Lorem ipsum', '2000.05.04');
blog1.text = 'Lorem ipsum dolor sit amet.';
let blog2 = new BlogPost('Tim Urban', 'Wait but why', '2010.10.10');
blog2.text = ' popular long-form, stick-figure-illustrated blog about almost everything.';
let blog3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', '2017.03.28');
blog3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn\’t want to be the center of attention. When I asked to take his picture outside one of IBM\’s New York City offices, he told me that he wasn\’t really into the whole organizer profile thing.';
console.log(blog1);
console.log(blog2);
console.log(blog3);
