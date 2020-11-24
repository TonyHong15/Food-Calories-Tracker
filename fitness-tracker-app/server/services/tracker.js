"use strict"

class FoodTracker{
    constructor(itemRepo){
        this.itemRepo = itemRepo;
    }

    getAllFood(){
        return this.itemRepo.find({cond});
    }

    addFood(item){
        return this.itemRepo.create({
            foodName: item.foodName,
            foodCalories: item.foodCalories
        });
    }

    deleteFood(uid) {
        return this.itemRepo.deleteOne({_id: uid});
    }
    
    getTotalCalories(cart) {
        return this.itemRepo.find({_id: { $in: Object.keys(cart)}})
            .then(items => items.reduce((result, item) => {
                acc.cart[item._id] = {
                    foodName : item.foodName,
                    foodCalories : item.foodCalories
                };
                result += item.foodCalories;
                return result;
            }))
    }

    


}
module.exports = FoodTracker;




