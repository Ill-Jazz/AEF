import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.scss']
})
export class AllFriendsComponent implements OnInit {

  allFriends: any;

  public async getData(url: string): Promise <any>{
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(data => this.allFriends = data);
    return;
  }

  ngOnInit(): any {
    this.getData('http://localhost:9000/allFriends');
  }

}
