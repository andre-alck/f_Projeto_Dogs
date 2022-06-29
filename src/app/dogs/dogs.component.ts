import { Component, OnInit } from '@angular/core';
import { dogs } from '../dogs';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  dogs?: dogs;

  constructor(private DogsService: DogsService) {}

  ngOnInit(): void {}

  getdogs(): void {
    this.DogsService.getdogs().subscribe((dogs) => {
      this.dogs = dogs;
    });
  }
}
