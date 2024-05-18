// Object And Array Districting
let list={
    Name:"Akash",
    Village:"Ptc",
    Diss:"KGR",
        nuobj:{
            nm:"Jkla",
            Vilg:"Gtli",
            dis:"Ctg"
        }
}
let {Name,Village,Diss,nuobj:{nm,Vilg,dis}}=list;
console.log(Name,Village, dis);


let ar=["Jolekha","Ramzan","Kashem","Rojob"];
let [fst,nd,rd,th]=ar;
console.log(th);