export class category {
    Id : number;
    Name : string;
}

export class product{
    Id : number;
    Name : string;
    CategoryId : number;
    Price : number;
    Image : string;
    AddedToCart : boolean;
    Quantity : number;
}
