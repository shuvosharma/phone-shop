// // plus btn 
// document.getElementById('btn-case-plus').addEventListener('click',function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     newCaseNumber = previousCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;
// })

// // Minus

// document.getElementById('btn-case-minus').addEventListener('click',function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
// })

// Other
function updateCaseNumber(isIncrese){
   
        const caseNumberField = document.getElementById('case-number-field');
        const caseNumberString = caseNumberField.value;
        const previousCaseNumber = parseInt(caseNumberString);
        let newCaseNumber;
        if(isIncrese ===true){
            newCaseNumber = previousCaseNumber + 1;
        }
        else{
            newCaseNumber = previousCaseNumber - 1;
        }
        caseNumberField.value = newCaseNumber;

        return newCaseNumber;
  
      
}

function upadateCaseTotalPrice( newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59 ;
 const caseTotalElement = document.getElementById('case-total');
 caseTotalElement.innerText = caseTotalPrice;


}



document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);

    upadateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

    
})
document.getElementById('btn-case-plus').addEventListener('click',function(){
 const newCaseNumber=  updateCaseNumber(true);

 upadateCaseTotalPrice( newCaseNumber);
 calculateSubTotal();
 
});