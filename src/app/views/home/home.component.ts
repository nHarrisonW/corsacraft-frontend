import { Component } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allPosts:any[]=[];
  featuredPosts:any[]=[];
  latestPosts:any[]=[];
constructor(private postService:PostServiceService){
  // this.featuredPosts=this.getFeaturedPosts();
  // this.latestPosts=this.getLatestPosts();

  this.allPosts=postService.getPosts();

}
getFeaturedPosts():any[]{
  return this.postService.posts.filter(post => post.featured)
  console.log(this.postService.posts);
}
getLatestPosts():any[]{
  const latestPosts = this.postService.posts;
  return this.postService.posts;

}
}
