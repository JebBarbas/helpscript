export default class HelscriptError extends Error{
    constructor(message:string){
        super(message)
        this.name = 'HelpscriptError'
    }
}