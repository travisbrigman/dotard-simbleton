
import { useBusinesses } from "./BusinessProvider.js"
import { BusinessInfo } from "./Business.js"


const contentTarget = document.querySelector(".business-card")

export const BusinessList = () => {
    const arrayOfBusinesses = useBusinesses()

    arrayOfBusinesses.forEach(
        businessObject => {
            contentTarget.innerHTML += BusinessInfo(businessObject)
        }
    );
}


  // Create a new array that contains supplies that cost less than $50
// export const inexpensiveSupplies = supplies.filter(supplyObject => {
//     if (supplyObject.price < 50.00) {
//         return true
//     }
//     return false
// })

export const businessesFromNY = businesses.filter(
    businessObject => {
        if (businessObject.addressStateCode === "NY") {
            return true
        }
            return false
    }
)

console.log(businessesFromNY)