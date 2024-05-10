//DATE HERE//
const date = new Date();
let year = date.getFullYear();

let month = String(date.getMonth()+1).padStart(2,"0");
let day = String(date.getDate()).padStart(2,"0");
let currentDate = `${day}/${month}/${year}`;

let dateNow = document.querySelector('.currentDate');
dateNow.innerHTML = `Today is ${currentDate}`;

// let expiredDate = [
//   {A1:''},
//   {A2:''}
// ]

expiredDate = '';

let data = JSON.parse(localStorage.getItem('savedObjects')) || [];

let output = document.querySelector('.output');

runData();

//TODO FILL THIS next 
const savedOutput = JSON.parse(localStorage.getItem('itemName')) || [
    {itemNameA1:'', quantityA1: '', EXPinputDateA1: ''}, //0
    {itemNameA2:'', quantityA2: '', EXPinputDateA2: ''}, //1
    {itemNameB1:'', quantityB1: '', EXPinputDateB1: ''}, //2
    {itemNameB2:'', quantityB2: '', EXPinputDateB2: ''}, //3
    {itemNameC1:'', quantityC1: '', EXPinputDateC1: ''}, //4
    {itemNameC2:'', quantityC2: '', EXPinputDateC2: ''}, //5
    {itemNameD1:'', quantityD1: '', EXPinputDateD1: ''}, //6
    {itemNameD2:'', quantityD2: '', EXPinputDateD2: ''}, //7
    {itemNameE1:'', quantityE1: '', EXPinputDateE1: ''}, //8
    {itemNameE2:'', quantityE2: '', EXPinputDateE2: ''}, //9
    {itemNameF1:'', quantityF1: '', EXPinputDateF1: ''}, //10
    {itemNameF2:'', quantityF2: '', EXPinputDateF2: ''}, //11
    {itemNameG1:'', quantityG1: '', EXPinputDateG1: ''}, //12
    {itemNameG2:'', quantityG2: '', EXPinputDateG2: ''}, //13
    {itemNameH1:'', quantityH1: '', EXPinputDateH1: ''}, //14
    {itemNameH2:'', quantityH2: '', EXPinputDateH2: ''}, //15
    {itemNameI1:'', quantityI1: '', EXPinputDateI1: ''}, //16
    {itemNameI2:'', quantityI2: '', EXPinputDateI2: ''}, //17
    {itemNameJ1:'', quantityJ1: '', EXPinputDateJ1: ''}, //18
    {itemNameJ2:'', quantityJ2: '', EXPinputDateJ2: ''}, //19
    {itemNameK1:'', quantityK1: '', EXPinputDateK1: ''}, //20
    {itemNameK2:'', quantityK2: '', EXPinputDateK2: ''}, //21
    {itemNameL1:'', quantityL1: '', EXPinputDateL1: ''}, //22
    {itemNameL2:'', quantityL2: '', EXPinputDateL2: ''}, //23

  ];
  const DIVexpA1 = document.querySelector('.js-expDIVDateA1');
  const DIVexpA2 = document.querySelector('.js-expDIVDateA2');
  const DIVexpB1 = document.querySelector('.js-expDIVDateB1');
  const DIVexpB2 = document.querySelector('.js-expDIVDateB2');
  const DIVexpC1 = document.querySelector('.js-expDIVDateC1');
  const DIVexpC2 = document.querySelector('.js-expDIVDateC2');
  const DIVexpD1 = document.querySelector('.js-expDIVDateD1');
  const DIVexpD2 = document.querySelector('.js-expDIVDateD2');
  const DIVexpE1 = document.querySelector('.js-expDIVDateE1');
  const DIVexpE2 = document.querySelector('.js-expDIVDateE2');
  const DIVexpF1 = document.querySelector('.js-expDIVDateF1');
  const DIVexpF2 = document.querySelector('.js-expDIVDateF2');
  const DIVexpG1 = document.querySelector('.js-expDIVDateG1');
  const DIVexpG2 = document.querySelector('.js-expDIVDateG2');
  const DIVexpH1 = document.querySelector('.js-expDIVDateH1');
  const DIVexpH2 = document.querySelector('.js-expDIVDateH2');
  const DIVexpI1 = document.querySelector('.js-expDIVDateI1');
  const DIVexpI2 = document.querySelector('.js-expDIVDateI2');
  const DIVexpJ1 = document.querySelector('.js-expDIVDateJ1');
  const DIVexpJ2 = document.querySelector('.js-expDIVDateJ2');
  const DIVexpK1 = document.querySelector('.js-expDIVDateK1');
  const DIVexpK2 = document.querySelector('.js-expDIVDateK2');
  const DIVexpL1 = document.querySelector('.js-expDIVDateL1');
  const DIVexpL2 = document.querySelector('.js-expDIVDateL2');


  const EXPinputDateA1 = document.querySelector('.expInputA1');
  const EXPinputDateA2 = document.querySelector('.expInputA2');
  const EXPinputDateB1 = document.querySelector('.expInputB1');
  const EXPinputDateB2 = document.querySelector('.expInputB2');
  const EXPinputDateC1 = document.querySelector('.expInputC1');
  const EXPinputDateC2 = document.querySelector('.expInputC2');
  const EXPinputDateD1 = document.querySelector('.expInputD1');
  const EXPinputDateD2 = document.querySelector('.expInputD2');
  const EXPinputDateE1 = document.querySelector('.expInputE1');
  const EXPinputDateE2 = document.querySelector('.expInputE2');
  const EXPinputDateF1 = document.querySelector('.expInputF1');
  const EXPinputDateF2 = document.querySelector('.expInputF2');
  const EXPinputDateG1 = document.querySelector('.expInputG1');
  const EXPinputDateG2 = document.querySelector('.expInputG2');
  const EXPinputDateH1 = document.querySelector('.expInputH1');
  const EXPinputDateH2 = document.querySelector('.expInputH2');
  const EXPinputDateI1 = document.querySelector('.expInputI1');
  const EXPinputDateI2 = document.querySelector('.expInputI2');
  const EXPinputDateJ1 = document.querySelector('.expInputJ1');
  const EXPinputDateJ2 = document.querySelector('.expInputJ2');
  const EXPinputDateK1 = document.querySelector('.expInputK1');
  const EXPinputDateK2 = document.querySelector('.expInputK2');
  const EXPinputDateL1 = document.querySelector('.expInputL1');
  const EXPinputDateL2 = document.querySelector('.expInputL2');

  const allEXP = [
    EXPinputDateA1, EXPinputDateA2,
    EXPinputDateB1, EXPinputDateB2,
    EXPinputDateC1, EXPinputDateC2,
    EXPinputDateD1, EXPinputDateD2,
    EXPinputDateE1, EXPinputDateE2,
    EXPinputDateF1, EXPinputDateF2,
    EXPinputDateG1, EXPinputDateG2,
    EXPinputDateH1, EXPinputDateH2,
    EXPinputDateI1, EXPinputDateI2,
    EXPinputDateJ1, EXPinputDateJ2,
    EXPinputDateK1, EXPinputDateK2,
    EXPinputDateL1, EXPinputDateL2
  ];
  let allDIV = [
    DIVexpA1, DIVexpA2, 
    DIVexpB1, DIVexpB2, 
    DIVexpC1, DIVexpC2,
    DIVexpD1, DIVexpD2,
    DIVexpE1, DIVexpE2,
    DIVexpF1, DIVexpF2,
    DIVexpG1, DIVexpG2,
    DIVexpH1, DIVexpH2,
    DIVexpI1, DIVexpI2,
    DIVexpJ1, DIVexpJ2,
    DIVexpK1, DIVexpK2,
    DIVexpL1, DIVexpL2  
  ];

window.addEventListener('DOMContentLoaded',  () => {

  let expiredDate;
  

itemNameHTMLA1.innerHTML = savedOutput[0].itemNameA1;
shelfQuantity_A1.innerHTML = 'x' + savedOutput[0].quantityA1;
DIVexpA1.innerHTML = savedOutput[0].EXPinputDateA1;




itemNameHTMLA2.innerHTML = savedOutput[1].itemNameA2;
shelfQuantity_A2.innerHTML = 'x' + savedOutput[1].quantityA2;
DIVexpA2.innerHTML = savedOutput[1].EXPinputDateA2;
// expiredDate[1].A2 = savedOutput[1].EXPinputDateA2;


itemNameHTMLB1.innerHTML = savedOutput[2].itemNameB1;
shelfQuantity_B1.innerHTML = 'x' + savedOutput[2].quantityB1;
DIVexpB1.innerHTML = savedOutput[2].EXPinputDateB1;
// expiredDate[2].B1 = savedOutput[2].EXPinputDateB1;

// For B2
itemNameHTMLB2.innerHTML = savedOutput[3].itemNameB2;
shelfQuantity_B2.innerHTML = 'x' + savedOutput[3].quantityB2;
DIVexpB2.innerHTML = savedOutput[3].EXPinputDateB2;
// expiredDate[3].B2 = savedOutput[3].EXPinputDateB2;

// For C1
itemNameHTMLC1.innerHTML = savedOutput[4].itemNameC1;
shelfQuantity_C1.innerHTML = 'x' + savedOutput[4].quantityC1;
DIVexpC1.innerHTML = savedOutput[4].EXPinputDateC1;
// expiredDate[4].C1 = savedOutput[4].EXPinputDateC1;

// For C2
itemNameHTMLC2.innerHTML = savedOutput[5].itemNameC2;
shelfQuantity_C2.innerHTML = 'x' + savedOutput[5].quantityC2;
DIVexpC2.innerHTML = savedOutput[5].EXPinputDateC2;
// expiredDate[5].C2 = savedOutput[5].EXPinputDateC2;

// For D1
itemNameHTMLD1.innerHTML = savedOutput[6].itemNameD1;
shelfQuantity_D1.innerHTML = 'x' + savedOutput[6].quantityD1;
DIVexpD1.innerHTML = savedOutput[6].EXPinputDateD1;
// expiredDate[6].D1 = savedOutput[6].EXPinputDateD1;

// For D2
itemNameHTMLD2.innerHTML = savedOutput[7].itemNameD2;
shelfQuantity_D2.innerHTML = 'x' + savedOutput[7].quantityD2;
DIVexpD2.innerHTML = savedOutput[7].EXPinputDateD2;
// expiredDate[7].D2 = savedOutput[7].EXPinputDateD2;

// For E1
itemNameHTMLE1.innerHTML = savedOutput[8].itemNameE1;
shelfQuantity_E1.innerHTML = 'x' + savedOutput[8].quantityE1;
DIVexpE1.innerHTML = savedOutput[8].EXPinputDateE1;
// expiredDate[8].E1 = savedOutput[8].EXPinputDateE1;

// For E2
itemNameHTMLE2.innerHTML = savedOutput[9].itemNameE2;
shelfQuantity_E2.innerHTML = 'x' + savedOutput[9].quantityE2;
DIVexpE2.innerHTML = savedOutput[9].EXPinputDateE2;
// expiredDate[9].E2 = savedOutput[9].EXPinputDateE2;

// For F1
itemNameHTMLF1.innerHTML = savedOutput[10].itemNameF1;
shelfQuantity_F1.innerHTML = 'x' + savedOutput[10].quantityF1;
DIVexpF1.innerHTML = savedOutput[10].EXPinputDateF1;
// expiredDate[10].F1 = savedOutput[10].EXPinputDateF1;

// For F2
itemNameHTMLF2.innerHTML = savedOutput[11].itemNameF2;
shelfQuantity_F2.innerHTML = 'x' + savedOutput[11].quantityF2;
DIVexpF2.innerHTML = savedOutput[11].EXPinputDateF2;
// expiredDate[11].F2 = savedOutput[11].EXPinputDateF2;

// For G1
itemNameHTMLG1.innerHTML = savedOutput[12].itemNameG1;
shelfQuantity_G1.innerHTML = 'x' + savedOutput[12].quantityG1;
DIVexpG1.innerHTML = savedOutput[12].EXPinputDateG1;
// expiredDate[12].G1 = savedOutput[12].EXPinputDateG1;

// For G2
itemNameHTMLG2.innerHTML = savedOutput[13].itemNameG2;
shelfQuantity_G2.innerHTML = 'x' + savedOutput[13].quantityG2;
DIVexpG2.innerHTML = savedOutput[13].EXPinputDateG2;
// expiredDate[13].G2 = savedOutput[13].EXPinputDateG2;

// For H1
itemNameHTMLH1.innerHTML = savedOutput[14].itemNameH1;
shelfQuantity_H1.innerHTML = 'x' + savedOutput[14].quantityH1;
DIVexpH1.innerHTML = savedOutput[14].EXPinputDateH1;
// expiredDate[14].H1 = savedOutput[14].EXPinputDateH1;

// For H2
itemNameHTMLH2.innerHTML = savedOutput[15].itemNameH2;
shelfQuantity_H2.innerHTML = 'x' + savedOutput[15].quantityH2;
DIVexpH2.innerHTML = savedOutput[15].EXPinputDateH2;
// expiredDate[15].H2 = savedOutput[15].EXPinputDateH2;

// For I1
itemNameHTMLI1.innerHTML = savedOutput[16].itemNameI1;
shelfQuantity_I1.innerHTML = 'x' + savedOutput[16].quantityI1;
DIVexpI1.innerHTML = savedOutput[16].EXPinputDateI1;
// expiredDate[16].I1 = savedOutput[16].EXPinputDateI1;

// For I2
itemNameHTMLI2.innerHTML = savedOutput[17].itemNameI2;
shelfQuantity_I2.innerHTML = 'x' + savedOutput[17].quantityI2;
DIVexpI2.innerHTML = savedOutput[17].EXPinputDateI2;
// expiredDate[17].I2 = savedOutput[17].EXPinputDateI2;

// For J1
itemNameHTMLJ1.innerHTML = savedOutput[18].itemNameJ1;
shelfQuantity_J1.innerHTML = 'x' + savedOutput[18].quantityJ1;
DIVexpJ1.innerHTML = savedOutput[18].EXPinputDateJ1;
// expiredDate[18].J1 = savedOutput[18].EXPinputDateJ1;

// For J2
itemNameHTMLJ2.innerHTML = savedOutput[19].itemNameJ2;
shelfQuantity_J2.innerHTML = 'x' + savedOutput[19].quantityJ2;
DIVexpJ2.innerHTML = savedOutput[19].EXPinputDateJ2;
// expiredDate[19].J2 = savedOutput[19].EXPinputDateJ2;

// For K1
itemNameHTMLK1.innerHTML = savedOutput[20].itemNameK1;
shelfQuantity_K1.innerHTML = 'x' + savedOutput[20].quantityK1;
DIVexpK1.innerHTML = savedOutput[20].EXPinputDateK1;
// expiredDate[20].K1 = savedOutput[20].EXPinputDateK1;

// For K2
itemNameHTMLK2.innerHTML = savedOutput[21].itemNameK2;
shelfQuantity_K2.innerHTML = 'x' + savedOutput[21].quantityK2;
DIVexpK2.innerHTML = savedOutput[21].EXPinputDateK2;
// expiredDate[21].K2 = savedOutput[21].EXPinputDateK2;

// For L1
itemNameHTMLL1.innerHTML = savedOutput[22].itemNameL1;
shelfQuantity_L1.innerHTML = 'x' + savedOutput[22].quantityL1;
DIVexpL1.innerHTML = savedOutput[22].EXPinputDateL1;
// expiredDate[22].L1 = savedOutput[22].EXPinputDateL1;

// For L2
itemNameHTMLL2.innerHTML = savedOutput[23].itemNameL2;
shelfQuantity_L2.innerHTML = 'x' + savedOutput[23].quantityL2;
DIVexpL2.innerHTML = savedOutput[23].EXPinputDateL2;
// expiredDate[23].L2 = savedOutput[23].EXPinputDateL2;

//! comparison exp date test here
// console.log(`currentDate ${currentDate}`);
// console.log(`expiredDate ${expiredDate[0].A1}`);
// console.log(`expiredDate ${expiredDate[1].A2}`);
// console.log(`expiredDate ${expiredDate[2].B1}`);


  allDIV.forEach(div => { //TODO EXPERIMENT THIS
    if(expiredDate >= currentDate){
      div.classList.add("currentDate-test"); //! BLUE
      console.log('runs NOT EXPIRED');
    } 
    else{
      div.classList.add("currentDate-Expired"); //! RED
      console.log('runs EXPIRED');
    }

})


  allDIV.forEach((div, index) => {
    const exp = allEXP[index]; //* Corresponding element in allEXP
    if (div.textContent.trim()) {
      exp.classList.add("expInput-Empty");
      expInputStatus = true;
      // console.log('runs contain');

    } else {
      exp.classList.add("expInput");
      expInputStatus = false;
      // console.log('runs empty');
    }
  });
  }
  
);


