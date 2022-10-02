import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutinaDTO } from 'app/models/RutinaDTO';

@Component({
  selector: 'app-summary-rutina',
  templateUrl: './summary-rutina.page.html',
  styleUrls: ['./summary-rutina.page.scss'],
})
export class SummaryRutinaPage implements OnInit {
  rutina: RutinaDTO = new RutinaDTO();

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.rutina = JSON.parse(params.special);
        console.log('aqui');
        console.log(this.rutina);
      }
    });
  }

  ngOnInit() {}
}
