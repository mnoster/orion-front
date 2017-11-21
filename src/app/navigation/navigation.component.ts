import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: "navigation.component.html",
    styleUrls: ['navigation.component.css']
})

export class NavigationComponent {
  home = 'Home';
  about = 'About';
  ourteam = 'Our Team';
  vision = 'Vision';
  history = 'History';
  login = 'Login';
  register = 'Register';
}
