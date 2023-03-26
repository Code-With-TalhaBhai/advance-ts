// These are built-in types in typescript. These are lot of 
// Complete list is --> https://www.typescriptlang.org/docs/handbook/utility-types.html



// 1. Partial
interface PartialProperties {
    name: string,
    age: number,
    skills: string[],
    young: boolean,
    experienced: boolean
}

// Not all properties required it can be work partially
// let properties : PartialProperties = {
let properties : Partial<PartialProperties> = {
    name: 'talha',
    age: 32,
    young: true,
}


// 2. Required
interface RequiredProperties {
    name?: string,
    age?: number,
    skills?: string[],
    young: boolean,
    experienced: boolean
}

// All properties required even the optional properties are also required
let properties2: Required<RequiredProperties> = {
    name: 'adeen',
    age: 34,
    skills: ['aur'],
    young: true,
    experienced: true
}



// 3. Extract