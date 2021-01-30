class Food {
    constructor(){
        milkImg = loadImage("Milk.png");
        foodStock = 0;
    }

    getFoodStock(){
        var foodStockRef = database.ref('foodStock');
        foodStockRef.on("value",function(data){
            foodStock = data.val()
        })
    }

    updateFoodStock(count){
        database.ref('/').update({
            foodStock:count
        })
    }
   
    display(){
        var x = 100, y =145;

        imageMode(CENTER);
       
        this.getFoodStock();
        if(foodStock != 0){
            for(var i = 0; i < foodStock; i++){
                if(i%10==0){
                    x = 100;
                    y=y+70;
                }
                image(milkImg,x,y,70,70);
                x=x+30;
            }
       }
    }
}

