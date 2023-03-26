
type stringId = {
    id: string
}


type numberId = {
    id: number
}



type Id<T> = T extends string? stringId : numberId;


let idOne:Id<string> = {id:'dfjksl'};
// console.log(idOne);

let idTwo:Id<number> = {id:234};



type check<X> = {
    ch:  X extends string ? string : number
}

type kit<Y> = {
    kitty: Y
}