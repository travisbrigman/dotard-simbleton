
export const BusinessInfo = (businessObject) => {
    return `
        <article class="business-info">
            <h2>${businessObject.companyName}</h2>
            <p>${businessObject.addressFullStreet}</p>
            <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
        </article>
    `
}