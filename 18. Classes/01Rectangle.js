class Rectangle{
    #width; #height; #color;
    constructor(width,height,color){
        //this.checkParameters(width)
        //this.checkParameters(height)
        
        this.#width=Number(width);
        this.#height=Number(height);
        this.#color=color;
        
        
    }
    checkParameters(parameter){
        if (!Number(parameter)||!parameter===''||Number(parameter<=0)){
            throw new Error('The parameter must be a positive number. Empty strings are not allowed');
        }
    }
    set width(width) {
        //this.checkParameters(width);
        this.#width=width;
    }
    get width(){
        return this.#width;
    }

    set height(height){
        //this.checkParameters(height);
        this.#height=height;
    }
    get height(){
        return this.#height;
    }
    set color(color){
        this.#color=color;
    }
    get color(){
        return this.#color;
    }
    calcArea(){
        return this.width*this.height
    }
}

let rect = new Rectangle(0.55,5);
console.log(rect.calculateArea());
rect.width=-7;
console.log(rect.calculateArea())