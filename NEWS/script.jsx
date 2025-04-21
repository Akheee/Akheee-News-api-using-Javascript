let newskey="0d90fdc1c5ae42a48c78c3647b89a560"


let search_btn=document.getElementById("search_btn")

search_btn.addEventListener("click",()=>{
    let search_term=document.getElementById("search_term").value
    let fetchnews=async()=>{
        let data=await fetch(`https://newsapi.org/v2/everything?q=${search_term}&apiKey=0d90fdc1c5ae42a48c78c3647b89a560`)
       let finaldata=await data.json()
       let finalnews=finaldata.articles


       let news_container=document.getElementById("news_container")
       news_container.innerHTML=" ";

     
       finalnews.forEach((article)=>{
            news_container.innerHTML+=`
            <article class=card_container>
            <img src=${article.urlToImage} id=img>
            <h3 id=title>${article.title}</h3>
            <p id=description>${article.description}</p>
            <a href=${article.url} id=link target=_blank><button id=read_btn>Read Full Article</button></a>
            </article>
            `
       })

    }
    fetchnews()
    
})