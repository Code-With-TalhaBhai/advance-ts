let name = 'fdjsk';


let name1: typeof name = 'fjdk';


function get_and_head(){
    return {
        item: 'yougurht',
        available: true,
        weight: 23
    }
}


const func = (): ReturnType<typeof get_and_head>=>{
    return {
        item: 'herb',
        available: false,
        weight: 32
    }
}

const obj: ReturnType<typeof get_and_head> = {
    item: 'Mud',
    available: true,
    weight: 43
}