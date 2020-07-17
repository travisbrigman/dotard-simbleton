
//import { useBusinesses,businessesFromNY, manufacturingBusinesses } from "./BusinessProvider.js"
import { BusinessInfo } from "./Business.js"
import { businessesFromNY, manufacturingBusinesses, useBusinesses } from "./BusinessProvider.js";


// const contentTarget = document.querySelector(".business-card")

// export const BusinessList = () => {
//     const arrayOfBusinesses = useBusinesses()

//     arrayOfBusinesses.forEach(
//         businessObject => {
//             contentTarget.innerHTML += BusinessInfo(businessObject)
//         }
//     );
// }

export const addBusinessesToDom = (arrayOfBusinesses, selector) => {
   const contentTarget = document.querySelector(selector)

    arrayOfBusinesses.forEach(
        businessObject => {
            contentTarget.innerHTML += BusinessInfo(businessObject)
        }
    );
}


export const allTheLists = () => {
    const allBiz = useBusinesses()
    const allSelector = ".business-info"
    addBusinessesToDom(allBiz, allSelector)

    const NYBiz = businessesFromNY
    const NYSelector = ".businessList--newYork"
    addBusinessesToDom(NYBiz, NYSelector)

    const manufacturingBizArray = manufacturingBusinesses
    const manufacturingSelector = ".businessList--manufacturing"
    addBusinessesToDom(manufacturingBizArray, manufacturingSelector)
}
