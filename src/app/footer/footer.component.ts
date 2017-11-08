import { Component, OnInit, Output, ViewChild,  } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event as NavigationEvent  } from "@angular/router";
@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	setClass = false;
	constructor(private router:Router) {
    router.events.forEach((event: NavigationEvent) => {

      //Before Navigation
      if (event instanceof NavigationStart) {
        console.log(event.url)
      }

      //After Navigation
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        if(event.url == '/'){
          this.setClass = true;
        }else{
          this.setClass = false;
        }
      }
    });
  }
	ngOnInit() {

	}

}
