async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/Dev-JoaoSouza/PORTFOLIO-DIO/refs/heads/main/data/profile.json"
    const fetching = await fetch(url)
    return await fetching.json()
}