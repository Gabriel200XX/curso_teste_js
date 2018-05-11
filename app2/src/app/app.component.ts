import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from './service-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private serviceTest: ServiceTestService) {

  }
  title = 'app';

  public ola(): void {
    this.title = '1';
    this.met();
  }

  ngOnInit(): void {
    this.ola();
  }

  public met(): void {
    this.title = '3';
    this.serviceTest.example(this.title).then(result => {
      this.title = result;
    });
  }

  private metPrivate() {
    this.title = '5';
  }
}
