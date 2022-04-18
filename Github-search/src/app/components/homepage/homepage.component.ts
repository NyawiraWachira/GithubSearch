import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  username: string;
  userDetail: any;
  repos: any;

  
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile(this.username).subscribe({
      complete:()=>{console.log("successfully done!");
    },
      next :(data:any=[])=> {
        this.userDetail=data;
        console.log(this.userDetail);
      }

    })
    this.profileService.getProfileRepos(this.username).subscribe(repos=>{
      console.log(repos);
      this.repos= repos;
    })
  }
  

  }

