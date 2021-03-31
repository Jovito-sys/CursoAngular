import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent  {

  name ='joao';
  apelido='Govo';
  idade=12;
  empresa='';
  getValue(event:Event){
    if((<HTMLInputElement>event.target).value =='sim'){
      this.empresa='blabla';
    }else{
      this.empresa='';
    }
  }
  
}
