
import { BusinessInfo } from "./Business.js"
import { AgentInfo } from "./Agent.js"
import { businessesFromNY, manufacturingBusinesses, useBusinesses, purchasingAgents } from "./BusinessProvider.js";

export const addBusinessesToDom = (arrayOfBusinesses, selector, htmlStructure) => {
   const contentTarget = document.querySelector(selector)

    arrayOfBusinesses.forEach(
        businessObject => {
            contentTarget.innerHTML += htmlStructure(businessObject)
        }
    );
}


export const allTheLists = () => {
    const allBiz = useBusinesses()
    const allSelector = ".business-info"
    const htmlBiz = BusinessInfo
    addBusinessesToDom(allBiz, allSelector, htmlBiz)

    const NYBiz = businessesFromNY
    const NYSelector = ".businessList--newYork"
    addBusinessesToDom(NYBiz, NYSelector, htmlBiz)

    const manufacturingBizArray = manufacturingBusinesses
    const manufacturingSelector = ".businessList--manufacturing"
    addBusinessesToDom(manufacturingBizArray, manufacturingSelector, htmlBiz)

    const ArrayOfAgents = purchasingAgents
    const AgentSelector = ".agents"
    const htmlAgents = AgentInfo
    addBusinessesToDom(ArrayOfAgents, AgentSelector, htmlAgents)
}
