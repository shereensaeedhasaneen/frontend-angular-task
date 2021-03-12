import { Component, OnInit } from '@angular/core';
import { ProgramsServiceService } from 'src/app/services/programs-service.service';
import { Iprograms } from 'src/app/viewmodels/iprograms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  programs:Iprograms[] |any=[];
  cityarr :any=[];
  uniqueCityArr:any=[];
  
  fieldarr :any=[];
  uniqueFieldArr:any=[];

  schoolarr :any=[];
  uniqueSchoolArr:any=[];
  defaultChoiceProgram:string ='Bachelor';
  defaultChoiceLanguage:string ='All';
  selected:string ='Paris';
  field:string = 'Computer Science & IT';
  school:string="EPITA";

  headercity:string;


  constructor(private api_data_service:ProgramsServiceService) { }

  //// Get All Programs /////
  ngOnInit(): void {
    this.api_data_service.getAlldata().subscribe(
      (res)=>{
        this.programs=res;
        this.getUniqeCities();
        this.getUniqeFields();
        this.getUniqeSchools();
        console.log(this.schoolarr);
       
      }
      ,(err)=>{console.log(err);}
    )
  }
///// Filter City array to remove Duplicate ////
  getUniqeCities(){
     for(let i=0;i<this.programs.length;i++){
          this.cityarr.push(this.programs[i].city);
        }
        this.uniqueCityArr = this.cityarr.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
      })
     // console.log(this.uniqueCityArr);
  }

//// Filter Type array To remove Duplicate ///
  getUniqeFields(){
    for(let i=0;i<this.programs.length;i++){
         this.fieldarr.push(this.programs[i].type);
       }
       this.uniqueFieldArr = this.fieldarr.filter(function(elem, index, self) {
         return index === self.indexOf(elem);
     })
    
    }
/// Filter School list to remove dublicate ///
 getUniqeSchools(){
  for(let i=0;i<this.programs.length;i++){
       this.schoolarr.push(this.programs[i].school);
     }
     //console.log(this.arr);
     this.uniqueSchoolArr = this.schoolarr.filter(function(elem, index, self) {
       return index === self.indexOf(elem);
   })
  
}

////// select city from search bar ///
oncityChangesearch(city){
 this.headercity=city;
}

search(){
  if(this.headercity!=''){
    this.api_data_service.getAllwithspecificcity(this.headercity).subscribe(
      (res)=>{
        this.programs=res;}
        ,(err)=>{console.log(err);}
      )
      
  
  }
  else{
    alert('please choose city first');
  }
}
//// Selected City ////
onChange(city){
  this.api_data_service.getAllwithspecificcity(city).subscribe(
    (res)=>{
      this.programs=res;}
      ,(err)=>{console.log(err);}
    )
    this.selected=city;
}
/// Selected Level ///
chooseprogram(e) {
  this.api_data_service.getAllwithspecificlevel2(e).subscribe(
    (res)=>{
      this.programs=res;}
      ,(err)=>{console.log(err);}
    )
    this.defaultChoiceProgram=e;
}
/// Selected type ///
onChangefield(field){
  this.api_data_service.getAllwithspecificfield(field).subscribe(
    (res)=>{
      this.programs=res;}
      ,(err)=>{console.log(err);}
    )
}
/// Selected School ///
onChangeschool(scl){
  this.api_data_service.getAllwithspecificschool(scl).subscribe(
    (res)=>{
      this.programs=res;}
      ,(err)=>{console.log(err);}
    )
}
/// Selected Language ///
chooselanguage(e){
  this.api_data_service.getAllwithspecificlangauge(e).subscribe(
    (res)=>{
      this.programs=res;}
      ,(err)=>{console.log(err);}
    )
this.defaultChoiceLanguage=e;
}

filter(){
  console.log(this.defaultChoiceProgram + this.defaultChoiceLanguage +this.selected);
  this.api_data_service.getAllwithspecificdata(this.defaultChoiceLanguage,this.selected,this.defaultChoiceProgram).subscribe(
    (res)=>{
      this.programs=res;}
      ,(err)=>{console.log(err);}
    )
}
}
