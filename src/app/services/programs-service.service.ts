import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iprograms } from '../viewmodels/iprograms';
@Injectable({
  providedIn: 'root'
})
export class ProgramsServiceService {

  constructor(private http:HttpClient) { }

  getAlldata():Observable<Iprograms[]>
  {
    return this.http.get<Iprograms[]>('http://localhost:3000/programs');
    
  }
  
  getAllwithspecificdata(Language:string,city:string,level:string,):Observable<Iprograms[]>
  {
    return this.http.get<Iprograms[]>('http://localhost:3000/programs?Language='+Language+'&city='+city+'&level='+level);
    
  }

  getAllwithspecificcity(city:string):Observable<Iprograms[]>
  {
    return this.http.get<Iprograms[]>('http://localhost:3000/programs?city='+city);
    
  }

  getAllwithspecificlevel2(level:string):Observable<Iprograms[]>
  {
    return this.http.get<Iprograms[]>('http://localhost:3000/programs?level='+level);
    
  }

  getAllwithspecificfield(field:string):Observable<Iprograms[]>
  {
    return this.http.get<Iprograms[]>('http://localhost:3000/programs?type='+field);
    
  }

  getAllwithspecificschool(school:string):Observable<Iprograms[]>
  {
    return this.http.get<Iprograms[]>('http://localhost:3000/programs?school='+school);
    
  }

  getAllwithspecificlangauge(lang:string):Observable<Iprograms[]>
  {
    if(lang=='All'){
      return this.http.get<Iprograms[]>('http://localhost:3000/programs?Language=English&Language=French');

    }
    else{
    return this.http.get<Iprograms[]>('http://localhost:3000/programs?Language='+lang);
    }
  }

}
