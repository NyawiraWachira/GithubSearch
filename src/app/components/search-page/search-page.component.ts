import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  username: string;
  userDetail: any;
  repos: any;

  searchForm : FormGroup;
  

  constructor(private profileService: ProfileService, private route : Router) { }

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


    this.searchForm = new FormGroup({
      username:new FormControl(
        null,
        [Validators.required]
      )


    })
  }
  sendUser(){
    this.username=this.searchForm.value.username;

    this.route.navigate([`user/${this.username}`]);
  }


}

