export class Quote {
    public showQuoteBody:boolean;
    constructor(public quoteName: string, public quoteBody:string, public author:string, public submittedBy:string, public upVote:number, public downVote:number, public dateOfSubmit:Date){
        this.showQuoteBody=false
    }
    
}
