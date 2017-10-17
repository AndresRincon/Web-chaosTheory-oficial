import { Component } from '@angular/core';

@Component({
	selector: 'raiders',
	templateUrl: './raiders.component.html'
	

})

export class raidersComponents{
	public listado_raiders 	= 'listado de raiders';
	public cadena:string 	=  'Cadena de texto';
	public array_ejemplo:Array<any> 	=  ['Cadena de texto', 'Otra'];
}
