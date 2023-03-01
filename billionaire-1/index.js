let count = 5;
const fetchData = async () => {
    const url = `https://forbes400.onrender.com/api/forbes400?limit=${count}`
    const res = await fetch(url)
    const data = await res.json()
    showData(data)
}
const showData = (data) => {
    const mainCard = document.getElementById('main-card')
    data.forEach(billionaire => {
        console.log(billionaire)
        mainCard.innerHTML += `
        <article class="bg-base-100 shadow-xl my-20 p-3">
                    <p class="text-center font-semibold text-2xl my-4">${billionaire.uri}</p>
                    <div class="card card-side">
                        <figure><img src="${billionaire ?.squareImage}" alt="Movie"/></figure>
                        <div class="card-body">
                          <h2 class="card-title">${billionaire.countryOfCitizenship
                          }</h2>
                          <p>${billionaire.abouts
                          }</p>                         
                        </div>
                      </div>
                </article>
        `
    });
}
const showMoreBtn = document.querySelector('#show-more-btn');
showMoreBtn.onclick = ()=>{
    count+=3;
    fetchData();
}
window.onload = () =>{
    fetchData()
}