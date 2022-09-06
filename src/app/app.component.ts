import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`

})
export class AppComponent implements OnInit {
  public title: string = "Projeto To Do List";
  public ngOnInit(): void {
  }
}
