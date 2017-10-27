import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchFilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
	transform(items: any[], criteria: any): any {

	    return items.filter(item =>{
	       for (let key in item ) {
	         if((""+item[key]).includes(criteria)){
	            return true;
	         }
	       }
	       return false;
	    });
	}
}