//PLACE C SECTION AND OTHERS

  let quantitySupplement_A1 = 0;//1
  let quantitySupplement_A2 = 0;//1.1
  let quantitySupplement_B1 = 0;//2
  let quantitySupplement_B2 = 0;//2.1
  let quantitySupplement_C1 = 0;//3
  let quantitySupplement_C2 = 0;//3.1
  let quantitySupplement_D1 = 0;//4
  let quantitySupplement_D2 = 0;//4.1
  let quantitySupplement_E1 = 0;//5
  let quantitySupplement_E2 = 0;//5.1
  let quantitySupplement_F1 = 0;//6
  let quantitySupplement_F2 = 0;//6.1
  let quantitySupplement_G1 = 0;//7
  let quantitySupplement_G2 = 0;//7.1
  let quantitySupplement_H1 = 0;//8
  let quantitySupplement_H2 = 0;//8.1
  let quantitySupplement_I1 = 0;//9
  let quantitySupplement_I2 = 0;//9.1
  let quantitySupplement_J1 = 0;//10
  let quantitySupplement_J2 = 0;//10.1
  let quantitySupplement_K1 = 0;//11
  let quantitySupplement_K2 = 0;//11.1
  let quantitySupplement_L1 = 0;//12
  let quantitySupplement_L2 = 0;//12.1


  // TOGGLE ARRAY
  const shelf = {
    A1: 'A1',
    A2: 'A2',
    B1: 'B1',
    B2: 'B2',
    C1: 'C1',
    C2: 'C2',
    D1: 'D1',
    D2: 'D2',
    E1: 'E1',
    E2: 'E2',
    F1: 'F1',
    F2: 'F2',
    G1: 'G1',
    G2: 'G2',
    H1: 'H1',
    H2: 'H2',
    I1: 'I1',
    I2: 'I2',
    J1: 'J1',
    J2: 'J2',
    K1: 'K1',
    K2: 'K2',
    L1: 'L1',
    L2: 'L2'
    };
    
    let clickEXPInput;

    let upDownStates = {
      A1: 0,
      A2: 0,
      B1: 0,
      B2: 0,
      C1: 0,
      C2: 0,
      D1: 0,
      D2: 0,
      E1: 0,
      E2: 0,
      F1: 0,
      F2: 0,
      G1: 0,
      G2: 0,
      H1: 0,
      H2: 0,
      I1: 0,
      I2: 0,
      J1: 0,
      J2: 0,
      K1: 0,
      K2: 0,
      L1: 0,
      L2: 0,
    };
    
  const Switch = {
    sectionA: 'section A',
    sectionB: 'section B',
    NEUTRAL: 'null'
  }
  let flipButtons = Switch.NEUTRAL;

  let toggleEditable;
  let toggleState;

  let togglePanelOnOff = false;

  
//**************//ADD HERE//************//
  //Panel Number Div for Plus and Minus
  let numberPanelA1 = document.querySelector('.js-panelNumberA1');
  let numberPanelA2 = document.querySelector('.js-panelNumberA2');

  let numberPanelB1 = document.querySelector('.js-panelNumberB1');
  let numberPanelB2 = document.querySelector('.js-panelNumberB2');

  let numberPanelC1 = document.querySelector('.js-panelNumberC1');
  let numberPanelC2 = document.querySelector('.js-panelNumberC2');

  let numberPanelD1 = document.querySelector('.js-panelNumberD1');
  let numberPanelD2 = document.querySelector('.js-panelNumberD2');

  let numberPanelE1 = document.querySelector('.js-panelNumberE1');
  let numberPanelE2 = document.querySelector('.js-panelNumberE2');

  let numberPanelF1 = document.querySelector('.js-panelNumberF1');
  let numberPanelF2 = document.querySelector('.js-panelNumberF2');

  let numberPanelG1 = document.querySelector('.js-panelNumberG1');
  let numberPanelG2 = document.querySelector('.js-panelNumberG2');

  let numberPanelH1 = document.querySelector('.js-panelNumberH1');
  let numberPanelH2 = document.querySelector('.js-panelNumberH2');

  let numberPanelI1 = document.querySelector('.js-panelNumberI1');
  let numberPanelI2 = document.querySelector('.js-panelNumberI2');
  
  let numberPanelJ1 = document.querySelector('.js-panelNumberJ1');
  let numberPanelJ2 = document.querySelector('.js-panelNumberJ2');

  let numberPanelK1 = document.querySelector('.js-panelNumberK1');
  let numberPanelK2 = document.querySelector('.js-panelNumberK2');

  let numberPanelL1 = document.querySelector('.js-panelNumberL1');
  let numberPanelL2 = document.querySelector('.js-panelNumberL2');



   //ENTER PANEL QUANTITY NUMBER
//**************//ADD HERE//************//
  
  let enterQuantityA1 = document.querySelector('.js-EnterPanelNumberA1');
  let enterQuantityA2 = document.querySelector('.js-EnterPanelNumberA2');
    
  let enterQuantityB1 = document.querySelector('.js-EnterPanelNumberB1');
  let enterQuantityB2 = document.querySelector('.js-EnterPanelNumberB2');

  let enterQuantityC1 = document.querySelector('.js-EnterPanelNumberC1');
  let enterQuantityC2 = document.querySelector('.js-EnterPanelNumberC2');

  let enterQuantityD2 = document.querySelector('.js-EnterPanelNumberD2');
  let enterQuantityD1 = document.querySelector('.js-EnterPanelNumberD1');

  let enterQuantityE1 = document.querySelector('.js-EnterPanelNumberE1');
  let enterQuantityE2 = document.querySelector('.js-EnterPanelNumberE2');

  let enterQuantityF1 = document.querySelector('.js-EnterPanelNumberF1');
  let enterQuantityF2 = document.querySelector('.js-EnterPanelNumberF2');

  let enterQuantityG1 = document.querySelector('.js-EnterPanelNumberG1');
  let enterQuantityG2 = document.querySelector('.js-EnterPanelNumberG2');

  let enterQuantityH1 = document.querySelector('.js-EnterPanelNumberH1');
  let enterQuantityH2 = document.querySelector('.js-EnterPanelNumberH2');

  let enterQuantityI1 = document.querySelector('.js-EnterPanelNumberI1');
  let enterQuantityI2 = document.querySelector('.js-EnterPanelNumberI2');

  let enterQuantityJ1 = document.querySelector('.js-EnterPanelNumberJ1');
  let enterQuantityJ2 = document.querySelector('.js-EnterPanelNumberJ2');

  let enterQuantityK1 = document.querySelector('.js-EnterPanelNumberK1');
  let enterQuantityK2 = document.querySelector('.js-EnterPanelNumberK2');

  let enterQuantityL1 = document.querySelector('.js-EnterPanelNumberL1');
  let enterQuantityL2 = document.querySelector('.js-EnterPanelNumberL2');


///ADD HERE///
  const mainShelfA1 = document.querySelector('.shelf-A1');
  const mainShelfA2 = document.querySelector('.shelf-A2');

  const mainShelfB1 = document.querySelector('.shelf-B1');
  const mainShelfB2 = document.querySelector('.shelf-B2');

  const mainShelfC1 = document.querySelector('.shelf-C1');
  const mainShelfC2 = document.querySelector('.shelf-C2');
  
  const mainShelfD1 = document.querySelector('.shelf-D1');
  const mainShelfD2 = document.querySelector('.shelf-D2');

  const mainShelfE1 = document.querySelector('.shelf-E1');
  const mainShelfE2 = document.querySelector('.shelf-E2');

  const mainShelfF1 = document.querySelector('.shelf-F1');
  const mainShelfF2 = document.querySelector('.shelf-F2');
  
  const mainShelfG1 = document.querySelector('.shelf-G1');
  const mainShelfG2 = document.querySelector('.shelf-G2');

  const mainShelfH1 = document.querySelector('.shelf-H1');
  const mainShelfH2 = document.querySelector('.shelf-H2');

  const mainShelfI1 = document.querySelector('.shelf-I1');
  const mainShelfI2 = document.querySelector('.shelf-I2');

  const mainShelfJ1 = document.querySelector('.shelf-J1');
  const mainShelfJ2 = document.querySelector('.shelf-J2');
  
  const mainShelfK1 = document.querySelector('.shelf-K1');
  const mainShelfK2 = document.querySelector('.shelf-K2');

  const mainShelfL1 = document.querySelector('.shelf-L1');
  const mainShelfL2 = document.querySelector('.shelf-L2');

  const allShelfActive = [
    mainShelfA1, mainShelfA2, mainShelfB1, mainShelfB2, mainShelfC1, mainShelfC2, mainShelfD1, mainShelfD2, mainShelfE1, mainShelfE2, mainShelfF1, mainShelfF2, mainShelfG1, mainShelfG2, mainShelfH1, mainShelfH2, mainShelfI1, mainShelfI2, mainShelfJ1, mainShelfJ2, mainShelfK1, mainShelfK2, mainShelfL1, mainShelfL2
  ];
  
const mainDate = document.querySelector('.main-date');



////////ENTER BUTTON PANEL NUMBER ADDEVENTLISTENER
//**************//ADD HERE//************//
  enterQuantityA1.addEventListener('click', ()=> {
    enterQuantityA1.value = quantitySupplement_A1;
    console.log(data);
    data.push({
      name: inputA1.value,
      quantity: quantitySupplement_A1,
      loc: shelf.A1
    });
    mainShelfA1.classList.remove("shelf-active");
    typingState;
    itemNameHTMLA1.innerHTML = inputA1.value;
    HideA1();
    runData();
  });

  enterQuantityA2.addEventListener('click', ()=> {
    enterQuantityA2.value = quantitySupplement_A2;
    console.log(data);
    data.push({
      name: inputA2.value,
      quantity: quantitySupplement_A2,
      loc: shelf.A2
    });
    mainShelfA2.classList.remove("shelf-active");
    typingState;
    itemNameHTMLA2.innerHTML = inputA2.value;
    HideA2();
    runData();
  });

  enterQuantityB1.addEventListener('click', ()=> {
    enterQuantityB1.value = quantitySupplement_B1;
    console.log(data);
    data.push({
      name: inputB1.value,
      quantity: quantitySupplement_B1,
      loc: shelf.B1
    });
    mainShelfB1.classList.remove("shelf-active");
    typingState;
    itemNameHTMLB1.innerHTML = inputB1.value;
    HideB1();
    runData();
  });

  enterQuantityB2.addEventListener('click', ()=> {
    enterQuantityB2.value = quantitySupplement_B2;
    console.log(data);
    data.push({
      name: inputB2.value,
      quantity: quantitySupplement_B2,
      loc: shelf.B2
    });
    mainShelfB2.classList.remove("shelf-active");
    typingState;
    itemNameHTMLB2.innerHTML = inputB2.value;
    HideB2();
    runData();
  });

  enterQuantityC1.addEventListener('click', ()=> {
    enterQuantityC1.value = quantitySupplement_C1;
    console.log(data);
    data.push({
      name: inputC1.value,
      quantity: quantitySupplement_C1,
      loc: shelf.C1
    });
    mainShelfC1.classList.remove("shelf-active");
    typingState;
    itemNameHTMLC1.innerHTML = inputC1.value;
    HideC1();
    runData();
  });

  enterQuantityC2.addEventListener('click', ()=> {
    enterQuantityC2.value = quantitySupplement_C2;
    console.log(data);
    data.push({
      name: inputC2.value,
      quantity: quantitySupplement_C2,
      loc: shelf.C2
    });
    mainShelfC2.classList.remove("shelf-active");
    typingState;
    itemNameHTMLC2.innerHTML = inputC2.value;
    HideC2();
    runData();
  });

  enterQuantityD1.addEventListener('click', ()=> {
    enterQuantityD1.value = quantitySupplement_D1;
    console.log(data);
    data.push({
      name: inputD1.value,
      quantity: quantitySupplement_D1,
      loc: shelf.D1
    });
    mainShelfD1.classList.remove("shelf-active");
    typingState; //back to default
    itemNameHTMLD1.innerHTML = inputD1.value;
    HideD1();
    runData();
  });

  enterQuantityD2.addEventListener('click', ()=> {
    enterQuantityD2.value = quantitySupplement_D2;
    console.log(data);

    data.push({
      name: inputD2.value,
      quantity: quantitySupplement_D2,
      loc: shelf.D2
    });
    mainShelfD2.classList.remove("shelf-active");
    typingState; 
    itemNameHTMLD2.innerHTML = inputD2.value;
    savedOutput[7].quantityD2 = quantitySupplement_D2;
    console.log(savedOutput[7]);
    HideD2();
    runData();
    savedHTML();
  });

  enterQuantityE1.addEventListener('click', ()=> {
    enterQuantityE1.value = quantitySupplement_E1;
    console.log(data);
    data.push({
      name: inputE1.value,
      quantity: quantitySupplement_E1,
      loc: shelf.E1
    });
    mainShelfE1.classList.remove("shelf-active");
    typingState; //back to default
    itemNameHTMLE1.innerHTML = inputE1.value;
    HideE1();
    runData();
  });

enterQuantityE2.addEventListener('click', ()=> {
  enterQuantityE2.value = quantitySupplement_E2;
  console.log(data);
  data.push({
    name: inputE2.value,
    quantity: quantitySupplement_E2,
    loc: shelf.E2
  });
  mainShelfE2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLE2.innerHTML = inputE2.value;
  HideE2();
  runData();
});

enterQuantityF1.addEventListener('click', ()=> {
  enterQuantityF1.value = quantitySupplement_F1;
  console.log(data);
  data.push({
    name: inputF1.value,
    quantity: quantitySupplement_F1,
    loc: shelf.F1
  });
  mainShelfF1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLF1.innerHTML = inputF1.value;
  HideF1();
  runData();
});

enterQuantityF2.addEventListener('click', ()=> {
  enterQuantityF2.value = quantitySupplement_F2;
  console.log(data);
  data.push({
    name: inputF2.value,
    quantity: quantitySupplement_F2,
    loc: shelf.F2
  });
  mainShelfF2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLF2.innerHTML = inputF2.value;
  HideF2();
  runData();
});

enterQuantityG1.addEventListener('click', ()=> {
  enterQuantityG1.value = quantitySupplement_G1;
  console.log(data);
  data.push({
    name: inputG1.value,
    quantity: quantitySupplement_G1,
    loc: shelf.G1
  });
  mainShelfG1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLG1.innerHTML = inputG1.value;
  HideG1();
  runData();
});

