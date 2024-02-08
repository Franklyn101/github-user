import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubUsersService } from '../github-users.service';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.scss'
})
export class ShowDetailsComponent{

  userId: any;
  userDetails: any

  constructor(private activatedRoute: ActivatedRoute, private server: GithubUsersService){}


  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(this.userId);

    this.server.getOenJsonValue(this.userId).subscribe((data) => { 
      this.userDetails = data;
    })
  }

}
