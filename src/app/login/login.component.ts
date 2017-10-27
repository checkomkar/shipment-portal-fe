import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/app.service.httpService';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit {
    private apiUrl = 'http://localhost:57042/api/Home';
    loginGroup: FormGroup;
    constructor(private http: HttpService) {
        this.loginGroup = new FormGroup({
            field: new FormControl('', CustomValidators.email)
        });
    }
    req: Object = {};
    authentication: any;
  	name: any;
  	pass: any;
        ngOnInit() {
            console.log(this.apiUrl);
		//console.log(this.name)
    }

    logName(e) {
        //console.log('hello');
        //console.log(e);
    }

	valSubmit(){
        console.log(this.req);
        console.log(this.loginGroup.controls.field.errors);
		this.http.postDataObservable(this.apiUrl, this.req ).subscribe(data => {
            //this.testResponse = data;
            this.authentication = data;
	    	console.log(data);
		})
	}
}
