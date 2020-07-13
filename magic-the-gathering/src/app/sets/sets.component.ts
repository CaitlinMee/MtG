import { Component, OnInit } from '@angular/core';
import { HttpSetsService} from '../Http/http-sets.service'

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {
  sets: any;

  constructor(private setsService: HttpSetsService) { }

  getSets(): void {
    this.setsService.getSets();
  }

  ngOnInit(): void {
    this.getSets
  }

}
