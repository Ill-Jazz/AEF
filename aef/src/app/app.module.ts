import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FriendFormComponent},
  {path: 'friends', component: AllFriendsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendFormComponent,
    AllFriendsComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
