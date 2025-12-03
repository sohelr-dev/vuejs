export interface PostFake{
     id:number;
     title:string;
     userId:number;
     body:string;
}
const defaultPost:PostFake={
     id:0,
     title:"",
     userId:0,
     body:"",
}
export default defaultPost;