import { LightningElement, api } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {};
    correctAnswers = 0;
    showResult = false;

    myQuestion = [
        {
            Id : "Ques 1",
            question : "Apex is a proprietary language developed by the?",
            answers : {
                a : "IBM",
                b : "Microsoft",
                c : "Salesforce",
                d : "Meta"
            },
            correctAnswer : "c"
        },
        {
            Id : "Ques 2",
            question : "Apex is a?",
            answers : {
                a : "strongly typed",
                b : "object-oriented programming language",
                c : "Both A and B",
                d : "None of the above"
            },
            correctAnswer : "c"
        },
        {
            Id : "Ques 3",
            question : "sObject is the data type in Apex?",
            answers : {
                a : "Yes",
                b : "No",
                c : "Can be yes or no",
                d : "Can not say"
            },
            correctAnswer : "a"
        },
        {
            Id : "Ques 4",
            question : "Which of the following is a 32-bit number that does not include any decimal point?",
            answers : {
                a : "Enums",
                b : "Integer",
                c : "Classes",
                d : "Double"
            },
            correctAnswer : "b"
        },
        {
            Id : "Ques 5",
            question : "Long is a 64-bit number without a decimal point.",
            answers : {
                a : "Yes",
                b : "No",
                c : "Can be yes or no",
                d : "Can not say"
            },
            correctAnswer : "a"
        }
    ];

    get isScoredFull(){
        return `slds-text-heading_large slds-text-align_center ${this.myQuestion.length === this.correctAnswers?
        'slds-text-color_success' : 'slds-text-color_error'}`
    }

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestion.length)
    }

    changeHandler(event){
        console.log(event.target.name);
        console.log(event.target.value);
        const {name, value} = event.target;
        this.selected = {...this.selected, [name]:value}
    }

    submitHandler(event){
        this.showResult = true;
        event.preventDefault();
        let correct = this.myQuestion.filter(item => this.selected[item.Id] === item.correctAnswer);
        this.correctAnswers = correct.length;
        console.log(this.correctAnswers);
    }

    resetHandler(){
        this.showResult = false;
        this.selected = {};
        this.correctAnswers = 0;
    }
}