// class Chai {
//     flavor: string;
//     price: number;

//     constructor(flavor: string, price: number) {
//         this.flavor = flavor;
//         this.price = price;
//     }
// }

// const masalaChai = new Chai("masala", 25);
// console.log(masalaChai);

class Chai {
    public flavor: string = "masala";
    private secretIngredient: string = "cardamom";

    reveal(){
        return  this.secretIngredient; // OK
    }
}   



class Shop {
    protected shopName: string = "Infiity's Chai Shop";
}
class Branch extends Shop {
    getShopName() {
        return this.shopName; // OK
    }
}


class Wallet {
    #balance: number = 100; // Private field

    getBalance() {
        return this.#balance; // OK
    }
}
const myWallet = new Wallet();
myWallet.getBalance(); // OK



class ModernChai {
    private _latte: string = "strong";

    get latte() {
        return this._latte; // OK
    }

    set latte(value: string) {
        this._latte = value; // OK
    }
}

const w = new ModernChai();
w.latte = "mild"; // OK



class EkChai {
    static shopName: string = "Ek Chai Shop";

    constructor(public flavor: string) {}
}
console.log(EkChai.shopName); // OK



abstract class MeriChai {
    abstract make() : void; // Abstract method
}

class SpecialChai extends MeriChai {
    make() {
        console.log("Making special chai!"); // OK
    }
}