enterQuantityG2.addEventListener('click', ()=> {
  enterQuantityG2.value = quantitySupplement_G2;
  console.log(data);
  data.push({
    name: inputG2.value,
    quantity: quantitySupplement_G2,
    loc: shelf.G2
  });
  mainShelfG2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLG2.innerHTML = inputG2.value;
  HideG2();
  runData();
});

enterQuantityH1.addEventListener('click', ()=> {
  enterQuantityH1.value = quantitySupplement_H1;
  console.log(data);
  data.push({
    name: inputH1.value,
    quantity: quantitySupplement_H1,
    loc: shelf.H1
  });
  mainShelfH1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLH1.innerHTML = inputH1.value;
  HideH1();
  runData();
});

enterQuantityH2.addEventListener('click', ()=> {
  enterQuantityH2.value = quantitySupplement_H2;
  console.log(data);
  data.push({
    name: inputH2.value,
    quantity: quantitySupplement_H2,
    loc: shelf.H2
  });
  mainShelfH2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLH2.innerHTML = inputH2.value;
  HideH2();
  runData();
});

enterQuantityI1.addEventListener('click', ()=> {
  enterQuantityI1.value = quantitySupplement_I1;
  console.log(data);
  data.push({
    name: inputI1.value,
    quantity: quantitySupplement_I1,
    loc: shelf.I1
  });
  mainShelfI1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLI1.innerHTML = inputI1.value;
  HideI1();
  runData();
});

enterQuantityI2.addEventListener('click', ()=> {
  enterQuantityI2.value = quantitySupplement_I2;
  console.log(data);
  data.push({
    name: inputI2.value,
    quantity: quantitySupplement_I2,
    loc: shelf.I2
  });
  mainShelfI2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLI2.innerHTML = inputI2.value;
  HideI2();
  runData();
});

enterQuantityJ1.addEventListener('click', ()=> {
  enterQuantityJ1.value = quantitySupplement_J1;
  console.log(data);
  data.push({
    name: inputJ1.value,
    quantity: quantitySupplement_J1,
    loc: shelf.J1
  });
  mainShelfJ1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLJ1.innerHTML = inputJ1.value;
  HideJ1();
  runData();
});

enterQuantityJ2.addEventListener('click', ()=> {
  enterQuantityJ2.value = quantitySupplement_J2;
  console.log(data);
  data.push({
    name: inputJ2.value,
    quantity: quantitySupplement_J2,
    loc: shelf.J2
  });
  mainShelfJ2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLJ2.innerHTML = inputJ2.value;
  HideJ2();
  runData();
});

enterQuantityK1.addEventListener('click', ()=> {
  enterQuantityK1.value = quantitySupplement_K1;
  console.log(data);
  data.push({
    name: inputK1.value,
    quantity: quantitySupplement_K1,
    loc: shelf.K1
  });
  mainShelfK1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLK1.innerHTML = inputK1.value;
  HideK1();
  runData();
});

enterQuantityK2.addEventListener('click', ()=> {
  enterQuantityK2.value = quantitySupplement_K2;
  console.log(data);
  data.push({
    name: inputK2.value,
    quantity: quantitySupplement_K2,
    loc: shelf.K2
  });
  mainShelfK2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLK2.innerHTML = inputK2.value;
  HideK2();
  runData();
});

enterQuantityL1.addEventListener('click', ()=> {
  enterQuantityL1.value = quantitySupplement_L1;
  console.log(data);
  data.push({
    name: inputL1.value,
    quantity: quantitySupplement_L1,
    loc: shelf.L1
  });
  mainShelfL1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLL1.innerHTML = inputL1.value;
  HideL1();
  runData();
});

enterQuantityL2.addEventListener('click', ()=> {
  enterQuantityL2.value = quantitySupplement_L2;
  console.log(data);
  data.push({
    name: inputL2.value,
    quantity: quantitySupplement_L2,
    loc: shelf.L2
  });
  mainShelfL2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLL2.innerHTML = inputL2.value;
  HideL2();
  runData();
});


/////////////////////////////////////////////

//**************//ADD HERE//************//
    //SHELF QUANTITY


  let shelfQuantity_A1 = document.querySelector('.panelNumber-QuantityA1');
  let shelfQuantity_A2 = document.querySelector('.panelNumber-QuantityA2');
    
  let shelfQuantity_B1 = document.querySelector('.panelNumber-QuantityB1');
  let shelfQuantity_B2 = document.querySelector('.panelNumber-QuantityB2');

  let shelfQuantity_C1 = document.querySelector('.panelNumber-QuantityC1');
  let shelfQuantity_C2 = document.querySelector('.panelNumber-QuantityC2');

  let shelfQuantity_D2 = document.querySelector('.panelNumber-QuantityD2');
  let shelfQuantity_D1 = document.querySelector('.panelNumber-QuantityD1');

  let shelfQuantity_E2 = document.querySelector('.panelNumber-QuantityE2');
  let shelfQuantity_E1 = document.querySelector('.panelNumber-QuantityE1');

  let shelfQuantity_F1 = document.querySelector('.panelNumber-QuantityF1');
  let shelfQuantity_F2 = document.querySelector('.panelNumber-QuantityF2');

  let shelfQuantity_G1 = document.querySelector('.panelNumber-QuantityG1');
  let shelfQuantity_G2 = document.querySelector('.panelNumber-QuantityG2');

  let shelfQuantity_H1 = document.querySelector('.panelNumber-QuantityH1');
  let shelfQuantity_H2 = document.querySelector('.panelNumber-QuantityH2');

  let shelfQuantity_I1 = document.querySelector('.panelNumber-QuantityI1');
  let shelfQuantity_I2 = document.querySelector('.panelNumber-QuantityI2');

  let shelfQuantity_J1 = document.querySelector('.panelNumber-QuantityJ1');
  let shelfQuantity_J2 = document.querySelector('.panelNumber-QuantityJ2');

  let shelfQuantity_K1 = document.querySelector('.panelNumber-QuantityK1');
  let shelfQuantity_K2 = document.querySelector('.panelNumber-QuantityK2');

  let shelfQuantity_L1 = document.querySelector('.panelNumber-QuantityL1');
  let shelfQuantity_L2 = document.querySelector('.panelNumber-QuantityL2');


shelfQuantity_A1.value = '';
shelfQuantity_A2.value = '';

shelfQuantity_B1.value = '';
shelfQuantity_B2.value = '';

shelfQuantity_C1.value = '';
shelfQuantity_C2.value = '';

shelfQuantity_D1.value = '';
shelfQuantity_D2.value = '';

shelfQuantity_E1.value = '';
shelfQuantity_E2.value = '';

shelfQuantity_F1.value = '';
shelfQuantity_F2.value = '';

shelfQuantity_G1.value = '';
shelfQuantity_G2.value = '';

shelfQuantity_H1.value = '';
shelfQuantity_H2.value = '';

shelfQuantity_I1.value = '';
shelfQuantity_I2.value = '';

shelfQuantity_J1.value = '';
shelfQuantity_J2.value = '';

shelfQuantity_K1.value = '';
shelfQuantity_K2.value = '';

shelfQuantity_L1.value = '';
shelfQuantity_L2.value = '';



//**************//ADD HERE//************//
shelfQuantity_A1.innerHTML = '0';
shelfQuantity_A2.innerHTML = '0';

shelfQuantity_B1.innerHTML = '0';
shelfQuantity_B2.innerHTML = '0';

shelfQuantity_C1.innerHTML = '0';
shelfQuantity_C2.innerHTML = '0';

shelfQuantity_D1.innerHTML = '0';
shelfQuantity_D2.innerHTML = '0';

shelfQuantity_E1.innerHTML = '0';
shelfQuantity_E2.innerHTML = '0';

shelfQuantity_F1.innerHTML = '0';
shelfQuantity_F2.innerHTML = '0';

shelfQuantity_G1.innerHTML = '0';
shelfQuantity_G2.innerHTML = '0';

shelfQuantity_H1.innerHTML = '0';
shelfQuantity_H2.innerHTML = '0';

shelfQuantity_I1.innerHTML = '0';
shelfQuantity_I2.innerHTML = '0';

shelfQuantity_J1.innerHTML = '0';
shelfQuantity_J2.innerHTML = '0';

shelfQuantity_K1.innerHTML = '0';
shelfQuantity_K2.innerHTML = '0';

shelfQuantity_L1.innerHTML = '0';
shelfQuantity_L2.innerHTML = '0';


//**************//ADD HERE//************//
  //INPUT HERE
  const inputA1 = document.querySelector('.js-input-A1');
  const inputA2 = document.querySelector('.js-input-A2');

  const inputB1 = document.querySelector('.js-input-B1');
  const inputB2 = document.querySelector('.js-input-B2');

  const inputC1 = document.querySelector('.js-input-C1');
  const inputC2 = document.querySelector('.js-input-C2');

  const inputD1 = document.querySelector('.js-input-D1');
  const inputD2 = document.querySelector('.js-input-D2');

  const inputE1 = document.querySelector('.js-input-E1');
  const inputE2 = document.querySelector('.js-input-E2');

  const inputF1 = document.querySelector('.js-input-F1');
  const inputF2 = document.querySelector('.js-input-F2');

  const inputG1 = document.querySelector('.js-input-G1');
  const inputG2 = document.querySelector('.js-input-G2');

  const inputH1 = document.querySelector('.js-input-H1');
  const inputH2 = document.querySelector('.js-input-H2');

  const inputI1 = document.querySelector('.js-input-I1');
  const inputI2 = document.querySelector('.js-input-I2');

  const inputJ1 = document.querySelector('.js-input-J1');
  const inputJ2 = document.querySelector('.js-input-J2');

  const inputK1 = document.querySelector('.js-input-K1');
  const inputK2 = document.querySelector('.js-input-K2');

  const inputL1 = document.querySelector('.js-input-L1');
  const inputL2 = document.querySelector('.js-input-L2');

  
//EXP Input//


EXPinputDateA1.addEventListener('keydown', (event)=> {
  if(event.key === 'Enter'){
    typingEXPinput(
      EXPinputDateA1.value, 
      EXPinputDateA1, 
      DIVexpA1,
      [0],
      'EXPinputDateA1',
      expiredDate
    )}
  });
//? TESTING expiredDate
console.log(EXPinputDateA1.value);
console.log(expiredDate);

EXPinputDateA2.addEventListener('keydown', (event)=> {
  if(event.key === 'Enter'){
    typingEXPinput(
      EXPinputDateA2.value,
      EXPinputDateA2,
      DIVexpA2,
      [1],
      'EXPinputDateA2'
    );
  }
});

EXPinputDateB1.addEventListener('keydown', (event)=> {
  if(event.key === 'Enter'){
    typingEXPinput(
      EXPinputDateB1.value, 
      EXPinputDateB1, 
      DIVexpB1,
      [2],
      'EXPinputDateB1'
    );
  }
});

EXPinputDateB2.addEventListener('keydown', (event)=> {
  if(event.key === 'Enter'){
    typingEXPinput(
      EXPinputDateB2.value, 
      EXPinputDateB2, 
      DIVexpB2,
      [3],
      'EXPinputDateB2'
    );
  }
});

EXPinputDateC1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateC1.value,
      EXPinputDateC1,
      DIVexpC1,
      [4],
      'EXPinputDateC1'
    );
  }
});
  
EXPinputDateC2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateC2.value,
      EXPinputDateC2,
      DIVexpC2,
      [5],
      'EXPinputDateC2'
    );
  }
});

EXPinputDateD1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateD1.value,
      EXPinputDateD1,
      DIVexpD1,
      [6],
      'EXPinputDateD1'
    );
  }
});

EXPinputDateD2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateD2.value,
      EXPinputDateD2,
      DIVexpD2,
      [7],
      'EXPinputDateD2'
    );
  }
});

EXPinputDateE1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateE1.value,
      EXPinputDateE1,
      DIVexpE1,
      [8],
      'EXPinputDateE1'
    );
  }
});

EXPinputDateE2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateE2.value,
      EXPinputDateE2,
      DIVexpE2,
      [9],
      'EXPinputDateE2'
    );
  }
});

EXPinputDateF1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateF1.value,
      EXPinputDateF1,
      DIVexpF1,
      [10],
      'EXPinputDateF1'
    );
  }
});


EXPinputDateF2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateF2.value,
      EXPinputDateF2,
      DIVexpF2,
      [11],
      'EXPinputDateF2'
    );
  }
});

EXPinputDateG1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateG1.value,
      EXPinputDateG1,
      DIVexpG1,
      [12],
      'EXPinputDateG1'
    );
  }
});

EXPinputDateG2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateG2.value,
      EXPinputDateG2,
      DIVexpG2,
      [13],
      'EXPinputDateG2'
    );
  }
});

EXPinputDateH1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateH1.value,
      EXPinputDateH1,
      DIVexpH1,
      [14],
      'EXPinputDateH1'
    );
  }
});


EXPinputDateH2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateH2.value,
      EXPinputDateH2,
      DIVexpH2,
      [15],
      'EXPinputDateH2'
    );
  }
});


EXPinputDateI1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateI1.value,
      EXPinputDateI1,
      DIVexpI1,
      [16],
      'EXPinputDateI1'
    );
  }
});


EXPinputDateI2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateI2.value,
      EXPinputDateI2,
      DIVexpI2,
      [17],
      'EXPinputDateI2'
    );
  }
});


EXPinputDateJ1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateJ1.value,
      EXPinputDateJ1,
      DIVexpJ1,
      [18],
      'EXPinputDateJ1'
    );
  }
});


EXPinputDateJ2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateJ2.value,
      EXPinputDateJ2,
      DIVexpJ2,
      [19],
      'EXPinputDateJ2'
    );
  }
});


EXPinputDateK1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateK1.value,
      EXPinputDateK1,
      DIVexpK1,
      [20],
      'EXPinputDateK1'
    );
  }
});

EXPinputDateK2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateK2.value,
      EXPinputDateK2,
      DIVexpK2,
      [21],
      'EXPinputDateK2'
    );
  }
});
EXPinputDateL1.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateL1.value,
      EXPinputDateL1,
      DIVexpL1,
      [22],
      'EXPinputDateL1'
    );
  }
});

EXPinputDateL2.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    typingEXPinput(
      EXPinputDateL2.value,
      EXPinputDateL2,
      DIVexpL2,
      [23],
      'EXPinputDateL2'
    );
  }
});

let expInputStatus;

//! FUNCTION PARAM typingEXPinput()
//* enter the input / not clicking input 
  function typingEXPinput (expValue, expID, div, index, expKey,expDate) {
    let text = expValue;

    div.innerHTML = text;
    expID.classList.add("expInput-Empty");
    savedOutput[index][expKey] = expValue;
    expDate = expValue;
    savedHTML();
    expInputStatus = false;
    currentTyping = false;
  }
//! FUNCTION PARAM DIVclick()
//* clicking the input / not enter input
function DIVclick(div,shelf,expDIV){
  if(div.textContent.trim()){ //* IF DIV NOT EMPTY
        clickEXPInput = shelf;
        div.innerHTML = '';
        expDIV.classList.remove("expInput-Empty"); //* expinputempty will dissapear
    } //if after user place the input input will dissapear 
  }
//TODO click other input to disable current click //////////
// document.addEventListener('click', () => {
//   unclickClickInput(shelf.A2,EXPinputDateA1,DIVexpA1,[0],'EXPinputDateA1');
// })
document.addEventListener('click', () => {
  let currentShelf = clickEXPInput;
  // inputHide(currentShelf);
  console.log('inputHide',currentShelf);
})

