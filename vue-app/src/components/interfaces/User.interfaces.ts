export interface Users {
     id:Number;
     name:string;
     title?:string;
     email?:string;
     details?:string;
     password?:string;
     gender?:string;
}
const defaultUsers:Users={
     id:0,
     name:"",
     title:"",
     email:"",
     details:"",
     password:"",
     gender:"",
}
export default defaultUsers;