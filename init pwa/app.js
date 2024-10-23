
const appKey = "30f47bdca8904fdc930966e9649445f8"

const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-08-09&sortBy=publishedAt&apiKey="
let mainArea = null
let selector = null
window.addEventListener("load", function(){
    mainArea = document.getElementById("main-area")
    selector = document.getElementById("selector")
    loadNews()
    loadSelector()
})

const loadSelector = async () =>{
    const res = await fetch(`GET https://newsapi.org/v2/top-headlines/sources?apiKey=${appKey}`);
    const data = await res.json();
    
    selector.innerHTML = data.articles.map(item => `<option value="${src.id}">${src}</option>`).join('\n')

}



const loadNews = async () =>{
    const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-08-09&sortBy=publishedAt&apiKey=${appKey}`);
    const data = await res.json();
    
    mainArea.innerHTML = data.articles.map(createCart).join('\n')

}


const createCart = (item) =>{
    return `
    <a href="/">
        <div class="cols-span-1">
            <img src="${item.urlToImage}"/>
            <h1>${item.title}</h1>
        </div>
    </a>
    
    `
}