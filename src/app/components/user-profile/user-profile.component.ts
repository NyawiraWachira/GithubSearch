import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username: string;
  userDetail: any;
  repos: any;


  constructor(private active : ActivatedRoute,private profileService: ProfileService,
    private route : Router) { }

  ngOnInit(): void {
    this.active.params.subscribe(params=>{
      this.username=params['id'];
      console.log("params=",this.username);
    })
    this.profileService.getUser(this.username).subscribe({
      complete:()=>{console.log("successfully done!");
    },
      error:()=> {
        alert("you have entered a wrong username!");
        this.route.navigate(['search']);
      },
      next :(data:any=[])=> {
        this.userDetail=data;
        console.log(this.userDetail);
      }

    })
    this.profileService.getRepos(this.username).subscribe(repos=>{
      console.log(repos);
      this.repos= repos;
    })
  }
  

}