// //!PARAM for unclickClickInput ////
// function unclickClickInput(shelf,expInput,divHTML,index,savedExpInput){
//   if(clickEXPInput === shelf){
//     allEXP.forEach(expInput => {
    
//      expInput.classList.add("expInput-Empty");
//     })

//     divHTML.innerHTML = savedOutput[index][savedExpInput];
//     console.log('run unclickClickInput');
//   }
// }
//TODO/TODO//////////////////////////////
let currentTyping;

//! typing while in input
allEXP.forEach((typingInEXP) => {
  typingInEXP.addEventListener('keydown', () => {
    currentTyping = true;
    expInputStatus = true;

  })
})

// switch case method need to set default name for 'click' // 
  allDIV.forEach((click) => { //TODO if click outside cancel input
    click.addEventListener('click', () => {
      switch (click) {

        case DIVexpA1:
          DIVclick(DIVexpA1, shelf.A1, EXPinputDateA1); 
          break;
        case DIVexpA2:
          DIVclick(DIVexpA2, shelf.A2, EXPinputDateA2); 
          break;
        case DIVexpB1:
          DIVclick(DIVexpB1, shelf.B1, EXPinputDateB1);
          break;
        case DIVexpB2:
          DIVclick(DIVexpB2, shelf.B2, EXPinputDateB2);
          break;
        case DIVexpC1:
          DIVclick(DIVexpC1, shelf.C1, EXPinputDateC1);
          break; 
        case DIVexpC2:
          DIVclick(DIVexpC2, shelf.C2, EXPinputDateC2);
          break; 
        case DIVexpD1:
          DIVclick(DIVexpD1, shelf.D1, EXPinputDateD1);
          break;
        case DIVexpD2:
          DIVclick(DIVexpD2, shelf.D2, EXPinputDateD2);
          break;
        case DIVexpE1:
          DIVclick(DIVexpE1, shelf.E1, EXPinputDateE1);
          break;
        case DIVexpE2:
          DIVclick(DIVexpE2, shelf.E2, EXPinputDateE2);
          break;
        case DIVexpF1:
          DIVclick(DIVexpF1, shelf.F1, EXPinputDateF1);
          break;
        case DIVexpF2:
          DIVclick(DIVexpF2, shelf.F2, EXPinputDateF2);
          break;
        case DIVexpG1:
          DIVclick(DIVexpG1, shelf.G1, EXPinputDateG1);
          break;
        case DIVexpG2:
          DIVclick(DIVexpG2, shelf.G2, EXPinputDateG2);
          break;
        case DIVexpH1:
          DIVclick(DIVexpH1, shelf.H1, EXPinputDateH1);
          break;
        case DIVexpH2:
          DIVclick(DIVexpH2, shelf.H2, EXPinputDateH2);
          break;
        case DIVexpI1:
          DIVclick(DIVexpI1, shelf.I1, EXPinputDateI1);
          break;
        case DIVexpI2:
          DIVclick(DIVexpI2, shelf.I2, EXPinputDateI2);
          break;
        case DIVexpJ1:
          DIVclick(DIVexpJ1, shelf.J1, EXPinputDateJ1);
          break;
        case DIVexpJ2:
          DIVclick(DIVexpJ2, shelf.J2, EXPinputDateJ2);
          break;
        case DIVexpK1:
          DIVclick(DIVexpK1, shelf.K1, EXPinputDateK1);
          break;
        case DIVexpK2:
          DIVclick(DIVexpK2, shelf.K2, EXPinputDateK2);
          break;
        case DIVexpL1:
          DIVclick(DIVexpL1, shelf.L1, EXPinputDateL1);
          break;
        case DIVexpL2:
          DIVclick(DIVexpL2, shelf.L2, EXPinputDateL2);
          break;
      }
  })
});
       

// Click the input directly
 const inputPopUp = document.querySelectorAll
('.js-input-A1,.js-input-A2,.js-input-B1,.js-input-B2,.js-input-C1,.js-input-C2,.js-input-D1,.js-input-D2,.js-input-E1,.js-input-E2,.js-input-F1,.js-input-F2,.js-input-G1,.js-input-G2,.js-input-H1,.js-input-H2,.js-input-I1,.js-input-I2,.js-input-J1,.js-input-J2,.js-input-K1,.js-input-K2,.js-input-L1,.js-input-L2')


  //INPUT DISPLAY
  const allPanels = 
  [
    numberPanelA1,numberPanelA2,
    numberPanelB1,numberPanelB2,
    numberPanelC1,numberPanelC2,
    numberPanelD1,numberPanelD2,
    numberPanelE1,numberPanelE2,
    numberPanelF1,numberPanelF2,
    numberPanelG1,numberPanelG2,
    numberPanelH1,numberPanelH2,
    numberPanelI1,numberPanelI2,
    numberPanelJ1,numberPanelJ2,
    numberPanelK1,numberPanelK2,
    numberPanelL1,numberPanelL2
  ];
  
  allPanels.forEach(clickPanels => {
    clickPanels.addEventListener('click', () => {
     togglePanelOnOff = true;
    })
  }); 


//**************//ADD HERE//************//

shelfQuantity_A1.addEventListener('click', () => {
  if (upDownStates.A1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('A1');
    hideOtherPanel('A1');
    upDownStates.A1 = 1;
  }
  else if(upDownStates.A1 === 1) {
    hideUnhideShelves('HideA1');
    upDownStates.A1 = 0;
  }
});

shelfQuantity_A2.addEventListener('click', () => {
  if (upDownStates.A2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('A2');
    hideOtherPanel('A2');
    upDownStates.A2 = 1;
  }
  else if(upDownStates.A2 === 1) {
    hideUnhideShelves('HideA2');
    upDownStates.A2 = 0;
  }
});

shelfQuantity_B1.addEventListener('click', () => {
  if (upDownStates.B1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('B1');
    hideOtherPanel('B1');
    upDownStates.B1 = 1;
  }
  else if(upDownStates.B1 === 1) {
    hideUnhideShelves('HideB1');
    upDownStates.B1 = 0;
  }
});

shelfQuantity_B2.addEventListener('click', () => {
  if (upDownStates.B2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('B2');
    hideOtherPanel('B2');
    upDownStates.B2 = 1;
  }
  else if(upDownStates.B2 === 1) {
    hideUnhideShelves('HideB2');
    upDownStates.B2 = 0;
  }
});

shelfQuantity_C1.addEventListener('click', () => {
  if (upDownStates.C1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('C1');
    hideOtherPanel('C1');
    upDownStates.C1 = 1;
  }
  else if(upDownStates.C1 === 1) {
    hideUnhideShelves('HideC1');
    upDownStates.C1 = 0;
  }
});

shelfQuantity_C2.addEventListener('click', () => {
  if (upDownStates.C2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('C2');
    hideOtherPanel('C2');
    upDownStates.C2 = 1;
  }
  else if(upDownStates.C2 === 1) {
    hideUnhideShelves('HideC2');
    upDownStates.C2 = 0;
  }
});

shelfQuantity_D1.addEventListener('click', () => {
  if (upDownStates.D1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('D1');
    hideOtherPanel('D1');
    upDownStates.D1 = 1;
  }
  else if(upDownStates.D1 === 1) {
    hideUnhideShelves('HideD1');
    upDownStates.D1 = 0;
  }
});

shelfQuantity_D2.addEventListener('click', () => {
  if (upDownStates.D2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('D2');
    hideOtherPanel('D2');
    upDownStates.D2 = 1;
  }
  else if(upDownStates.D2 === 1) {
    hideUnhideShelves('HideD2');
    upDownStates.D2 = 0;
  }
});

shelfQuantity_E1.addEventListener('click', () => {
  if (upDownStates.E1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('E1');
    hideOtherPanel('E1');
    upDownStates.E1 = 1;
  }
  else if(upDownStates.E1 === 1) {
    hideUnhideShelves('HideE1');
    upDownStates.E1 = 0;
  }
});

shelfQuantity_E2.addEventListener('click', () => {
  if (upDownStates.E2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('E2');
    hideOtherPanel('E2');
    upDownStates.E2 = 1;
  }
  else if(upDownStates.E2 === 1) {
    hideUnhideShelves('HideE2');
    upDownStates.E2 = 0;
  }
});

shelfQuantity_F1.addEventListener('click', () => {
  if (upDownStates.F1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('F1');
    hideOtherPanel('F1');
    upDownStates.F1 = 1;
  }
  else if(upDownStates.F1 === 1) {
    hideUnhideShelves('HideF1');
    upDownStates.F1 = 0;
  }
});

shelfQuantity_F2.addEventListener('click', () => {
  if (upDownStates.F2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('F2');
    hideOtherPanel('F2');
    upDownStates.F2 = 1;
  }
  else if(upDownStates.F2 === 1) {
    hideUnhideShelves('HideF2');
    upDownStates.F2 = 0;
  }
});
shelfQuantity_G1.addEventListener('click', () => {
  if (upDownStates.G1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('G1');
    hideOtherPanel('G1');
    upDownStates.G1 = 1;
  }
  else if(upDownStates.G1 === 1) {
    hideUnhideShelves('HideG1');
    upDownStates.G1 = 0;
  }
});

shelfQuantity_G2.addEventListener('click', () => {
  if (upDownStates.G2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('G2');
    hideOtherPanel('G2');
    upDownStates.G2 = 1;
  }
  else if(upDownStates.G2 === 1) {
    hideUnhideShelves('HideG2');
    upDownStates.G2 = 0;
  }
});

shelfQuantity_H1.addEventListener('click', () => {
  if (upDownStates.H1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('H1');
    hideOtherPanel('H1');
    upDownStates.H1 = 1;
  }
  else if(upDownStates.H1 === 1) {
    hideUnhideShelves('HideH1');
    upDownStates.H1 = 0;
  }
});

shelfQuantity_H2.addEventListener('click', () => {
  if (upDownStates.H2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('H2');
    hideOtherPanel('H2');
    upDownStates.H2 = 1;
  }
  else if(upDownStates.H2 === 1) {
    hideUnhideShelves('HideH2');
    upDownStates.H2 = 0;
  }
});

shelfQuantity_I1.addEventListener('click', () => {
  if (upDownStates.I1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('I1');
    hideOtherPanel('I1');
    upDownStates.I1 = 1;
  }
  else if(upDownStates.I1 === 1) {
    hideUnhideShelves('HideI1');
    upDownStates.I1 = 0;
  }
});

shelfQuantity_I2.addEventListener('click', () => {
  if (upDownStates.I2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('I2');
    hideOtherPanel('I2');
    upDownStates.I2 = 1;
  }
  else if(upDownStates.I2 === 1) {
    hideUnhideShelves('HideI2');
    upDownStates.I2 = 0;
  }
});

shelfQuantity_J1.addEventListener('click', () => {
  if (upDownStates.J1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('J1');
    hideOtherPanel('J1');
    upDownStates.J1 = 1;
  }
  else if(upDownStates.J1 === 1) {
    hideUnhideShelves('HideJ1');
    upDownStates.J1 = 0;
  }
});

shelfQuantity_J2.addEventListener('click', () => {
  if (upDownStates.J2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('J2');
    hideOtherPanel('J2');
    upDownStates.J2 = 1;
  }
  else if(upDownStates.J2 === 1) {
    hideUnhideShelves('HideJ2');
    upDownStates.J2 = 0;
  }
});

shelfQuantity_K1.addEventListener('click', () => {
  if (upDownStates.K1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('K1');
    hideOtherPanel('K1');
    upDownStates.K1 = 1;
  }
  else if(upDownStates.K1 === 1) {
    hideUnhideShelves('HideK1');
    upDownStates.K1 = 0;
  }
});

shelfQuantity_K2.addEventListener('click', () => {
  if (upDownStates.K2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('K2');
    hideOtherPanel('K2');
    upDownStates.K2 = 1;
  }
  else if(upDownStates.K2 === 1) {
    hideUnhideShelves('HideK2');
    upDownStates.K2 = 0;
  }
});

shelfQuantity_L1.addEventListener('click', () => {
  if (upDownStates.L1 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('L1');
    hideOtherPanel('L1');
    upDownStates.L1 = 1;
  }
  else if(upDownStates.L1 === 1) {
    hideUnhideShelves('HideL1');
    upDownStates.L1 = 0;
  }
});

shelfQuantity_L2.addEventListener('click', () => {
  if (upDownStates.L2 === 0 && flipButtons === Switch.NEUTRAL){
    hideUnhideShelves('L2');
    hideOtherPanel('L2');
    upDownStates.L2 = 1;
  }
  else if(upDownStates.L2 === 1) {
    hideUnhideShelves('HideL2');
    upDownStates.L2 = 0;
  }
});

  



