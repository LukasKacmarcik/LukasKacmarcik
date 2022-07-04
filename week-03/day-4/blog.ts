import { BlogPost } from "./blog-post";

export class Blog {
  allBlogPosts: BlogPost[] = [];

  public add(blogPoste: BlogPost) {
    this.allBlogPosts.push(blogPoste);
  }

  public delete(indexToRemove: number) {
    this.allBlogPosts.splice(indexToRemove,1);
  }

  public update(indexToUpdate: number, newBlogPoste: BlogPost) {
    this.allBlogPosts.splice(indexToUpdate,1,newBlogPoste);
  }
}

let blog1 = new BlogPost('John Doe', 'Lorem ipsum', '2000.05.04');
blog1.text = 'Lorem ipsum dolor sit amet.';
let blog2 = new BlogPost('Tim Urban', 'Wait but why', '2010.10.10');
blog2.text = ' popular long-form, stick-figure-illustrated blog about almost everything.';
let blog3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', '2017.03.28');

let blog = new Blog();

blog.add(blog1);

blog.add(blog2);

blog.add(blog3)
console.log(blog.allBlogPosts);
blog.delete(0);
console.log(blog.allBlogPosts);
blog.update(1,blog1)
console.log(blog.allBlogPosts);

