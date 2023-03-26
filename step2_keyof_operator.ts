interface movie {
    name: string,
    hero: string,
    characters: number
}

// keyof operator gives the union of keys of interface


type check_movie = {
    rating: number,
    movie: keyof movie;
};


let movie: check_movie = {
    rating: 33,
    movie: 'characters', // Any of one
    // movie: 'name',
    // movie: 'hero',
    
}