//**************//ADD HERE//************//
    function HideA1(){
      numberPanelA1.classList.add("css-panelNumberA");
      numberPanelA1.classList.remove("css-panelNumber-activeA");
      enterQuantityA1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityA1.classList.add('css-EnterPanelNumber');
    };

    function HideA2(){
      numberPanelA2.classList.add("css-panelNumberA");
      numberPanelA2.classList.remove("css-panelNumber-activeA");
      enterQuantityA2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityA2.classList.add('css-EnterPanelNumber');
    };

    function HideB1(){
      numberPanelB1.classList.add("css-panelNumberA");
      numberPanelB1.classList.remove("css-panelNumber-activeA");
      enterQuantityB1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityB1.classList.add('css-EnterPanelNumber');
    };

    function HideB2(){
      numberPanelB2.classList.add("css-panelNumberA");
      numberPanelB2.classList.remove("css-panelNumber-activeA");
      enterQuantityB2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityB2.classList.add('css-EnterPanelNumber');
    };

    function HideC1(){
      numberPanelC1.classList.add("css-panelNumberA");
      numberPanelC1.classList.remove("css-panelNumber-activeA");
      enterQuantityC1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityC1.classList.add('css-EnterPanelNumber');
    };

    function HideC2(){
      numberPanelC2.classList.add("css-panelNumberA");
      numberPanelC2.classList.remove("css-panelNumber-activeA");
      enterQuantityC2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityC2.classList.add('css-EnterPanelNumber');
    };

    function HideD1(){
      numberPanelD1.classList.add("css-panelNumberB");
      numberPanelD1.classList.remove("css-panelNumber-activeB");
      enterQuantityD1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityD1.classList.add('css-EnterPanelNumber');
    };

    function HideD2(){
      numberPanelD2.classList.add("css-panelNumberB");
      numberPanelD2.classList.remove("css-panelNumber-activeB");
      enterQuantityD2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityD2.classList.add('css-EnterPanelNumber');
    };

    function HideE1(){
      numberPanelE1.classList.add("css-panelNumberB");
      numberPanelE1.classList.remove("css-panelNumber-activeB");
      enterQuantityE1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityE1.classList.add('css-EnterPanelNumber');
    };
    
    function HideE2(){
      numberPanelE2.classList.add("css-panelNumberB");
      numberPanelE2.classList.remove("css-panelNumber-activeB");
      enterQuantityE2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityE2.classList.add('css-EnterPanelNumber');
    };

    function HideF1(){
      numberPanelF1.classList.add("css-panelNumberB");
      numberPanelF1.classList.remove("css-panelNumber-activeB");
      enterQuantityF1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityF1.classList.add('css-EnterPanelNumber');
    };
    
    function HideF2(){
      numberPanelF2.classList.add("css-panelNumber");
      numberPanelF2.classList.remove("css-panelNumber-activeB");
      enterQuantityF2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityF2.classList.add('css-EnterPanelNumber');
    };

    function HideG1(){
      numberPanelG1.classList.add("css-panelNumberC");
      numberPanelG1.classList.remove("css-css-panelNumber-activeC");
      enterQuantityG1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityG1.classList.add('css-EnterPanelNumber');
    };
    
    function HideG2(){
      numberPanelG2.classList.add("css-panelNumberC");
      numberPanelG2.classList.remove("css-panelNumber-activeC");
      enterQuantityG2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityG2.classList.add('css-EnterPanelNumber');
    };

    function HideH1(){
      numberPanelH1.classList.add("css-panelNumberC");
      numberPanelH1.classList.remove("css-panelNumber-activeC");
      enterQuantityH1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityH1.classList.add('css-EnterPanelNumber');
    };
    
    function HideH2(){
      numberPanelH2.classList.add("css-panelNumberC");
      numberPanelH2.classList.remove("css-panelNumber-activeC");
      enterQuantityH2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityH2.classList.add('css-EnterPanelNumber');
    };
    
    function HideI1(){
      numberPanelI1.classList.add("css-panelNumberC");
      numberPanelI1.classList.remove("css-panelNumber-activeC");
      enterQuantityI1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityI1.classList.add('css-EnterPanelNumber');
    };
    
    function HideI2(){
      numberPanelI2.classList.add("css-panelNumberC");
      numberPanelI2.classList.remove("css-panelNumber-activeC");
      enterQuantityI2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityI2.classList.add('css-EnterPanelNumber');
    };
    
    function HideJ1(){
      numberPanelJ1.classList.add("css-panelNumberD");
      numberPanelJ1.classList.remove("css-panelNumber-activeD");
      enterQuantityJ1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityJ1.classList.add('css-EnterPanelNumber');
    };
    
    function HideJ2(){
      numberPanelJ2.classList.add("css-panelNumberD");
      numberPanelJ2.classList.remove("css-panelNumber-activeD");
      enterQuantityJ2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityJ2.classList.add('css-EnterPanelNumber');
    };
    
    function HideK1(){
      numberPanelK1.classList.add("css-panelNumberD");
      numberPanelK1.classList.remove("css-panelNumber-activeD");
      enterQuantityK1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityK1.classList.add('css-EnterPanelNumber');
    };
    
    function HideK2(){
      numberPanelK2.classList.add("css-panelNumberD");
      numberPanelK2.classList.remove("css-panelNumber-activeD");
      enterQuantityK2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityK2.classList.add('css-EnterPanelNumber');
    };
    
    function HideL1(){
      numberPanelL1.classList.add("css-panelNumberD");
      numberPanelL1.classList.remove("css-panelNumber-activeD");
      enterQuantityL1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityL1.classList.add('css-EnterPanelNumber');
    };
    
    function HideL2(){
      numberPanelL2.classList.add("css-panelNumberD");
      numberPanelL2.classList.remove("css-panelNumber-activeD");
      enterQuantityL2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityL2.classList.add('css-EnterPanelNumber');
    };

    const allFunctions = [
      { id: 'A1', func: HideA1 },
      { id: 'A2', func: HideA2 },
      { id: 'B1', func: HideB1 },
      { id: 'B2', func: HideB2 },
      { id: 'C1', func: HideC1 },
      { id: 'C2', func: HideC2 },
      { id: 'D1', func: HideD1 },
      { id: 'D2', func: HideD2 },
      { id: 'E1', func: HideE1 },
      { id: 'E2', func: HideE2 },
      { id: 'F1', func: HideF1 },
      { id: 'F2', func: HideF2 },
      { id: 'G1', func: HideG1 },
      { id: 'G2', func: HideG2 },
      { id: 'H1', func: HideH1 },
      { id: 'H2', func: HideH2 },
      { id: 'I1', func: HideI1 },
      { id: 'I2', func: HideI2 },
      { id: 'J1', func: HideJ1 },
      { id: 'J2', func: HideJ2 },
      { id: 'K1', func: HideK1 },
      { id: 'K2', func: HideK2 },
      { id: 'L1', func: HideL1 },
      { id: 'L2', func: HideL2 },
    ];
    

  function hideOtherPanel(panelID){
    allFunctions.forEach ( item => {
      if (panelID === item.id){
        toggleActive(panelID);
        console.log(panelID);
        //nothing
      }
      else {
        item.func();
      }
    })
  };


  //HIGHLIGHT FOR SHELF
  function toggleActive(shelfID){
    const mainShelf = {
      A1: mainShelfA1,
      A2: mainShelfA2,
      B1: mainShelfB1,
      B2: mainShelfB2,
      C1: mainShelfC1,
      C2: mainShelfC2,
      D1: mainShelfD1,
      D2: mainShelfD2,
      E1: mainShelfE1,
      E2: mainShelfE2,
      F1: mainShelfF1,
      F2: mainShelfF2,
      G1: mainShelfG1,
      G2: mainShelfG2,
      H1: mainShelfH1,
      H2: mainShelfH2,
      I1: mainShelfI1,
      I2: mainShelfI2,
      J1: mainShelfJ1,
      J2: mainShelfJ2,
      K1: mainShelfK1,
      K2: mainShelfK2,
      L1: mainShelfL1,
      L2: mainShelfL2,
    }
    Object.keys(mainShelf).forEach(key => {
      const shelf = mainShelf[key];
      if(shelfID === key){
        mainShelf[shelfID].classList.add("shelf-active");
      }
      else{
        shelf.classList.remove("shelf-active");
      }
    })
  };


  let tryOnce = true;

  function savedData(){
    localStorage.setItem('savedObjects',JSON.stringify(data));
  };
  function savedHTML(){
    localStorage.setItem('itemName', JSON.stringify(savedOutput));
  }


