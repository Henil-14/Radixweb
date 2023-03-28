interface Prd<t1,t2,t3>{
    id:t1
    name:t2;
    quantity:t3;
}
class Product<type,type2,type3> implements Prd<type,type2,type3>{
    id:type;
    name:type2;
    quantity: type3;
    constructor(id:type,name:type2,q:type3){
        this.id=id;
        this.name=name;
        this.quantity=q;
    }
}
export {Product}