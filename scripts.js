class Calcultaor{
    constructor(previousOperandTextElement, currentOperandtextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandtextElement=currentOperandtextElement

    }
    clear(){
        this.currentOperandtextElement=""
        this.previousOperandTextElement=""
        this.operation= undefined

    }
    delete(){

    }
    appendNumber(number){

    }
    chooseoperation(operation){

    }
    compute(){

    }
    updatedisplay(){

    }




    }







const numberButtone=document.querySelectorAll('[data-number]')
const operationButtons=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelectorAll('[data-equals]')
const deleteButton=document.querySelectorAll('[data-delete]')
const allClearButton=document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement=document.querySelectorAll('[data-previous-operand]')
const currentOperandtextElement=document.querySelectorAll('[data-current-operand]')