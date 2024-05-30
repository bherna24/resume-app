import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css']
})
export class CertsComponent implements OnInit {
  pdfUrl = '../../../assets/img/brendaHernandez_SQLCodecademy.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
