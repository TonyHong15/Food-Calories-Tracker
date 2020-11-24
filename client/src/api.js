const serverUrl = "http://localhost:5000"

export function loadFood() {
    const request = new Request(serverUrl + "/api/foods", {
        method: "GET",
        headers: {
            Aceept:  "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }
            throw new Error(res.status);
        });
}

export function addFood(name, calories) {
    const request = new Request(serverUrl + "/api/food", {
        method: "PUT",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({foodName: name, foodCalories: calories}) 
    });
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return;
            }
            throw new Error(res.status);
        });
        
}

export function deleteFood(itemId) { 
    const request = new Request(serverUrl + "/api/food", {
        method: "DELETE",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ itemId: itemId })
    });
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return;
            }
        }).catch(console.log("error"))
        
}

export function calculateCalories(cart) {
    const request = new Request(serverUrl + "/api/total_calories", {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ cart: cart })
    });
    return fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }
            throw new Error(res.status);
        });
        
}