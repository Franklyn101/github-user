import { ComponentFixture } from '@angular/core/testing';
import { Component, inject } from '@angular/core';
import { GithubUsersService } from '../github-users.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-github-details',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule
    
  ],
  templateUrl: './github-details.component.html',
  styleUrl: './github-details.component.scss'
})
export class GithubDetailsComponent {
  githubUsersService = inject(GithubUsersService);

  user: any;

  ngOnInit(): void {
    this.githubUsersService.getJsonValue().subscribe((data: any) => {
     this.user = data;
    });
  
  }

}
