import { Component } from '@angular/core';
import groupData  from '../assets/data.json';

interface Group {
  id: number;
  firstName: string;
  surname: string;
  age: number;
  gender: string;
  friends: number[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'internship-test';
  data: Group[] = groupData;
}