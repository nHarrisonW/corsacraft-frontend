import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }

  posts=[
    {
      // BOOLS
      car:true,
      featured:true,

      // TRACK
      name:'',
      country:'',
      length:'',
      turns:'',
      
      // CAR
      make:'Ferarri',
      model:'488 Pista',
      transmission:'Sequential',
      drivetrain:'RWD',
      year:2023,
      horsepower:711,
      
      // CSP
      
      // UNIVERSAL
      tags:['supercar'],
      rating:4,
      file_size:14002030,
      downloads:3405,
      type:'Supercar',
      author:'PookieSt0re',
      description:`
      [innerHTML]
      `,
      imgs:[
        {
          label:'first label',
          src:'https://hips.hearstapps.com/hmg-prod/images/2019-ferrari-488-pista-107-1528476280.jpg?crop=0.712xw:0.777xh;0.154xw,0.186xh&resize=1200:*',
        },
      ]
    }
  ]

  getPosts(){
    return this.posts;
  }
}
