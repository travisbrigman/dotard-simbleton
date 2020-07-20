export const AgentInfo = (purchasingAgents) => {
    return `
        <article class="agents">
            <h2>${purchasingAgents.fullName}</h2>
            <p>${purchasingAgents.companyName}</p>
            <p>${purchasingAgents.phoneNumber}</p>
        </article>
    `
}
