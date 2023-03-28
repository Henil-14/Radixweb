import { Product } from "./export";
console.log("-----------export demo----------")
let obj1=new Product<number,string,number>(1,"Trousers",23)
let obj2=new Product<number,string,number>(2,"Tshirts",6)
let obj3=new Product<number,string,number>(1,"Sneakers",4)
let obj4=new Product<number,string,number>(1,"Glasses",7)
let prdArr:Array<Product<number,string,number>>=[obj1,obj2,obj3,obj4]
function purchase<type>(plist:type[],prd:string):void {
   
    for (const iterator of plist) {
       
        if(iterator["name"]==prd){
            
            if(iterator["quantity"]<5){
                console.log("the produc is not in the stock")
            }
            else
            {
                iterator["quantity"]--;
                console.log(`reamining products ${iterator["quantity"]}`)
            }
        }
    } 
}
purchase<Product<number,string,number>>(prdArr,"Sneakers")
purchase<Product<number,string,number>>(prdArr,"Glasses")