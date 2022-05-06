// interface ResData {
//     useId:number
//     id:number
//     title:string
//     body:string
// }


class FifteenthTitle {
    static #URL = 'https://jsonplaceholder.typicode.com/posts'
    static #ID = 15

    static #get() {
        fetch(FifteenthTitle.#URL)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(resData => FifteenthTitle.#getTitleFormJson(resData))
            .then(title => console.log(title))
            .catch(({message}) => console.error(message))
    }

    //static #getTitleFormJson(resData: ResData[]) {
    static #getTitleFormJson(resData) {
        const itemWithTitle = resData.find(item => item.id === FifteenthTitle.#ID)
        const title = itemWithTitle.title

        return title
    }

    run() {
        FifteenthTitle.#get()
    }
}

const fifteenthTitle = new FifteenthTitle()
fifteenthTitle.run()