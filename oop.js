class Person {
    constructor(name, age, hometown){
        this.name = name
        this.age = age
        this.hometown = hometown
        this.isDead = false
    }
    greet(){
        console.log(`Hello from ${this.name}`)
    }
    kill(){
        this.isDead = true
    }
}

let me = new Person("Ouma Rodgers",50,"Accra")
me.greet()
console.log(me.isDead)
me.kill()
console.log(me.isDead)

test = JSON.parse([{ "id": "bitcoin", "name": "Bitcoin", "symbol": "BTC", "rank": "1", "price_usd": "12931.7", "price_btc": "1.0", "24h_volume_usd": "11616400000.0", "market_cap_usd": "217447505378", "available_supply": "16815075.0", "total_supply": "16815075.0", "max_supply": "21000000.0", "percent_change_1h": "0.37", "percent_change_24h": "11.64", "percent_change_7d": "-10.4", "last_updated": "1516470563" } ])
console.log(test[0])