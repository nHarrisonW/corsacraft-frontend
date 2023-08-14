import { Component } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allPosts:any[]=[];
  featuredPosts:any[]=this.postService.posts.filter(posts=>posts.featured);
  latestPosts:any[]=this.postService.getPosts();
  allCars:any[]=this.postService.getCars();
  allTracks:any[]=this.postService.getTracks();

  constructor(private postService:PostServiceService){
  // this.featuredPosts=this.getFeaturedPosts();
  // this.latestPosts=this.getLatestPosts();

  this.allPosts=postService.getPosts();

}
getFeaturedPosts():any[]{
  return this.allPosts.filter(post => post.featured)
}
getLatestPosts():any[]{
  const latestPosts = this.postService.posts;
  return this.postService.posts;
}
getTracks():any[]{
  return this.allTracks;
}
getCars():any[]{
  return this.allCars;
}

}