function buttonClickUp(){
    document.querySelector('.js-goTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })
}

let listTitle = document.querySelector('.list-title');


const butttonTop = document.querySelector('.js-goTop');

let scrollLimit = window.innerHeight/1.5; //10% of the scroll


const contextMenu = document.querySelector('.context-menu');
// TRYING TO MAKE EXPIRED DATE

document.addEventListener('scroll', () => {
  if(window.scrollY > scrollLimit){

    listTitle.classList.add("list-title2");
    listTitle.classList.remove("list-title");


      listTitle.innerHTML = `
      <button class="js-goTop buttonTop"> 
      UP 
      <i class="fa-solid fa-circle-chevron-up"></i>
      </button>`;
      buttonClickUp();

  }
  else if (window.scrollY/2){
    listTitle.classList.add("list-title");

    listTitle.classList.remove("list-title2");

    listTitle.innerHTML = `List Item`;
  }

})
//////////////////////RUNDATA//////////////////////////////////////

function runData(){
  output.innerHTML = '';
  
  let eachEnterList = 0;

  data.forEach((item,index) => {

  const text = `
<div class="mainCover-list">
  <div class="js-remove-button">
    <button class="REMOVE-button">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>

    <div class="css-shelf-list">
       <div class="${item.pic}"> 
    </div>

    <div class="css-shelf-list-NAME">
      <div class="list-NAME">
        ${item.name}
      </div>
    </div>

    <div class="css-shelf-list-QUANTITY">
      <div class="list-QUANTITY">
        x${item.quantity}
      </div>
    </div>

    <div class="css-shelf-list-LOC">
    ${item.loc}
    </div>

    <div class ="context-menu">
       <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    
  </div>
</div>
  `;
  
    output.innerHTML += text;

    let contextMenu = document.querySelectorAll('.context-menu');

    document.querySelectorAll('.fa-ellipsis-vertical').forEach((threeDots,index) => {
      threeDots.addEventListener('click', () => {
        console.log('click');
      })
    });

    
    

    //localStorage.setItem('output',JSON.stringify(output2.innerHTML));
    savedData()
  });


    document.querySelectorAll('.css-shelf-list').forEach((highlight,index) => {
      highlight.addEventListener('click', () => { 
        highlight.classList.toggle("css-shelf-HIGHLIGHT");

        const loc = highlight.querySelector('.css-shelf-list-LOC').textContent.trim();

        const locID = {
          'A1': mainShelfA1,
          'A2': mainShelfA2,
          'B1': mainShelfB1,
          'B2': mainShelfB2,
          'C1': mainShelfC1,
          'C2': mainShelfC2,
          'D1': mainShelfD1,
          'D2': mainShelfD2,
          'E1': mainShelfE1,
          'E2': mainShelfE2,
          'F1': mainShelfF1,
          'F2': mainShelfF2,
          'G1': mainShelfG1,
          'G2': mainShelfG2,
          'H1': mainShelfH1,
          'H2': mainShelfH2,
          'I1': mainShelfI1,
          'I2': mainShelfI2,
          'J1': mainShelfJ1,
          'J2': mainShelfJ2,
          'K1': mainShelfK1,
          'K2': mainShelfK2,
          'L1': mainShelfL1,
          'L2': mainShelfL2,
        };
        
        if (locID[loc]){
          locID[loc].classList.toggle("shelf-active");
        }


      })
    });
  

////////////////////////////////////////////////////////////////////////////////////////////

//REMOVE BUTTON/////////////////////////////////////////////////////////////////////////////////////////
  document.querySelectorAll('.js-remove-button').forEach((removeButton,index) => {
  removeButton.addEventListener('click', () => {;
    data.splice(index,1);
    runData();
    })
    },savedData()
    );
    
  };
  
////////////////////////////////////////////////////////////////////////////////////////////

const Hili = { //Hightlight
  on: 'turn ON',
  off: 'turn OFF',
  null: 'LIGHT NULL'
};

let toggleHighlight = Hili.null;

//INPUT NAME ITEM HERE//////////////////////////////
//inputD1.classList.toggle("css-input-2", false);

// typingState is typing to disable dom.body.click
let typingState;

 //WHEN TYPING INPUT 1st STATE//When typing
  inputPopUp.forEach(element => {
    element.addEventListener('keypress', () => {
      typingState = true;
    });
  });

 //WHEN TYPING INPUT 2nd STATE//When blinking
  inputPopUp.forEach(element => {
    element.addEventListener('click', () => {
      typingState = true;
    })
  });


//**************//ADD HERE//************//
/////////////////////////////////////////////////////
let itemNameHTMLA1 = document.querySelector('.js-one-A1');
let itemNameHTMLA2 = document.querySelector('.js-one-A2');
let itemNameHTMLB1 = document.querySelector('.js-one-B1');
let itemNameHTMLB2 = document.querySelector('.js-one-B2');
let itemNameHTMLC1 = document.querySelector('.js-one-C1');
let itemNameHTMLC2 = document.querySelector('.js-one-C2');
let itemNameHTMLD1 = document.querySelector('.js-one-D1');
let itemNameHTMLD2 = document.querySelector('.js-one-D2');
let itemNameHTMLE1 = document.querySelector('.js-one-E1');
let itemNameHTMLE2 = document.querySelector('.js-one-E2');
let itemNameHTMLF1 = document.querySelector('.js-one-F1');
let itemNameHTMLF2 = document.querySelector('.js-one-F2');
let itemNameHTMLG1 = document.querySelector('.js-one-G1');
let itemNameHTMLG2 = document.querySelector('.js-one-G2');
let itemNameHTMLH1 = document.querySelector('.js-one-H1');
let itemNameHTMLH2 = document.querySelector('.js-one-H2');
let itemNameHTMLI1 = document.querySelector('.js-one-I1');
let itemNameHTMLI2 = document.querySelector('.js-one-I2');
let itemNameHTMLJ1 = document.querySelector('.js-one-J1');
let itemNameHTMLJ2 = document.querySelector('.js-one-J2');
let itemNameHTMLK1 = document.querySelector('.js-one-K1');
let itemNameHTMLK2 = document.querySelector('.js-one-K2');
let itemNameHTMLL1 = document.querySelector('.js-one-L1');
let itemNameHTMLL2 = document.querySelector('.js-one-L2');


const jsOneforAll = 
[
  itemNameHTMLA1, itemNameHTMLA2, itemNameHTMLB1, itemNameHTMLB2, itemNameHTMLC1, itemNameHTMLC2,itemNameHTMLD1, itemNameHTMLD2, itemNameHTMLE1, itemNameHTMLE2, itemNameHTMLF1, itemNameHTMLF2, itemNameHTMLG1, itemNameHTMLG2, itemNameHTMLH1, itemNameHTMLH2, itemNameHTMLI1, itemNameHTMLI2, itemNameHTMLJ1, itemNameHTMLJ2, itemNameHTMLK1, itemNameHTMLK2, itemNameHTMLL1, itemNameHTMLL2
];

jsOneforAll.forEach((click) => {
  click.addEventListener('click',() => {
  switch(click){ //new method, be sure to note
    case itemNameHTMLA1:
      inputA1.classList.toggle("css-input-2",true);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.A1;
      typingState = true;
      break;

    case itemNameHTMLA2:
      inputA2.classList.toggle("css-input-2",true);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.A2;
      typingState = true;
      break;

    case itemNameHTMLB1:
      inputB1.classList.toggle("css-input-2",true);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.B1;
      typingState = true;
      break;

    case itemNameHTMLB2:
      inputB2.classList.toggle("css-input-2",true);
      inputB1.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.B2;
      typingState = true;
      break;

    case itemNameHTMLC1:
      inputC1.classList.toggle("css-input-2",true);
      inputC2.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      toggleState = shelf.C1;
      typingState = true;
      break;

    case itemNameHTMLC2:
      inputC2.classList.toggle("css-input-2",true);
      inputC1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      toggleState = shelf.C2; //this fucking one line ruin my code
      typingState = true;
      break;
    
    case itemNameHTMLD1:
      inputD1.classList.toggle("css-input-2", true);
      inputD2.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.D1;
      typingState = true;
      break;

    case itemNameHTMLD2:
      inputD2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.D2;
      typingState = true;
      break;

    case itemNameHTMLE1:
      inputE1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.E1;
      typingState = true;
      break;
    
    case itemNameHTMLE2:
      inputE2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.E2;
      typingState = true;
      break;
    
    case itemNameHTMLF1:
      inputF1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.F1;
      typingState = true;
      break;
    
    case itemNameHTMLF2:
      inputF2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.F2;
      typingState = true;
      break;
    
    case itemNameHTMLG1:
      inputG1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.G1;
      typingState = true;
      break;
    
    case itemNameHTMLG2:
      inputG2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.G2;
      typingState = true;
      break;
    
    case itemNameHTMLH1:
      inputH1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.H1;
      typingState = true;
      break;
      
    case itemNameHTMLH2:
      inputH2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.H2;
      typingState = true;
      break;
    
    case itemNameHTMLI1:
      inputI1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.I1;
      typingState = true;
      break;
    
    case itemNameHTMLI2:
      inputI2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.I2;
      typingState = true;
      break;
        
    case itemNameHTMLJ1:
      inputJ1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.J1;
      typingState = true;
      break;
    
    case itemNameHTMLJ2:
      inputJ2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.J2;
      typingState = true;
      break;

    case itemNameHTMLK1:
      inputK1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.K1;
      typingState = true;
      break;
    
    case itemNameHTMLK2:
      inputK2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.K2;
      typingState = true;
      break;
          
    case itemNameHTMLL1:
      inputL1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.L1;
      typingState = true;
      break;
    
    case itemNameHTMLL2:
      inputL2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.L2;
      typingState = true;
      break;
          
          
  }
  })
})

//ENTER PHYSICAL BUTTON ----------------------------------------------------------

  //  document.body.addEventListener('keydown',(event) => {
    allPanels.forEach(clickPanel => {
      clickPanel.addEventListener('cick', (event) => {
        
        if(event.key === 'Enter'){
          if (toggleState === shelf.A1){
          data.push({
            name: inputA1.value,
            quantity: quantitySupplement_A1,
            loc: shelf.A1
           });
           savedData();
           inputA1.classList.remove("css-input-2");
           inputA1.classList.add("css-input");
           typingState; 
           itemNameHTMLA1.innerHTML = inputA1.value;
           savedOutput[0].itemNameA1 = inputA1.value;
           savedOutput[0].quantityA1 = quantitySupplement_A1;
           console.log(savedOutput);
           savedHTML();
        }
        else if (toggleState === shelf.A2){
          data.push({
            name: inputA2.value,
            quantity: quantitySupplement_A2,
            loc: shelf.A2
           });
           savedData();
           inputA2.classList.remove("css-input-2");
           inputA2.classList.add("css-input");
           typingState; 
           itemNameHTMLA2.innerHTML = inputA2.value;
           savedOutput[1].itemNameA2 = inputA2.value;
           savedOutput[1].quantityA2 = quantitySupplement_A2;
           console.log(savedOutput);
           savedHTML();
        }
        else if (toggleState === shelf.B1){
          data.push({
            name: inputB1.value,
            quantity: quantitySupplement_B1,
            loc: shelf.B1
           });
           savedData();
           inputB1.classList.remove("css-input-2");
           inputB1.classList.add("css-input");
           typingState; 
           itemNameHTMLB1.innerHTML = inputB1.value;
           savedOutput[2].itemNameB1 = inputB1.value;
           savedOutput[2].quantityB1 = quantitySupplement_B1;
           console.log(savedOutput);
           savedHTML();
        }
        else if (toggleState === shelf.B2){
          data.push({
            name: inputB2.value,
            quantity: quantitySupplement_B2,
            loc: shelf.B2
           });
           savedData();
           inputB2.classList.remove("css-input-2");
           inputB2.classList.add("css-input");
           typingState; 
           itemNameHTMLB2.innerHTML = inputB2.value;
           savedOutput[3].itemNameB2 = inputB2.value;
           savedOutput[3].quantityB2 = quantitySupplement_B2;
           console.log(savedOutput);
           savedHTML();
        }
        
        else if (toggleState === shelf.C1){
          data.push({
            name: inputC1.value,
            quantity: quantitySupplement_C1,
            loc: shelf.C1
           });
           savedData();
           inputC1.classList.remove("css-input-2");
           inputC1.classList.add("css-input");
           typingState; 
           itemNameHTMLC1.innerHTML = inputC1.value;
           savedOutput[4].itemNameC1 = inputC1.value;
           savedOutput[4].quantityC1 = quantitySupplement_C1;
           console.log(savedOutput);
           savedHTML();
        }
        else if (toggleState === shelf.C2){
          data.push({
            name: inputC2.value,
            quantity: quantitySupplement_C2,
            loc: shelf.C2
           });
           savedData();
           inputC2.classList.remove("css-input-2");
           inputC2.classList.add("css-input");
           typingState; 
           itemNameHTMLC2.innerHTML = inputC2.value;
           savedOutput[5].itemNameC2 = inputC2.value;
           savedOutput[5].quantityC2 = quantitySupplement_C2;
           console.log(savedOutput);
           savedHTML();
        }
        else if (toggleState === shelf.D1){
          data.push({
            name: inputD1.value,
            quantity: quantitySupplement_D1,
            loc: shelf.D1
           });
           savedData();
           inputD1.classList.remove("css-input-2");
           inputD1.classList.add("css-input");
           typingState; 
           itemNameHTMLD1.innerHTML = inputD1.value;
           savedOutput[6].itemNameD1 = inputD1.value;
           savedOutput[6].quantityD1 = quantitySupplement_D1;
           console.log(savedOutput);
           savedHTML();
        }
        else if (toggleState === shelf.D2){
          data.push({
            name: inputD2.value,
            quantity: quantitySupplement_D2,
            loc: shelf.D2
           });
           savedData();
           inputD2.classList.remove("css-input-2");
           inputD2.classList.add("css-input");
           typingState; 
           itemNameHTMLD2.innerHTML = inputD2.value;
           savedOutput[7].itemNameD2 = inputD2.value;
           savedOutput[7].quantityD2 = quantitySupplement_D2;
           console.log(savedOutput);
           savedHTML();
        }
        else if (toggleState === shelf.E1){
          data.push({
            name: inputE1.value,
            quantity: quantitySupplement_E1,
            loc: shelf.E1
            });
            savedData();
            inputE1.classList.remove("css-input-2");
            inputE1.classList.add("css-input");
            typingState; 
            itemNameHTMLE1.innerHTML = inputE1.value;
            savedOutput[8].itemNameE1 = inputE1.value;
            savedOutput[8].quantityE1 = quantitySupplement_E1;
            console.log(savedOutput);
            savedHTML();
            console.log('runs [8]');
        }
        else if (toggleState === shelf.E2){
          data.push({
            name: inputE2.value,
            quantity: quantitySupplement_E2,
            loc: shelf.E2
            });
            savedData();
            inputE2.classList.remove("css-input-2");
            inputE2.classList.add("css-input");
            typingState; 
            itemNameHTMLE2.innerHTML = inputE2.value;
            savedOutput[9].itemNameE2 = inputE2.value;
            savedOutput[9].quantityE2 = quantitySupplement_E2;
            console.log(savedOutput);
            savedHTML();
            console.log('runs [8]');
        }
        else if (toggleState === shelf.F1){
          data.push({
            name: inputF1.value,
            quantity: quantitySupplement_F1,
            loc: shelf.F1
          });
          savedData();
          inputF1.classList.remove("css-input-2");
          inputF1.classList.add("css-input");
          typingState; 
          itemNameHTMLF1.innerHTML = inputF1.value;
          savedOutput[10].itemNameF1 = inputF1.value;
          savedOutput[10].quantityF1 = quantitySupplement_F1;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [9]');
        }
        else if (toggleState === shelf.F2){
          data.push({
            name: inputF2.value,
            quantity: quantitySupplement_F2,
            loc: shelf.F2
          });
          savedData();
          inputF2.classList.remove("css-input-2");
          inputF2.classList.add("css-input");
          typingState; 
          itemNameHTMLF2.innerHTML = inputF2.value;
          savedOutput[11].itemNameF2 = inputF2.value;
          savedOutput[11].quantityF2 = quantitySupplement_F2;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [10]');
        }
        else if (toggleState === shelf.G1){
          data.push({
            name: inputG1.value,
            quantity: quantitySupplement_G1,
            loc: shelf.G1
          });
          savedData();
          inputG1.classList.remove("css-input-2");
          inputG1.classList.add("css-input");
          typingState; 
          itemNameHTMLG1.innerHTML = inputG1.value;
          savedOutput[12].itemNameG1 = inputG1.value;
          savedOutput[12].quantityG1 = quantitySupplement_G1;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [11]');
        }
        else if (toggleState === shelf.G2){
          data.push({
            name: inputG2.value,
            quantity: quantitySupplement_G2,
            loc: shelf.G2
          });
          savedData();
          inputG2.classList.remove("css-input-2");
          inputG2.classList.add("css-input");
          typingState; 
          itemNameHTMLG2.innerHTML = inputG2.value;
          savedOutput[13].itemNameG2 = inputG2.value;
          savedOutput[13].quantityG2 = quantitySupplement_G2;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [12]');
        }
        else if (toggleState === shelf.H1){
          data.push({
            name: inputH1.value,
            quantity: quantitySupplement_H1,
            loc: shelf.H1
          });
          savedData();
          inputH1.classList.remove("css-input-2");
          inputH1.classList.add("css-input");
          typingState; 
          itemNameHTMLH1.innerHTML = inputH1.value;
          savedOutput[14].itemNameH1 = inputH1.value;
          savedOutput[14].quantityH1 = quantitySupplement_H1;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [13]');
        }
        else if (toggleState === shelf.H2){
          data.push({
            name: inputH2.value,
            quantity: quantitySupplement_H2,
            loc: shelf.H2
          });
          savedData();
          inputH2.classList.remove("css-input-2");
          inputH2.classList.add("css-input");
          typingState; 
          itemNameHTMLH2.innerHTML = inputH2.value;
          savedOutput[15].itemNameH2 = inputH2.value;
          savedOutput[15].quantityH2 = quantitySupplement_H2;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [14]');
        }
        else if (toggleState === shelf.I1){
          data.push({
            name: inputI1.value,
            quantity: quantitySupplement_I1,
            loc: shelf.I1
          });
          savedData();
          inputI1.classList.remove("css-input-2");
          inputI1.classList.add("css-input");
          typingState; 
          itemNameHTMLI1.innerHTML = inputI1.value;
          savedOutput[16].itemNameI1 = inputI1.value;
          savedOutput[16].quantityI1 = quantitySupplement_I1;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [15]');
        }
        else if (toggleState === shelf.I2){
          data.push({
            name: inputI2.value,
            quantity: quantitySupplement_I2,
            loc: shelf.I2
          });
          savedData();
          inputI2.classList.remove("css-input-2");
          inputI2.classList.add("css-input");
          typingState; 
          itemNameHTMLI2.innerHTML = inputI2.value;
          savedOutput[17].itemNameI2 = inputI2.value;
        }
        else if (toggleState === shelf.J1){
          data.push({
            name: inputJ1.value,
            quantity: quantitySupplement_J1,
            loc: shelf.J1
          });
          savedData();
          inputJ1.classList.remove("css-input-2");
          inputJ1.classList.add("css-input");
          typingState; 
          itemNameHTMLJ1.innerHTML = inputJ1.value;
          savedOutput[18].itemNameJ1 = inputJ1.value;
          savedOutput[18].quantityJ1 = quantitySupplement_J1;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [17]');
        }
        else if (toggleState === shelf.J2){
          data.push({
            name: inputJ2.value,
            quantity: quantitySupplement_J2,
            loc: shelf.J2
          });
          savedData();
          inputJ2.classList.remove("css-input-2");
          inputJ2.classList.add("css-input");
          typingState; 
          itemNameHTMLJ2.innerHTML = inputJ2.value;
          savedOutput[19].itemNameJ2 = inputJ2.value;
          savedOutput[19].quantityJ2 = quantitySupplement_J2;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [18]');
        }
        else if (toggleState === shelf.K1){
          data.push({
            name: inputK1.value,
            quantity: quantitySupplement_K1,
            loc: shelf.K1
          });
          savedData();
          inputK1.classList.remove("css-input-2");
          inputK1.classList.add("css-input");
          typingState; 
          itemNameHTMLK1.innerHTML = inputK1.value;
          savedOutput[20].itemNameK1 = inputK1.value;
          savedOutput[20].quantityK1 = quantitySupplement_K1;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [19]');
        }
        else if (toggleState === shelf.K2){
          data.push({
            name: inputK2.value,
            quantity: quantitySupplement_K2,
            loc: shelf.K2
          });
          savedData();
          inputK2.classList.remove("css-input-2");
          inputK2.classList.add("css-input");
          typingState; 
          itemNameHTMLK2.innerHTML = inputK2.value;
          savedOutput[21].itemNameK2 = inputK2.value;
          savedOutput[21].quantityK2 = quantitySupplement_K2;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [20]');
        }
        else if (toggleState === shelf.L1){
          data.push({
            name: inputL1.value,
            quantity: quantitySupplement_L1,
            loc: shelf.L1
          });
          savedData();
          inputL1.classList.remove("css-input-2");
          inputL1.classList.add("css-input");
          typingState; 
          itemNameHTMLL1.innerHTML = inputL1.value;
          savedOutput[22].itemNameL1 = inputL1.value;
          savedOutput[22].quantityL1 = quantitySupplement_L1;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [21]');
        }
        else if (toggleState === shelf.L2){
          data.push({
            name: inputL2.value,
            quantity: quantitySupplement_L2,
            loc: shelf.L2
          });
          savedData();
          inputL2.classList.remove("css-input-2");
          inputL2.classList.add("css-input");
          typingState; 
          itemNameHTMLL2.innerHTML = inputL2.value;
          savedOutput[23].itemNameL2 = inputL2.value;
          savedOutput[23].quantityL2 = quantitySupplement_L2;
          console.log(savedOutput);
          savedHTML();
          console.log('runs [22]');
        }
    
        runData();
      }
        //under this
      })
    })

  //PLUS BUTTON
  const buttonAdd = document.querySelectorAll('.js-button-plus-A1,.js-button-plus-A2,.js-button-plus-B1,.js-button-plus-B2,.js-button-plus-C1,.js-button-plus-C2,.js-button-plus-D1,.js-button-plus-D2,.js-button-plus-E1,.js-button-plus-E2,.js-button-plus-F1,.js-button-plus-F2,.js-button-plus-G1,.js-button-plus-G2,.js-button-plus-H1,.js-button-plus-H2,.js-button-plus-I1,.js-button-plus-I2,.js-button-plus-J1,.js-button-plus-J2,.js-button-plus-K1,.js-button-plus-K2,.js-button-plus-L1,.js-button-plus-L2'
);

  buttonAdd.forEach(add => {
    add.addEventListener('click',buttonPlus);
  }
  );
  function buttonPlus(){
    if (toggleState === shelf.A1){
      quantitySupplement_A1++;
      shelfQuantity_A1.innerHTML = `x${quantitySupplement_A1}`;
    } 
    else if (toggleState === shelf.A2){
      quantitySupplement_A2++;
      shelfQuantity_A2.innerHTML = `x${quantitySupplement_A2}`;
    } 
    else if (toggleState === shelf.B1){
      quantitySupplement_B1++;
      shelfQuantity_B1.innerHTML = `x${quantitySupplement_B1}`;
    } 
    else if (toggleState === shelf.B2){
      quantitySupplement_B2++;
      shelfQuantity_B2.innerHTML = `x${quantitySupplement_B2}`;
    } 
    else if (toggleState === shelf.C1){
      quantitySupplement_C1++;
      shelfQuantity_C1.innerHTML = `x${quantitySupplement_C1}`;
    }
    else if (toggleState === shelf.C2){
      quantitySupplement_C2++;
      shelfQuantity_C2.innerHTML = `x${quantitySupplement_C2}`;
    }
    else if (toggleState === shelf.D1){
      quantitySupplement_D1++;
      shelfQuantity_D1.innerHTML = `x${quantitySupplement_D1}`;
    }
    else if (toggleState === shelf.D2){
      quantitySupplement_D2++;
      shelfQuantity_D2.innerHTML = `x${quantitySupplement_D2}`;
    }
    else if (toggleState === shelf.E1){
      quantitySupplement_E1++;
      shelfQuantity_E1.innerHTML = `x${quantitySupplement_E1}`;
    }
    else if (toggleState === shelf.E2){
      quantitySupplement_E2++;
      shelfQuantity_E2.innerHTML = `x${quantitySupplement_E2}`;
    }
    else if (toggleState === shelf.F1){
      quantitySupplement_F1++;
      shelfQuantity_F1.innerHTML = `x${quantitySupplement_F1}`;
    } 
    else if (toggleState === shelf.F2){
      quantitySupplement_F2++;
      shelfQuantity_F2.innerHTML = `x${quantitySupplement_F2}`
      console.log('F2');
    } 
    else if (toggleState === shelf.G1){
      quantitySupplement_G1++;
      shelfQuantity_G1.innerHTML = `x${quantitySupplement_G1}`;
    }
    else if (toggleState === shelf.G2){
      quantitySupplement_G2++;
      shelfQuantity_G2.innerHTML = `x${quantitySupplement_G2}`;
    }
    else if (toggleState === shelf.H1){
      quantitySupplement_H1++;
      shelfQuantity_H1.innerHTML = `x${quantitySupplement_H1}`;
    }
    else if (toggleState === shelf.H2){
      quantitySupplement_H2++;
      shelfQuantity_H2.innerHTML = `x${quantitySupplement_H2}`;
    }
    else if (toggleState === shelf.I1){
      quantitySupplement_I1++;
      shelfQuantity_I1.innerHTML = `x${quantitySupplement_I1}`;
    }
    else if (toggleState === shelf.I2){
      quantitySupplement_I2++;
      shelfQuantity_I2.innerHTML = `x${quantitySupplement_I2}`;
    }
    else if (toggleState === shelf.J1){
      quantitySupplement_J1++;
      shelfQuantity_J1.innerHTML = `x${quantitySupplement_J1}`;
    }
    else if (toggleState === shelf.J2){
      quantitySupplement_J2++;
      shelfQuantity_J2.innerHTML = `x${quantitySupplement_J2}`;
    }
    else if (toggleState === shelf.K1){
      quantitySupplement_K1++;
      shelfQuantity_K1.innerHTML = `x${quantitySupplement_K1}`;
    }
    else if (toggleState === shelf.K2){
      quantitySupplement_K2++;
      shelfQuantity_K2.innerHTML = `x${quantitySupplement_K2}`;
    }
    else if (toggleState === shelf.L1){
      quantitySupplement_L1++;
      shelfQuantity_L1.innerHTML = `x${quantitySupplement_L1}`;
    }
    else if (toggleState === shelf.L2){
      quantitySupplement_L2++;
      shelfQuantity_L2.innerHTML = `x${quantitySupplement_L2}`;
    }
    
  };

//**************//ADD HERE//************//
//SUBTRACT BUTTON
  const buttonSubtract = document.querySelectorAll('.js-button-minus-A1,.js-button-minus-A2,.js-button-minus-B1,.js-button-minus-B2,.js-button-minus-C1,.js-button-minus-C2,.js-button-minus-D1,.js-button-minus-D2,.js-button-minus-E1,.js-button-minus-E2,.js-button-minus-F1,.js-button-minus-F2,.js-button-minus-G1,.js-button-minus-G2,.js-button-minus-H1,.js-button-minus-H2,.js-button-minus-I1,.js-button-minus-I2,.js-button-minus-J1,.js-button-minus-J2,.js-button-minus-K1,.js-button-minus-K2,.js-button-minus-L1,.js-button-minus-L2'
);

  buttonSubtract.forEach(minus => {
    minus.addEventListener('click',buttonMinus); 
    })

    function buttonMinus(){
      if (toggleState === shelf.A1 && quantitySupplement_A1 > 0){
        quantitySupplement_A1--;
        shelfQuantity_A1.innerHTML = `x${quantitySupplement_A1}`;
      }
      else if (toggleState === shelf.A2 && quantitySupplement_A2 > 0){
        quantitySupplement_A2--;
        shelfQuantity_A2.innerHTML = `x${quantitySupplement_A2}`;
      }
      else if (toggleState === shelf.B1 && quantitySupplement_B1 > 0){
        quantitySupplement_B1--;
        shelfQuantity_B1.innerHTML = `x${quantitySupplement_B1}`;
      } 
      else if (toggleState === shelf.B2 && quantitySupplement_B2 > 0){
        quantitySupplement_B2--;
        shelfQuantity_B2.innerHTML = `x${quantitySupplement_B2}`;
      }
      else if (toggleState === shelf.C1 && quantitySupplement_C1 > 0){
        quantitySupplement_C1--;
        shelfQuantity_C1.innerHTML = `x${quantitySupplement_C1}`;
      }
      else if (toggleState === shelf.C2 &&   quantitySupplement_C2 > 0){
        quantitySupplement_C2--;
        shelfQuantity_C2.innerHTML = `x${quantitySupplement_C2}`;
      }
      else if (toggleState === shelf.D1 && quantitySupplement_D1 > 0){
        quantitySupplement_D1--;
        shelfQuantity_D1.innerHTML = `x${quantitySupplement_D1}`;
      }
      else if (toggleState === shelf.D2 &&   quantitySupplement_D2 > 0){
        quantitySupplement_D2--;
        shelfQuantity_D2.innerHTML = `x${quantitySupplement_D2}`;
      }
      else if (toggleState === shelf.E1 &&   quantitySupplement_E1 > 0){
        quantitySupplement_E1--;
        shelfQuantity_E1.innerHTML = `x${quantitySupplement_E1}`;
      }
      else if (toggleState === shelf.E2 &&   quantitySupplement_E2 > 0){
        quantitySupplement_E2--;
        shelfQuantity_E2.innerHTML = `x${quantitySupplement_E2}`;
      }
      else if (toggleState === shelf.F1 && quantitySupplement_F1 > 0){
        quantitySupplement_F1--;
        shelfQuantity_F1.innerHTML = `x${quantitySupplement_F1}`;
      } 
      else if (toggleState === shelf.F2 && quantitySupplement_F2 > 0){
        quantitySupplement_F2--;
        shelfQuantity_F2.innerHTML = `x${quantitySupplement_F2}`;
      } 
      else if (toggleState === shelf.G1 && quantitySupplement_G1 > 0){
        quantitySupplement_G1--;
        shelfQuantity_G1.innerHTML = `x${quantitySupplement_G1}`;
      }
      else if (toggleState === shelf.G2 && quantitySupplement_G2 > 0){
        quantitySupplement_G2--;
        shelfQuantity_G2.innerHTML = `x${quantitySupplement_G2}`;
      }
      else if (toggleState === shelf.H1 && quantitySupplement_H1 > 0){
        quantitySupplement_H1--;
        shelfQuantity_H1.innerHTML = `x${quantitySupplement_H1}`;
      }
      else if (toggleState === shelf.H2 && quantitySupplement_H2 > 0){
        quantitySupplement_H2--;
        shelfQuantity_H2.innerHTML = `x${quantitySupplement_H2}`;
      }
      else if (toggleState === shelf.I1 && quantitySupplement_I1 > 0){
        quantitySupplement_I1--;
        shelfQuantity_I1.innerHTML = `x${quantitySupplement_I1}`;
      }
      else if (toggleState === shelf.I2 && quantitySupplement_I2 > 0){
        quantitySupplement_I2--;
        shelfQuantity_I2.innerHTML = `x${quantitySupplement_I2}`;
      }
      else if (toggleState === shelf.J1 && quantitySupplement_J1 > 0){
        quantitySupplement_J1--;
        shelfQuantity_J1.innerHTML = `x${quantitySupplement_J1}`;
      }
      else if (toggleState === shelf.J2 && quantitySupplement_J2 > 0){
        quantitySupplement_J2--;
        shelfQuantity_J2.innerHTML = `x${quantitySupplement_J2}`;
      }
      else if (toggleState === shelf.K1 && quantitySupplement_K1 > 0){
        quantitySupplement_K1--;
        shelfQuantity_K1.innerHTML = `x${quantitySupplement_K1}`;
      }
      else if (toggleState === shelf.K2 && quantitySupplement_K2 > 0){
        quantitySupplement_K2--;
        shelfQuantity_K2.innerHTML = `x${quantitySupplement_K2}`;
      }
      else if (toggleState === shelf.L1 && quantitySupplement_L1 > 0){
        quantitySupplement_L1--;
        shelfQuantity_L1.innerHTML = `x${quantitySupplement_L1}`;
      }
      else if (toggleState === shelf.L2 && quantitySupplement_L2 > 0){
        quantitySupplement_L2--;
        shelfQuantity_L2.innerHTML = `x${quantitySupplement_L2}`;
      }
      
      else {
        alert('Reach Limit');
    }
  };


//make the function for this object of arrays
const hideUnhide = [
  { id: 'A1', func: clickShelfA1 },
  { id: 'A2', func: clickShelfA2 },
  { id: 'B1', func: clickShelfB1 },
  { id: 'B2', func: clickShelfB2 },
  { id: 'C1', func: clickShelfC1 },
  { id: 'C2', func: clickShelfC2 },
  { id: 'D1', func: clickShelfD1 },
  { id: 'D2', func: clickShelfD2 },
  { id: 'E1', func: clickShelfE1 },
  { id: 'E2', func: clickShelfE2 },
  { id: 'F1', func: clickShelfF1 },
  { id: 'F2', func: clickShelfF2 },
  { id: 'G1', func: clickShelfG1 },
  { id: 'G2', func: clickShelfG2 },
  { id: 'H1', func: clickShelfH1 },
  { id: 'H2', func: clickShelfH2 },
  { id: 'I1', func: clickShelfI1 },
  { id: 'I2', func: clickShelfI2 },
  { id: 'J1', func: clickShelfJ1 },
  { id: 'J2', func: clickShelfJ2 },
  { id: 'K1', func: clickShelfK1 },
  { id: 'K2', func: clickShelfK2 },
  { id: 'L1', func: clickShelfL1 },
  { id: 'L2', func: clickShelfL2 },
  { id: 'HideA1', func: unclickShelfA1 },
  { id: 'HideA2', func: unclickShelfA2 },
  { id: 'HideB1', func: unclickShelfB1 },
  { id: 'HideB2', func: unclickShelfB2 },
  { id: 'HideC1', func: unclickShelfC1 },
  { id: 'HideC2', func: unclickShelfC2 },
  { id: 'HideD1', func: unclickShelfD1 },
  { id: 'HideD2', func: unclickShelfD2 },
  { id: 'HideE1', func: unclickShelfE1 },
  { id: 'HideE2', func: unclickShelfE2 },
  { id: 'HideF1', func: unclickShelfF1 },
  { id: 'HideF2', func: unclickShelfF2 },
  { id: 'HideG1', func: unclickShelfG1 },
  { id: 'HideG2', func: unclickShelfG2 },
  { id: 'HideH1', func: unclickShelfH1 },
  { id: 'HideH2', func: unclickShelfH2 },
  { id: 'HideI1', func: unclickShelfI1 },
  { id: 'HideI2', func: unclickShelfI2 },
  { id: 'HideJ1', func: unclickShelfJ1 },
  { id: 'HideJ2', func: unclickShelfJ2 },
  { id: 'HideK1', func: unclickShelfK1 },
  { id: 'HideK2', func: unclickShelfK2 },
  { id: 'HideL1', func: unclickShelfL1 },
  { id: 'HideL2', func: unclickShelfL2 },
];


function hideUnhideShelves(shelfID){
    hideUnhide.forEach(index => {
      if(shelfID === index.id){
        index.func();
        console.log('index.func')
      }
    })
}

  function clickShelfA1(){
    numberPanelA1.classList.add("css-panelNumber-activeA");
    numberPanelA1.classList.remove("css-panelNumberA");
    enterQuantityA1.classList.add('css-EnterPanelNumber-active');
    enterQuantityA1.classList.remove('css-EnterPanelNumber');
    inputA1.classList.add("css-input");
    inputA1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.A1;
  };
  function unclickShelfA1(){
    toggleHighlight = Hili.off;
    mainShelfA1.classList.remove("shelf-active");
    numberPanelA1.classList.add("css-panelNumberA");
    numberPanelA1.classList.remove("css-panelNumber-activeA");
    enterQuantityA1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityA1.classList.add('css-EnterPanelNumber');
  };

  function clickShelfA2(){
    numberPanelA2.classList.add("css-panelNumber-activeA");
    numberPanelA2.classList.remove("css-panelNumberA");
    enterQuantityA2.classList.add('css-EnterPanelNumber-active');
    enterQuantityA2.classList.remove('css-EnterPanelNumber');
    inputA2.classList.add("css-input");
    inputA2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.A2;
  };
  function unclickShelfA2(){
    toggleHighlight = Hili.off;
    mainShelfA2.classList.remove("shelf-active");
    numberPanelA2.classList.add("css-panelNumberA");
    numberPanelA2.classList.remove("css-panelNumber-activeA");
    enterQuantityA2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityA2.classList.add('css-EnterPanelNumber');
    inputA2.classList.add("css-input");
  };

  function clickShelfB1(){
    numberPanelB1.classList.add("css-panelNumber-activeA");
    numberPanelB1.classList.remove("css-panelNumberA");
    enterQuantityB1.classList.add('css-EnterPanelNumber-active');
    enterQuantityB1.classList.remove('css-EnterPanelNumber');
    inputB1.classList.add("css-input");
    inputB1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.B1;
    togglePanelOnOff = true;
  };
  function unclickShelfB1(){
    numberPanelB1.classList.add("css-panelNumberA");
    numberPanelB1.classList.remove("css-panelNumber-activeA");
    enterQuantityB1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityB1.classList.add('css-EnterPanelNumber');
    inputB1.classList.add("css-input");
    togglePanelOnOff = false;
    toggleHighlight = Hili.off;
    mainShelfB1.classList.remove("shelf-active");
  };

  function clickShelfB2(){
    numberPanelB2.classList.add("css-panelNumber-activeA");
    numberPanelB2.classList.remove("css-panelNumberA");
    enterQuantityB2.classList.add('css-EnterPanelNumber-active');
    enterQuantityB2.classList.remove('css-EnterPanelNumber');
    inputB2.classList.add("css-input");
    inputB2.classList.toggle("css-input-2",false); 
    toggleHighlight = Hili.on;
    toggleState = shelf.B2;
  };
  function unclickShelfB2(){
    numberPanelB2.classList.add("css-panelNumberA");
    numberPanelB2.classList.remove("css-panelNumber-activeA");
    enterQuantityB2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityB2.classList.add('css-EnterPanelNumber');
    inputB2.classList.add("css-input");
    toggleHighlight = Hili.off;
    mainShelfB2.classList.remove("shelf-active");
  };

  function clickShelfC1(){
    numberPanelC1.classList.add("css-panelNumber-activeA");
    enterQuantityC1.classList.add('css-EnterPanelNumber-active');
    numberPanelC1.classList.remove("css-panelNumberA");
    enterQuantityC1.classList.remove('css-EnterPanelNumber');
    inputC1.classList.add("css-input");
    inputC1.classList.toggle("css-input-2",false); 
    toggleHighlight = Hili.on;
    toggleState = shelf.C1;
  };
  function unclickShelfC1(){
    numberPanelC1.classList.add("css-panelNumberA");
    numberPanelC1.classList.remove("css-panelNumber-activeA");
    enterQuantityC1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityC1.classList.add('css-EnterPanelNumber');
    inputC1.classList.add("css-input");
    toggleHighlight = Hili.off;
    mainShelfC1.classList.remove("shelf-active");
  };

  function clickShelfC2(){
    numberPanelC2.classList.add("css-panelNumber-activeA");
    enterQuantityC2.classList.add('css-EnterPanelNumber-active');
    numberPanelC2.classList.remove("css-panelNumberA");
    enterQuantityC2.classList.remove('css-EnterPanelNumber');
    inputC2.classList.add("css-input");
    inputC2.classList.toggle("css-input-2",false); 
    toggleHighlight = Hili.on;
    toggleState = shelf.C2;
  };
  function unclickShelfC2(){
    numberPanelC2.classList.add("css-panelNumberA");
    numberPanelC2.classList.remove("css-panelNumber-activeA");
    enterQuantityC2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityC2.classList.add('css-EnterPanelNumber');
    inputC2.classList.add("css-input");
    toggleHighlight = Hili.off;
    mainShelfC2.classList.remove("shelf-active");
  };


  function clickShelfD1(){
    numberPanelD1.classList.add("css-panelNumber-activeB");
    numberPanelD1.classList.remove("css-panelNumberB");
    enterQuantityD1.classList.add('css-EnterPanelNumber-active');
    enterQuantityD1.classList.remove('css-EnterPanelNumber');
    inputD1.classList.add("css-input");
    inputD1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.D1;
  };
  function unclickShelfD1(){
    numberPanelD1.classList.add("css-panelNumberB");
    numberPanelD1.classList.remove("css-panelNumber-activeB");
    enterQuantityD1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityD1.classList.add('css-EnterPanelNumber');
    inputD1.classList.add("css-input");
    mainShelfD1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfD2(){
    numberPanelD2.classList.add("css-panelNumber-activeB");
    numberPanelD2.classList.remove("css-panelNumberB");
    enterQuantityD2.classList.add('css-EnterPanelNumber-active');
    enterQuantityD2.classList.remove('css-EnterPanelNumber');
    inputD2.classList.add("css-input");
    inputD2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.D2;
  };
  function unclickShelfD2(){
    numberPanelD2.classList.add("css-panelNumberB");
    numberPanelD2.classList.remove("css-panelNumber-activeB");
    enterQuantityD2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityD2.classList.add('css-EnterPanelNumber');
    inputD2.classList.add("css-input");
    mainShelfD2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfE1(){
    numberPanelE1.classList.add("css-panelNumber-activeB");
    numberPanelE1.classList.remove("css-panelNumberB");
    enterQuantityE1.classList.add('css-EnterPanelNumber-active');
    enterQuantityE1.classList.remove('css-EnterPanelNumber');
    inputE1.classList.add("css-input");
    inputE1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.E1;
  };
  function unclickShelfE1(){
    numberPanelE1.classList.add("css-panelNumberB");
    numberPanelE1.classList.remove("css-panelNumber-activeB");
    enterQuantityE1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityE1.classList.add('css-EnterPanelNumber');
    inputE1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfE1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
    function clickShelfE2(){
    numberPanelE2.classList.add("css-panelNumber-activeB");
    enterQuantityE2.classList.add('css-EnterPanelNumber-active');
    numberPanelE2.classList.remove("css-panelNumberB");
    enterQuantityE2.classList.remove('css-EnterPanelNumber');
    inputE2.classList.add("css-input");
    inputE2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.E2;
  };
  function unclickShelfE2(){
    numberPanelE2.classList.add("css-panelNumberB");
    numberPanelE2.classList.remove("css-panelNumber-activeB");
    enterQuantityE2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityE2.classList.add('css-EnterPanelNumber');
    inputE2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfE2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfF1(){
    numberPanelF1.classList.add("css-panelNumber-activeB");
    enterQuantityF1.classList.add('css-EnterPanelNumber-active');
    numberPanelF1.classList.remove("css-panelNumberB");
    enterQuantityF1.classList.remove('css-EnterPanelNumber');
    inputF1.classList.add("css-input");
    inputF1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.F1;
  };
  function unclickShelfF1(){
    numberPanelF1.classList.add("css-panelNumberB");
    numberPanelF1.classList.remove("css-panelNumber-activeB");
    enterQuantityF1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityF1.classList.add('css-EnterPanelNumber');
    inputF1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfF1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfF2(){
    numberPanelF2.classList.add("css-panelNumber-activeB");
    enterQuantityF2.classList.add('css-EnterPanelNumber-active');
    numberPanelF2.classList.remove("css-panelNumberB");
    enterQuantityF2.classList.remove('css-EnterPanelNumber');
    inputF2.classList.add("css-input");
    inputF2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.F2;
  };
  function unclickShelfF2(){
    numberPanelF2.classList.add("css-panelNumberB");
    numberPanelF2.classList.remove("css-panelNumber-activeB");
    enterQuantityF2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityF2.classList.add('css-EnterPanelNumber');
    inputF2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfF2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfG1(){
    numberPanelG1.classList.add("css-panelNumber-activeC");
    numberPanelG1.classList.remove("css-panelNumberC");
    enterQuantityG1.classList.add('css-EnterPanelNumber-active');
    enterQuantityG1.classList.remove('css-EnterPanelNumber');
    inputG1.classList.add("css-input");
    inputG1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.G1;
  };
  function unclickShelfG1(){
    numberPanelG1.classList.add("css-panelNumberC");
    numberPanelG1.classList.remove("css-panelNumber-activeC");
    enterQuantityG1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityG1.classList.add('css-EnterPanelNumber');
    inputG1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfG1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfG2(){
    numberPanelG2.classList.add("css-panelNumber-activeC");
    numberPanelG2.classList.remove("css-panelNumberC");
    enterQuantityG2.classList.add('css-EnterPanelNumber-active');
    enterQuantityG2.classList.remove('css-EnterPanelNumber');
    inputG2.classList.add("css-input");
    inputG2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.G2;
  };
  
  function unclickShelfG2(){
    numberPanelG2.classList.add("css-panelNumberC");
    numberPanelG2.classList.remove("css-panelNumber-activeC");
    enterQuantityG2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityG2.classList.add('css-EnterPanelNumber');
    inputG2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfG2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfH1(){
    numberPanelH1.classList.add("css-panelNumber-activeC");
    enterQuantityH1.classList.add('css-EnterPanelNumber-active');
    numberPanelH1.classList.remove("css-panelNumberC");
    enterQuantityH1.classList.remove('css-EnterPanelNumber');
    inputH1.classList.add("css-input");
    inputH1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.H1;
  };
  
  function unclickShelfH1(){
    numberPanelH1.classList.add("css-panelNumberC");
    numberPanelH1.classList.remove("css-panelNumber-activeC");
    enterQuantityH1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityH1.classList.add('css-EnterPanelNumber');
    inputH1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfH1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfH2(){
    numberPanelH2.classList.add("css-panelNumber-activeC");
    enterQuantityH2.classList.add('css-EnterPanelNumber-active');
    numberPanelH2.classList.remove("css-panelNumberC");
    enterQuantityH2.classList.remove('css-EnterPanelNumber');
    inputH2.classList.add("css-input");
    inputH2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.H2;
  };
  
  function unclickShelfH2(){
    numberPanelH2.classList.add("css-panelNumberC");
    numberPanelH2.classList.remove("css-panelNumber-activeC");
    enterQuantityH2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityH2.classList.add('css-EnterPanelNumber');
    inputH2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfH2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfI1(){
    numberPanelI1.classList.add("css-panelNumber-activeC");
    enterQuantityI1.classList.add('css-EnterPanelNumber-active');
    numberPanelI1.classList.remove("css-panelNumberC");
    enterQuantityI1.classList.remove('css-EnterPanelNumber');
    inputI1.classList.add("css-input");
    inputI1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.I1;
  };
  
  function unclickShelfI1(){
    numberPanelI1.classList.add("css-panelNumberC");
    numberPanelI1.classList.remove("css-panelNumber-activeC");
    enterQuantityI1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityI1.classList.add('css-EnterPanelNumber');
    inputI1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfI1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfI2(){
    numberPanelI2.classList.add("css-panelNumber-activeC");
    enterQuantityI2.classList.add('css-EnterPanelNumber-active');
    numberPanelI2.classList.remove("css-panelNumberC");
    enterQuantityI2.classList.remove('css-EnterPanelNumber');
    inputI2.classList.add("css-input");
    inputI2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.I2;
  };
  
  function unclickShelfI2(){
    numberPanelI2.classList.add("css-panelNumberC");
    numberPanelI2.classList.remove("css-panelNumber-activeC");
    enterQuantityI2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityI2.classList.add('css-EnterPanelNumber');
    inputI2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfI2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfJ1(){
    numberPanelJ1.classList.add("css-panelNumber-activeD");
    enterQuantityJ1.classList.add('css-EnterPanelNumber-active');
    numberPanelJ1.classList.remove("css-panelNumberD");
    enterQuantityJ1.classList.remove('css-EnterPanelNumber');
    inputJ1.classList.add("css-input");
    inputJ1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.J1;
  };
  
  function unclickShelfJ1(){
    numberPanelJ1.classList.add("css-panelNumberD");
    numberPanelJ1.classList.remove("css-panelNumber-activeD");
    enterQuantityJ1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityJ1.classList.add('css-EnterPanelNumber');
    inputJ1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfJ1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  // Similar functions for shelves J2, K1, K2, L1, and L2
  
  function clickShelfJ2(){
    numberPanelJ2.classList.add("css-panelNumber-activeD");
    enterQuantityJ2.classList.add('css-EnterPanelNumber-active');
    numberPanelJ2.classList.remove("css-panelNumberD");
    enterQuantityJ2.classList.remove('css-EnterPanelNumber');
    inputJ2.classList.add("css-input");
    inputJ2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.J2;
  };
  
  function unclickShelfJ2(){
    numberPanelJ2.classList.add("css-panelNumberD");
    numberPanelJ2.classList.remove("css-panelNumber-activeD");
    enterQuantityJ2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityJ2.classList.add('css-EnterPanelNumber');
    inputJ2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfJ2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfK1(){
    numberPanelK1.classList.add("css-panelNumber-activeD");
    enterQuantityK1.classList.add('css-EnterPanelNumber-active');
    numberPanelK1.classList.remove("css-panelNumberD");
    enterQuantityK1.classList.remove('css-EnterPanelNumber');
    inputK1.classList.add("css-input");
    inputK1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.K1;
  };
  
  function unclickShelfK1(){
    numberPanelK1.classList.add("css-panelNumberD");
    numberPanelK1.classList.remove("css-panelNumber-activeD");
    enterQuantityK1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityK1.classList.add('css-EnterPanelNumber');
    inputK1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfK1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  // Similar functions for shelves K2, L1, and L2
  
  function clickShelfK2(){
    numberPanelK2.classList.add("css-panelNumber-activeD");
    enterQuantityK2.classList.add('css-EnterPanelNumber-active');
    numberPanelK2.classList.remove("css-panelNumberD");
    enterQuantityK2.classList.remove('css-EnterPanelNumber');
    inputK2.classList.add("css-input");
    inputK2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.K2;
  };
  
  function unclickShelfK2(){
    numberPanelK2.classList.add("css-panelNumberD");
    numberPanelK2.classList.remove("css-panelNumber-activeD");
    enterQuantityK2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityK2.classList.add('css-EnterPanelNumber');
    inputK2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfK2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfL1(){
    numberPanelL1.classList.add("css-panelNumber-activeD");
    enterQuantityL1.classList.add('css-EnterPanelNumber-active');
    numberPanelL1.classList.remove("css-panelNumberD");
    enterQuantityL1.classList.remove('css-EnterPanelNumber');
    inputL1.classList.add("css-input");
    inputL1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.L1;
  };
  
  function unclickShelfL1(){
    numberPanelL1.classList.add("css-panelNumberD");
    numberPanelL1.classList.remove("css-panelNumber-activeD");
    enterQuantityL1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityL1.classList.add('css-EnterPanelNumber');
    inputL1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfL1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfL2(){
    numberPanelL2.classList.add("css-panelNumber-activeD");
    enterQuantityL2.classList.add('css-EnterPanelNumber-active');
    numberPanelL2.classList.remove("css-panelNumberD");
    enterQuantityL2.classList.remove('css-EnterPanelNumber');
    inputL2.classList.add("css-input");
    inputL2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.L2;
  };
  
  function unclickShelfL2(){
    numberPanelL2.classList.add("css-panelNumberD");
    numberPanelL2.classList.remove("css-panelNumber-activeD");
    enterQuantityL2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityL2.classList.add('css-EnterPanelNumber');
    inputL2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfL2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
//TODO Hide all other inputs except the one
  function hideAllInput(){
    allEXP.forEach(expInput => {
      if(clickEXPInput === !shelf.A1)
      expInput.classList.add("expInput-Empty");
    })
    divHTML.innerHTML = savedOutput[index][savedExpInput];
  }
  //! HIDE OTHER INPUTS
  function inputHide(shelfID){
    HideInputs.forEach(input => {
      if(shelfID === input.id){
        input.func();
        console.log('input.func')
      }
    })
  }

  const HideInputs = [
    { id: 'A1', func: hideInputsA1 },
    { id: 'A2', func: hideInputsA2 },
    { id: 'B1', func: hideInputsB1 },
    { id: 'B2', func: hideInputsB2 },
    { id: 'C1', func: hideInputsC1 },
    { id: 'C2', func: hideInputsC2 },
    { id: 'D1', func: hideInputsD1 },
    { id: 'D2', func: hideInputsD2 },
    { id: 'E1', func: hideInputsE1 },
    { id: 'E2', func: hideInputsE2 },
    { id: 'F1', func: hideInputsF1 },
    { id: 'F2', func: hideInputsF2 },
    { id: 'G1', func: hideInputsG1 },
    { id: 'G2', func: hideInputsG2 },
    { id: 'H1', func: hideInputsH1 },
    { id: 'H2', func: hideInputsH2 },
    { id: 'I1', func: hideInputsI1 },
    { id: 'I2', func: hideInputsI2 },
    { id: 'J1', func: hideInputsJ1 },
    { id: 'J2', func: hideInputsJ2 },
    { id: 'K1', func: hideInputsK1 },
    { id: 'K2', func: hideInputsK2 },
    { id: 'L1', func: hideInputsL1 },
    { id: 'L2', func: hideInputsL2 }
  ];
  

  function hideInputsA1(){
    EXPinputDateA1.classList.add("expInput-Empty");
  }
  function hideInputsA2(){
    EXPinputDateA2.classList.add("expInput-Empty");
  }
  function hideInputsB1(){
    EXPinputDateB1.classList.add("expInput-Empty");
  }
  function hideInputsB2(){
    EXPinputDateB2.classList.add("expInput-Empty");
  }
  function hideInputsC1(){
    EXPinputDateC1.classList.add("expInput-Empty");
  }
  function hideInputsC2(){
    EXPinputDateC2.classList.add("expInput-Empty");
  }
  function hideInputsD1(){
    EXPinputDateD1.classList.add("expInput-Empty");
  }
  function hideInputsD2(){
    EXPinputDateD2.classList.add("expInput-Empty");
  }
  function hideInputsE1(){
    EXPinputDateE1.classList.add("expInput-Empty");
  }
  function hideInputsE2(){
    EXPinputDateE2.classList.add("expInput-Empty");
  }
  function hideInputsF1(){
    EXPinputDateF1.classList.add("expInput-Empty");
  }
  function hideInputsF2(){
    EXPinputDateF2.classList.add("expInput-Empty");
  }
  function hideInputsG1(){
    EXPinputDateG1.classList.add("expInput-Empty");
  }
  function hideInputsG2(){
    EXPinputDateG2.classList.add("expInput-Empty");
  }
  function hideInputsH1(){
    EXPinputDateH1.classList.add("expInput-Empty");
  }
  function hideInputsH2(){
    EXPinputDateH2.classList.add("expInput-Empty");
  }
  function hideInputsI1(){
    EXPinputDateI1.classList.add("expInput-Empty");
  }
  function hideInputsI2(){
    EXPinputDateI2.classList.add("expInput-Empty");
  }
  function hideInputsJ1(){
    EXPinputDateJ1.classList.add("expInput-Empty");
  }
  function hideInputsJ2(){
    EXPinputDateJ2.classList.add("expInput-Empty");
  }
  function hideInputsK1(){
    EXPinputDateK1.classList.add("expInput-Empty");
  }
  function hideInputsK2(){
    EXPinputDateK2.classList.add("expInput-Empty");
  }
  function hideInputsL1(){
    EXPinputDateL1.classList.add("expInput-Empty");
  }
  function hideInputsL2(){
    EXPinputDateL2.classList.add("expInput-Empty");
  }
  