import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'retainedsearch.component.html',
    styleUrls: ['retainedsearch.component.css',
                '../app.component.css',]

})

export class RetainedSearchComponent {
  title = "Retained Search";

  constructor(private router: Router) { }

  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });
  }
}
