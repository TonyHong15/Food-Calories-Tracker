"use strict"

class FoodTracker{
    constructor(itemRepo){
        this.itemRepo = itemRepo;
    }

    getAllFood(){
        return this.itemRepo.find({});
    }

    addFood(item){
        return this.itemRepo.create({
            name: item.name,
            price: item.price 
        });
    }

    deleteFood(uid) {
        return this.itemRepo.deleteOne({_id: uid});
    }
    
    getTotalCalories() {

    }

    


}
module.exports = FoodTracker;




