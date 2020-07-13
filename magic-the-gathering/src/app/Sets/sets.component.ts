import { Component, OnInit } from '@angular/core';
import { SetsService } from './API/sets.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {

  constructor(private setsService: SetsService) { }

  ngOnInit(): void {
    this.setsService.getSets().subscribe((res)=>{
      this.setsService.getSets(this.setsService.nextpage).subscribe((res)=>{
        console.log();
    });
  });
  }

}
