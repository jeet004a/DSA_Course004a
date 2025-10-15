// Q1.

// run node index.js in the terminal
const data = [
    { product: 'Laptop', month: 'Jan', sales: 200 },
    { product: 'Laptop', month: 'Feb', sales: 150 },
    { product: 'Laptop', month: 'Mar', sales: 300 },
    { product: 'Laptop', month: 'Apr', sales: 250 },
    { product: 'Laptop', month: 'May', sales: 280 },
    { product: 'Laptop', month: 'Jun', sales: 320 },

    { product: 'Phone', month: 'Jan', sales: 300 },
    { product: 'Phone', month: 'Feb', sales: 250 },
    { product: 'Phone', month: 'Mar', sales: 330 },
    { product: 'Phone', month: 'Apr', sales: 400 },
    { product: 'Phone', month: 'May', sales: 420 },
    { product: 'Phone', month: 'Jun', sales: 500 },

    { product: 'Tablet', month: 'Jan', sales: 180 },
    { product: 'Tablet', month: 'Feb', sales: 120 },
    { product: 'Tablet', month: 'Mar', sales: 150 },
    { product: 'Tablet', month: 'Apr', sales: 170 },
    { product: 'Tablet', month: 'May', sales: 160 },
    { product: 'Tablet', month: 'Aug', sales: 190 },
];

/* Question:
 
Transform Data to below Format:
output: 
{
  Jan: { Phone: 300, Laptop: 200, Tablet: 180, total_sales: 680 },
  Feb: { Phone: 250, Laptop: 150, Tablet: 120, total_sales: 520 },
  Mar: { Phone: 330, Laptop: 300, Tablet: 150, total_sales: 780 },
  Apr: { Phone: 400, Laptop: 250, Tablet: 170, total_sales: 820 },
  May: { Phone: 420, Laptop: 280, Tablet: 160, total_sales: 860 },
  Jun: { Phone: 500, Laptop: 320, total_sales: 820 },
  Aug: { Tablet: 190, total_sales: 190 }
}
*/

/*
Q2.
How to improve api response when a frontend developer call a api with pagination request.
*/



//Solve

let result={}

for(let i=0;i<data.length;i++){
    // let m
    if(!result[data[i].month]){
        result[data[i].month]={total_sale: 0}
    }
    
    
   result[data[i].month][data[i].product]=data[i].sales
   result[data[i].month].total_sale+=data[i].sales
}

console.log(result)