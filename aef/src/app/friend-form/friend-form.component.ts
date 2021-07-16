import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { AddFriendService } from '../add-friend.service';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent implements OnInit {

  friendModel = new Friend('', '', '', '', '', '', '', '', '', '', '', '', '', '');
  allFriends: any;

  sendFriendData(){
    console.log(this.friendModel);
    this.addFriendService.addFriend(this.friendModel).subscribe(friend => alert('Your data was added. Nice getting to know you'), error => alert("it didn't work"));  
    this.getData('http://localhost:9000/allFriends');
    //document.querySelector('form').reset;
  }

  constructor(private addFriendService: AddFriendService){}

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
