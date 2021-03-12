import { Component, OnInit } from '@angular/core';
import { ProgramsServiceService } from 'src/app/services/programs-service.service';
import { Iprograms } from 'src/app/viewmodels/iprograms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  programs:Iprograms[] |any=[];
  cityarr :any=[];
  uniqueCityArr:any=[];
  
  constructor(private api_data_service:ProgramsServiceService) { }

  ngOnInit(): void {
    this.api_data_service.getAlldata().subscribe(
      (res)=>{
        this.programs=res;
        this.getUniqeCities();
      
      }
      ,(err)=>{console.log(err);}
    )
  }

  getUniqeCities(){
    for(let i=0;i<this.programs.length;i++){
         this.cityarr.push(this.programs[i].city);
       }
       this.uniqueCityArr = this.cityarr.filter(function(elem, index, self) {
         return index === self.indexOf(elem);
     })
    
 }

}
