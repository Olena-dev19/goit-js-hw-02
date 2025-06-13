'use strict'
function getShippingCost(country) {
    switch (country) {
        case 'Australia':
            let country1 = 'Australia';
            let price1 = 170;
            let message1 = `Shipping to ${country1} will cost ${price1} credits`;
            return message1; 
        
        case 'China':
            let country2 = 'China';
            let price2 = 100;
            let message2 = `Shipping to ${country2} will cost ${price2} credits`;
            return message2;
        case 'Chile':
            let country3 = 'Chile';
            let price3 = 250;
            let message3 = `Shipping to ${country3} will cost ${price3} credits`;
            return message3;

        case 'Jamaica':
            let country4 = 'Jamaica';
            let price4 = 120;
            let message4 = `Shipping to ${country4} will cost ${price4} credits`;
            return message4;
        default:
            let messageNo = 'Sorry, there is no delivery to your country';
            return messageNo;
    }
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"