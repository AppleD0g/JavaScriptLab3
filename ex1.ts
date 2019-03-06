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




var film1 = new Film(501,"Pets",6,"Funny and Adventure",5,"A Jack Russell Terrier named Max lives with his owner Katie in a Manhattan apartment. While she is at work during the day, he hangs out with other pets in the building: tabby cat Chloe, pug Mel, dachshund Buddy, and budgerigar Sweet Pea. One day, Katie adopts Duke, a large mongrel from the pound, leaving Max jealous because of her divided focus on Duke. Enraged by Max's attitude towards him, Duke tries to abandon Max in an alley, but they are both attacked by cats led by Sphynx cat Ozone who removed both dogs' collars and leave them to be caught by Animal Control. Duke fears that he will be put down if he goes back to the pound. When Gidget, a white Pomeranian discovers that Max is missing, she must find him.");


console.log("ID: "+film1.getId() +" "+ "name: " + film1.getTitle() +" "+ "price: " + film1.getPrice() +" " + "genre: " + film1.getGenre() + " "+"rating: " + film1.getScore()+" "+ "description:" + film1.getAbout())



