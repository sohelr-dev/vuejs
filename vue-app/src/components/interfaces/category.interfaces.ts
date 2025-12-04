export interface CategoryType{
     id:number;
     name:string;
     is_inactive:number;
     created_at?:string;
}
const defaultCategory:CategoryType={
     id:0,
     name:"",
     is_inactive:0,
     created_at:"",
}
export default defaultCategory;