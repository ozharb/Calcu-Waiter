//this store object will hold all the data needed for the functions in this calculator

const store = {
  meals: [],
};

function tipTotal(){
        store.meals.reduce((sum,meal)=>sum+=meal.tip);
}
function mealCount(){
       store.meal.length;
  }
function averageTip(){
      store.meals.reduce((avg,meal) =>
  avg+=meal.tip/store.mealCount, 0)
}



//calc functions
function calcTipAvg(array){
  array.reduce((avg,meal) =>
 avg+=meal.tip/store.mealCount, 0)
}

function subTotalcalc (meal){
  return (parseFloat(meal.price) * parseFloat(meal.taxRate)) + parseFloat(meal.price)
}
function tipCalc(meal) {
 return parseFloat(meal.price) * parseFloat(meal.tip)
}
const averageTipPerMeal = (calcTipAvg(store.meals))
//***handler functions***//






/*clear the inputs without effecting the Customer Charges or the My Earnings Info*/

const handleCancel = function(){

  $('#js-meal-details').on('click',".cancel", function (event) {
    event.preventDefault();
    console.log('clicked cancel')
    let html =''
    html = `<table id="customer">
            <tr>
            <td>
              <input value="Base Meal Price: $"disabled>
            </td>
            <td>
            <input type="number" name="js-base-meal-price" class="js-base-meal-price" placeholder="0.00">
           
            </td>
            </tr>
            <tr>
              
            <td>
              <input value = "Tax Rate: %" disabled>
                </td>
            <td>
             
            <input type="number" name="tax-rate" class="tax-rate" placeholder=".00" step=".01">
             
            </td>
            </tr>
            <tr>
            <td>
              <input value= "Tip Percentage: %" disabled>
              </td>
            <td>
             
            <input type="number" name="tip-percentage" class="tip-percentage" placeholder="00">
           
            </td>
            </tr>
          </table>`
           $(".meal-details-table").html(html) 
  })

}
const handleReset = function(){

  $('#js-meal-details').on('click',".reset", function (event) {
    console.log('clicked reset')
   //store.meals.splice(0,store.meals.length)
    let meal =  {price: 0, tableName: "", id: cuid(), tip: 0, taxRate: 0};
    
    store.meals.push(meal)
    store.meals.length = 0
    updateOutputCust(meal)
    updateOutputEarnings(store.meals)
    
  })
}
 function createMealObject(){
 let meal =  {price: 0, tableName: "", id: cuid(), tip: 0, taxRate: 0};
    event.preventDefault();
  
    const baseMealPrice = $('.js-base-meal-price').val();
    $('.js-base-meal-price').val('');
    meal.price = baseMealPrice;
    const taxRate = $('.tax-rate').val();
    $('.tax-rate').val('');

    meal.taxRate = (taxRate/100);
    const tip = $('.tip-percentage').val();
    $('.tip-percentage').val('');

    meal.tip = (tip/100);
  
    return meal
 }
const handleSubmit = function(){



  $('#js-meal-details').on('click',".submit",function (event) {
    console.log('submitted')
    const meal = createMealObject()
    
    store.meals.push(meal)
    updateOutputCust(meal)
    updateOutputEarnings(store.meals)
    console.log(store.meals)
  });

}



function updateOutputCust(meal){
 const subTotal = subTotalcalc(meal).toFixed(2)

console.log(parseFloat(meal.taxRate))
const tip = tipCalc(meal).toFixed(2)

const total = (parseFloat(subTotal) + parseFloat(tip)).toFixed(2)

  let html = `
<table id="customer">
              <tr>
              <td>   
              <input value="Subtotal: $" disabled>
              </td>
              <td>
              <input class="calcValue" value="${subTotal}">
              </td>
              </tr>
              <tr>
              <td>
              <input value="Tip: $" disabled> 
              </td>
              <td>
              <input class="calcValue" value="${tip}">
              </td>
              </tr>
              <tr>
              <td>
              <input value="Total: $" disabled>
              </td>
              <td>
                <input class="calcValue" value="${total}">

                </td>

            </tr>
      </table>`
  $(".output-tables-customer").html(html);
}
function updateOutputEarnings(){

   console.log("this ran")
function tipTotal(array){
         return array.reduce((sum,meal)=>sum+=tipCalc(meal), 0);
}
function mealCount(array){
       return array.length;
  }
function averageTip(array){
      return array.reduce((avg,meal) =>
  avg+=meal.tip/mealResult, 0)
}
  const mealResult = mealCount(store.meals);
  const avgTip = averageTip(store.meals);
  const tipResult = tipTotal(store.meals).toFixed(2);
  console.log("this also ran")
  let results = `<table id="customer">
            <tr>
              <td>   
            <input value="Total: $" disabled>
            </td>
            <td>
         
            <input class="calcValue" value="${tipResult}">
         
            </td>
            </tr>
            <tr>
            <td>
              <input value="Meal Count:" disabled> 
              </td>
            <td>
              <input class="calcValue" value="${mealResult}">
              </td>
            </tr>
            <tr>
               <td>
                 <input value="Average Tip: %" disabled>
                 </td>
         
              <td>
    
                <input class="calcValue" value="${avgTip}">

                </td>

            </tr>
      </table>`
   $(".output-tables-earnings").html(results);
}
 
 /**
 * This function will be our callback when the
 * page loads. It is responsible for initially 
 * rendering the calculator, then calling 
 * our individual functions that handle new 
 *  submission and user clicks on the 
 * "submit", "cancel", and "reset" buttons for each entry. 
 *
 */
const main = function () {
  handleSubmit();
  handleCancel();
  handleReset();
  
}

$(main)