
import { BusinessInfo } from "./Business.js"
import { AgentInfo } from "./Agent.js"
import { businessesFromNY, manufacturingBusinesses, useBusinesses, purchasingAgents } from "./BusinessProvider.js";

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {

            //declarimg the Array from BusinessDataProvider here
            const bizArray = useBusinesses()


            const searchQuery = document.getElementById("companySearch").value;
            console.log(searchQuery)

            const searchForBusiness = (searchedTerm) => {
                return bizArray.find(businessObject => businessObject.companyName.toLowerCase().includes(searchedTerm.toLowerCase()))

            }

            const foundBusiness = searchForBusiness(searchQuery)

            //if found biz is undefined update

            if (foundBusiness !== undefined) {
                companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
            } else {
                companySearchResultArticle.innerHTML = `<h2>No Results Found</h2>`
            }
            
        }
    });


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
