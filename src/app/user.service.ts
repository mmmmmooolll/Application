import { HttpClient,} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { logIn } from './page8/logIn';
import { payment } from './page8/payment';
import { pyQandA } from './page8/pyQandA';
import { javaQandA } from './page8/javaQandA';
import { sqlQandA } from './page8/sqlQandA';
import { phpQandA } from './page8/phpQandA';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  ngOnInit(): void {
      this.Currentlogin.login = null;
  }
 
  url="http://localhost:3000/database/";
  url2="http://localhost:3000/payment/";
  url3="http://localhost:3000/pyQ&A/";
  url4="http://localhost:3000/phpQ&A/";
  url5="http://localhost:3000/sqlQ&A/";
  url6="http://localhost:3000/javaQ&A/";
  certificate:boolean=false;
  setCer(variable: boolean){
    this.certificate=variable;
  }
  getCer(){
    return this.certificate;
  }
  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get<logIn[]>(this.url);
  }
public  getpayment(){
    return this.http.get<payment[]>(this.url2);
  }
  adddata(data : logIn){
    return this.http.post(this.url,data);
  }
  goingTopy : Boolean = false;
  goingTosql : Boolean = false;
  goingTophp : Boolean = false;
  goingTojava : Boolean = false;
  img="";
  
  

  setGoingTopy(variable1:Boolean){
    this.goingTopy= variable1;
  }
  getGoingTopy() : Boolean{
   return this.goingTopy;
  }
  setGoingTosql(variable2:Boolean){
    this.goingTosql = variable2;
  }
  getGoingTosql() : Boolean{
    return this.goingTosql;
  }
  setGoingTojava(variable3:Boolean){
    this.goingTojava = variable3;
  }
  getGoingTojava(){
    return this.goingTojava;
  }
  setGoingTophp(variable4:Boolean){
    this.goingTophp = variable4;
  }
  getGoingTophp(){
    return this.goingTophp;
  }
  addpayment(paym:payment,login:logIn){
    
    return this.http.post(this.url2,paym);
  }
  deservesphpcer:boolean=false;
  deservespythoncer:boolean=false;
  deservesjavacer:boolean=false;
  deservessqlcer:boolean=false;
  setphpcer(variable : boolean){
    this.deservesphpcer= variable;
  }
  setjavacer(variable : boolean){
    this.deservesjavacer= variable;
  }
  setsqlcer(variable : boolean){
    this.deservessqlcer= variable;
  }
  setpythoncer(variable:boolean){
    this.deservespythoncer= variable;
  }
  getpythoncer(){
    return this.deservespythoncer;
  }
  getphpcer(){
    return this.deservesphpcer;
  }
  getsqlcer(){
    return this.deservessqlcer;
  }
  getjavacer(){
    return this.deservesjavacer;
  }
  tab =[
    {id:'01',livre:'livre',prix:'17'},{id:'02',livre:'livre2',prix:'20'}
  ]

sc:number=0;
Currentlogin : logIn=new logIn();




  getPydata(){
    return this.http.get<pyQandA[]>(this.url3);
  }
  getjavadata(){
    return this.http.get<javaQandA[]>(this.url6);
  }
  getsqldata(){
    return this.http.get<sqlQandA[]>(this.url5);
  }
  getphpdata(){
    return this.http.get<phpQandA[]>(this.url4);
  }




}
