class Film { 

    private id:number;
    private title: string;
    private price: number;
    private genre: string;
    private score: number;
    private about: string;

    constructor(id: number, title: string, price: number, genre: string, score: number, about: string) {

        this.id = id;
        this.title = title;
        this.price = price;
        this.genre = genre;
        this.score = score;
        this.about = about;
    }

    getId():number{
        return this.id;
    }

    setId(newId:number):void {
        this.id = newId;
    }

    getTitle(): string{
        return this.title;
    }

    setTitle(newTitle: string): void{
        this.title = newTitle;
    }

        getPrice():number{
        return this.price;
    }

    setPrice(newPrice:number):void {
        this.price = newPrice;
        }
    
    getGenre(): string{
        return this.genre;
    }

    setGenre(newGenre: string): void{
        this.genre = newGenre;
    }

     getScore():number{
    return this.score;
    }

    setScore(newScore:number):void {
        this.score = newScore;
    }

    getAbout(): string{
        return this.about;
    }

    setAbout(newAbout: string): void{
        this.about = newAbout;
    }
}




var film1 = new Film(501, "Pets", 5, "funny", 5, "Pet is an American/Spanish psychological thriller film written by Jeremy Slater, directed by Carles Torrens, and starring Dominic Monaghan, Ksenia Solo, Jennette McCurdy, and Nathan Parsons");

var film2 = new Film(502, "Test", 5, "funny", 5, "Pet is an American/Spanish psychological thriller film written by Jeremy Slater, directed by Carles Torrens, and starring Dominic Monaghan, Ksenia Solo, Jennette McCurdy, and Nathan Parsons");


function addGenre(fgenre: string, film: Film):string{
    var newGenre = fgenre + "," + film.getGenre();
    film.setGenre(newGenre);
    var test = film.getGenre();
    return test;    
}


function averageScore(socre1: number, score2: number, score3: number):number{

    return (socre1 + score2 + score3) / 3;
}


function rateScore(rate1: number, rate2: number, rate3: number):number{

    return rate1;

}


function genreAsString(str1: string,str2: string) {

var str3 = str1.concat( str2 ); 
    return str3;
}

function toString(film:Film): string{
    var filmString = film.getId() + film.getTitle() + film.getPrice() + film.getScore() + film.getGenre() + film.getAbout();
    filmString.toString();
    return filmString;
}


console.log(genreAsString("genreAsString1: Funny", "genreAsString2: Horro"));

console.log("average score is:"+ averageScore(3, 4, 5)+"    "+"Rate is:"+rateScore(2,3,5));

console.log(toString(film1));
console.log(toString(film2));

console.log(film1.getId() + 'name' + film1.getTitle() + 'price:' + film1.getPrice() + 'genre:' + film1.getGenre() + 'rating:' + film1.getScore()+
    'description' + film1.getAbout());

console.log(addGenre("horror", film1));
console.log(addGenre("horror2", film1));