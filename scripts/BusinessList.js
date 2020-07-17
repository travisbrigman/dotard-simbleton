
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
