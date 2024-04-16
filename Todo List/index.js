let root = document.getElementById("root")
let enterOffersinput = document.getElementById("inputOffers")

let offer1 = "industrial software design"
let offer2 = "mobile application"
let offer3 = "e-commerce website"
let offer4 = "corporate website"
let offers = []


function OurOffers() {
    offers.push(enterOffersinput.value)
    root.innerHTML = `
<P>this our the offers of the company</P>
<ul>
    ${offers.map(
        (o) => `<li>${o.toUpperCase()}</li>`
        )}
    
</ul>
`;
}

