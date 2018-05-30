export class product{
    Id : number;
    Name : string;
    CategoryId : number;
    Price : number;
    Image : string;
    AddedToCart : boolean;
    Quantity : number;
}


export const products : product[] = [
    { Id : 1 , Name : 'Samsung 192L' , Price : 2000 ,Image : '../../assets/fridge1.jpg' , AddedToCart : false , Quantity : 1, CategoryId : 1} ,
    { Id : 2 , Name : 'LG 190L' , Price : 1000 ,Image : '../../assets/fridge2.jpg' ,AddedToCart : false ,  Quantity : 1,CategoryId : 1},
    { Id : 3 , Name : 'Whirlpool 240L' ,Price : 2200 ,Image : '../../assets/fridge3.jpg' ,AddedToCart : false ,  Quantity : 1, CategoryId : 1} ,
   { Id : 4 , Name : 'Samsung 248L' , Price : 2500 ,Image : '../../assets/fridge4.jpg' , AddedToCart : false , Quantity : 1, CategoryId : 1},
    { Id : 5 , Name : 'Mi LED Smart TV' ,Price : 1170 , Image : '../../assets/tv1.jpg' , AddedToCart : false , Quantity : 1,  CategoryId : 2} , 
    { Id : 6 , Name : 'Sanyo 108cm' ,Price : 1260 , Image : '../../assets/tv2.jpg' , AddedToCart : false , Quantity : 1, CategoryId : 2},
    { Id : 7 , Name : 'Micromax 81cm' , Price : 1980 ,Image : '../../assets/tv3.jpg' ,AddedToCart : false , Quantity : 1,  CategoryId : 2} ,
    { Id : 8 , Name : 'Samsung 6.2 Kg Fully Automatic' ,Price : 1900 ,Image : '../../assets/washingmachine1.jpg' ,AddedToCart : false ,  Quantity : 1, CategoryId : 3},
    { Id : 9 , Name : 'Samsung 6.2 Kg Semi Automatic' ,Price : 1060 ,Image : '../../assets/washingmachine2.jpg' ,AddedToCart : false ,  Quantity : 1, CategoryId : 3},
    { Id : 10 , Name : 'Whirlpool 6.2 Kg' ,Price : 1020 ,Image : '../../assets/washingmachine3.jpg' ,AddedToCart : false ,  Quantity : 1, CategoryId : 3},
    { Id : 11 , Name : 'LG 6.2 Kg' ,Price : 1450 ,Image : '../../assets/washingmachine4.jpg' ,AddedToCart : false ,  Quantity : 1, CategoryId : 3},
    { Id : 12 , Name : 'Samsung 6.8 Kg' ,Price : 2320 ,Image : '../../assets/washingmachine5.jpg' ,AddedToCart : false ,  Quantity : 1, CategoryId : 3},
    { Id : 13 , Name : 'Dell Inspiron Core i3' , Price : 2300 ,Image : '../../assets/laptop1.png' , AddedToCart : false , Quantity : 1, CategoryId : 4},
    { Id : 14 , Name : 'Dell Vostro 15 3000 core' , Price : 3310 ,Image : '../../assets/laptop2.png' , AddedToCart : false , Quantity : 1, CategoryId : 4},
    { Id : 15 , Name : 'Lenovo Core i3 6th Gen' , Price : 4330 ,Image : '../../assets/laptop3.png' , AddedToCart : false , Quantity : 1, CategoryId : 4},
    { Id : 16 , Name : 'Microsoft Surface' , Price : 1340 ,Image : '../../assets/laptop4.png' , AddedToCart : false , Quantity : 1, CategoryId : 4},
    { Id : 17 , Name : 'HP 8th Gen' , Price : 2350 ,Image : '../../assets/laptop5.png' , AddedToCart : false , Quantity : 1, CategoryId : 4},
    { Id : 18 , Name : 'Samsung Core i3' , Price : 1837 ,Image : '../../assets/laptop6.png' , AddedToCart : false , Quantity : 1, CategoryId : 4} 
];