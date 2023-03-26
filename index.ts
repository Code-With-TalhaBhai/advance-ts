// 1. Union and intersection

//Union
let a : string | number = 234;
a = '234';


type name = {
    myname: string
}

type age = {
    myage: number
}

// Intersection
let bio : name & age = {
    myname: 'talha',
    myage: 234
}

