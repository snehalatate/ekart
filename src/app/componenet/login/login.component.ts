import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router from @angular/router


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:'',
};

loginObj:any={
  userName:'',
  password:'',
};

constructor(private router: Router){

}

ngOnInit():void{
  const localData=localStorage.getItem('signupUsers');
  if(localData !=null){
    this.signupUsers=JSON.parse(localData);
  }

}

onSignUp(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));

  this.signupObj={
    userName:'',
    email:'',
    password:'',
};
}

onLogin(){
 
  const isUserExists = this.signupUsers.find(m => m.userName==this.loginObj.userName && m.password==this.loginObj.password);
  if(isUserExists != undefined)
    {
    alert('User Loign Successfully!');
    this.router.navigate(['/product']);
  }else{
    alert('Wrong Credentials');
  }

}

}
