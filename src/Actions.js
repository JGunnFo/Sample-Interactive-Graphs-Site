
export const GOTO = "GOTO";

export function GoTo(inputted="main"){
    return {type: GOTO,
    payload: inputted};
}