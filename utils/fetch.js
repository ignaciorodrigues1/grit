function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchFacts = async () => {
    await sleep(3000);
    // const headers = new Headers({
    //     Authorization: process.env.SECRET_TOKEN
    // })
    const response = await fetch(process.env.API_PUBLIC_URL);
    const facts = await response.json();
    return facts;
}

export const fetchFact = async (id) => {
    await sleep(3000);
    const response = await fetch(process.env.API_PUBLIC_URL);
    return await response.json();
}