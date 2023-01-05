import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.queryParams['id'],
      name: this.route.queryParams['name'],
    };

    this.route.params.subscribe((param: Params)=>{
      this.user = {
        id: this.route.queryParams['id'],
        name: this.route.queryParams['name'],
      };
    })
  }
}
