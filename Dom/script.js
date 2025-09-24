// let productDetails= [
//     {
//         imgUrl : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=70',
//         title : ('Apple iPhone 16 Pro (Natural Titanium, 128 GB'),
//         price : '₹1,07,999',
//         Delivery :'Secure delivery by 19-oct-25'

//     },
//      {
//         imgUrl : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=70',
//         title : ('Apple iPhone 16 Pro (Natural Titanium, 128 GB'),
//         price : '₹1,07,999',
//         Delivery :'Secure delivery by 19-oct-25'

//     },
//      {
//         imgUrl : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=70',
//         title : ('Apple iPhone 16 Pro (Natural Titanium, 128 GB'),
//         price : '₹1,07,999',
//         Delivery :'Secure delivery by 19-oct-25'

//     }
// ]
// let product='<section>';
// for(let i=0 ; i<productDetails.length;i++){
//     product+=`<figure>`
//     product+=`<img src =${productDetails[i].imgUrl}>`
//     product+=`<figcaption> ${productDetails[i].title}</figcaption>`
//     product+=`<figcaption> ${productDetails[i].price}</figcaption>`
//     product+=`<figcaption>${productDetails[i].Delivery}</figcaption>`
//      product+=`</figure>`
// }
// product+=`</section>`;
// document.write(product);
// console.log(product);

// let parentElement=document.createElement('section');
// let figElement=document.createElement('figure');
// let imgElement=document.createElement('img');
//  imgElement.setAttribute('src' ,'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=70');
//  imgElement.setAttribute('alt','Watch')

// let figCaptionElementOne=document.createElement('figcaption');
//     figCaptionElementOneTitle=document.createTextNode('Apple iPhone 16 Pro (Natural Titanium, 128 GB');
//     figCaptionElementOne.appendChild(figCaptionElementOneTitle);

// let figCaptionElementTwo=document.createElement('figcaption');
//  figCaptionElementOnePrice=document.createTextNode(' ₹1,07,999');
//     figCaptionElementTwo.appendChild(figCaptionElementOnePrice);

// let figCaptionElementThree=document.createElement('figcaption');
//  figCaptionElementOneDelivery=document.createTextNode('Delivary by 14-oct-25');
//     figCaptionElementThree.appendChild(figCaptionElementOneDelivery);


// figElement.appendChild(imgElement);
// figElement.appendChild(figCaptionElementOne);
// figElement.appendChild(figCaptionElementTwo);
// figElement.appendChild(figCaptionElementThree);
// parentElement.appendChild(figElement);
// // console.log(parentElement);

// // removeAttribute
// imgElement.removeAttribute('alt');

// // getAttribute
// let url=imgElement.getAttribute('src');
// console.log(url);
// document.body.appendChild(parentElement);


// Table Creation 

let personDetails = [
    { Sno: '1', Name: 'Koti', Course: 'Jfs', Mobile: '9039284248' },
    { Sno: '2', Name: 'Ravi', Course: 'Java', Mobile: '9876543210' },
    { Sno: '3', Name: 'Jyoshna', Course: 'Html', Mobile: '9123456780' },
    { Sno: '4', Name: 'Balayya', Course: 'CSS', Mobile: '9012345678' }
];

let tableElement = '<table border="1" cellpadding="8" cellspacing="0">';


tableElement += '<tr>';
tableElement += '<th>S.No</th>';
tableElement += '<th>Name</th>';
tableElement += '<th>Course</th>';
tableElement += '<th>Mobile</th>';
tableElement += '</tr>';


for (let i = 0; i < personDetails.length; i++) {
    tableElement += '<tr>';
    tableElement += '<td>' + personDetails[i].Sno + '</td>';
    tableElement += '<td>' + personDetails[i].Name + '</td>';
    tableElement += '<td>' + personDetails[i].Course + '</td>';
    tableElement += '<td>' + personDetails[i].Mobile + '</td>';
    tableElement += '</tr>';
}

tableElement += '</table>';


document.write(tableElement);
console.log(tableElement);
