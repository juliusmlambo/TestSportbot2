import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Person } from '../Person';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people:Person[];
  person = new Person();

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
   
}
  
addPerson() {
  this.apiService.addPerson(this.person)
    .subscribe(data => {
      console.log(data)
    
   
    })      
}





}





