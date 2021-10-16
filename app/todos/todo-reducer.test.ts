import * as todo_reducer from "./todo-reducer"
// @ponicode
describe("todo_reducer.todoReducer", () => {
    test("0", () => {
        let callFunction: any = () => {
            todo_reducer.todoReducer(undefined, { type: "", payload: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
