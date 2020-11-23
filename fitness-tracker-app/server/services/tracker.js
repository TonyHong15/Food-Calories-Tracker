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
            name: item.foodName,
            calories: item.foodCalories
        });
    }

    deleteFood(uid) {
        return this.itemRepo.deleteOne({_id: uid});
    }
    
    getTotalCalories() {
        // Not implemented 
    }

    


}
module.exports = FoodTracker;




