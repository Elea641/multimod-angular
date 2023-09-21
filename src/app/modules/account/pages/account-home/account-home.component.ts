import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent {
  users: User[] = [];
  user: User = {
    id: 0,
    username:"",
    firstname: "",
    lastname: "",
    email: ""
  }

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = parseInt(params['id']);
      if (userId) {
        this.userService.getUsers().subscribe(userJsonFile => {
          this.users = userJsonFile;
          const foundUser = this.users.find(user => user.id === userId);
          if (foundUser) {
            this.user = foundUser;
          }
        })
      }
    });
      
      // if (userId) {
      //   this.userService.getUserById(userId).subscribe(user => {
      //     this.user = user;
      //   });
      // }
  }
}
