//import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
	public my_Class = 'side-nav';
	public show_back_drop: boolean = false; 
  	constructor() { }
  	@ViewChild('selectElem') el:ElementRef;
    


    ngAfterViewInit() {
        //$(".button-collapse").sideNav();
        /*$(".button-collapse").on('click', function(e){
        	e.preventDefault();
        	console.log(this);
        })*/
        
    }
	ngOnInit() {
		//sidenav.toggle();
	}
  	toggle_class(){
	    if(this.my_Class=="side-nav"){
	    	this.show_back_drop = true;
	        this.my_Class='animated side-nav fadeInLeft show-nav';
	    }else{
	    	this.show_back_drop = false;
	        this.my_Class='side-nav';
	    }
	}

}
//platformBrowserDynamic().bootstrapModule(TopBarComponent);