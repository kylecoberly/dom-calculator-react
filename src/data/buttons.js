export default function getButtons(clear, add, evaluate){
    return [{
        display: "C",
        isOperator: true,
        id: "clear",
        behavior: clear
    },{
        display: "÷",
        action: "/",
        isOperator: true,
        behavior: add,
    },{
        display: "x",
        action: "*",
        isOperator: true,
        behavior: add,
    },{
        display: "7",
        behavior: add,
    },{
        display: "8",
        behavior: add,
    },{
        display: "9",
        behavior: add,
    },{
        display: "-",
        isOperator: true,
        behavior: add,
    },{
        display: "4",
        behavior: add,
    },{
        display: "5",
        behavior: add,
    },{
        display: "6",
        behavior: add,
    },{
        display: "+",
        isOperator: true,
        behavior: add,
    },{
        display: "1",
        behavior: add,
    },{
        display: "2",
        behavior: add,
    },{
        display: "3",
        behavior: add,
    },{
        display: "=",
        isOperator: true,
        id: "equals",
        behavior: evaluate,
    }]
}
