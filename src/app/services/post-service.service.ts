import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }

  posts=[
    {
      // BOOLS
      car:false,
      featured:true,

      // TRACK
      name:'UberRing',
      country:'SA',
      length:'4.507',
      turns:4,
      
      // CAR
      make:'',
      model:'',
      transmission:'',
      drivetrain:'',
      year:0,
      horsepower:0,
      
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
          src:'https://www.tripsavvy.com/thmb/wmqYR-PRLtGF4_zflqnKy8BeOr8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Nuerburgring-595569813df78cdc290e4a57.jpg',
        },
      ]
    },
    {
      // BOOLS
      car:true,
      featured:true,

      // TRACK
      name:'jnsd',
      country:'ds[vdvs',
      length:'sdvsdvsdv',
      turns:'dvssdvsdv',
      
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
    },
    {
      // BOOLS
      car:true,
      featured:false,

      // TRACK
      name:'',
      country:'',
      length:'',
      turns:'',
      
      // CAR
      make:'Mecredes-AMG',
      model:'W12',
      transmission:'Sequential',
      drivetrain:'RWD',
      year:2021,
      horsepower:902,
      
      // CSP
      
      // UNIVERSAL
      tags:['formula'],
      rating:4,
      file_size:14002030,
      downloads:3405,
      type:'Open Wheel',
      author:'PookieSt0re',
      description:`
      [innerHTML]
      `,
      imgs:[
        {
          label:'first label',
          src:'https://e0.365dm.com/21/03/2048x1152/skysports-mercedes-w12-car_5289936.jpg',
        },
      ]
    },
  ]

  getPosts(){
    return this.posts;
  }

  //RETURN ONLY OUR CARS
  getCars(){
    return this.posts.filter(posts=>posts.car)
  }
  //RETURN ONLY OUR TRACKS
  getTracks(){
    return this.posts.filter(posts=>!posts.car)
  }
  getSupercars(){
    return this.posts.filter(posts=>posts.type.includes('Supercar'))
  }

  //LETS MAKE A FUNCTION THAT WILL ALLOW ME TO SEARCH FOR WHAT BRAND OF CAR I WANT
  // getSearch(searchString:string, searchBy:string){
  //   const lowercase = searchString.toLowerCase();
  //   return this.posts.filter(post=>{
  //     const lowercaseValue=post[searchBy].toLowerCase();
  //     return lowercaseValue.includes(lowercase)
  //   })
  // }
}
