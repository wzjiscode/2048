class Index {
    constructor(num) {
        this.element = es('.nav-span')
        this.m = f1(2, num * num)
        this.setup(this.m, num)
        this.eventListener(num)
    }

    static new(num) {
        return new this(num)
    }

    setup(m, num) {
        let element = this.element
        let random = m
        let list_data = []
        for (let i = 0; i < m.length; i++) {
            element[random[i]].innerHTML = 2
            element[random[i]].classList.add('addbgc')
        }
        for (let i = 0; i < element.length; i++) {
            list_data.push(element[i].innerHTML)
        }
        for (let i = 0; i < list_data.length; i++) {
            if (list_data[i] !== '') {
                list_data[i] = parseInt(list_data[i])
            }
        }
        let newArr = []
        while(list_data.length > 0) {
            newArr.push(list_data.splice(0, num));
        }
        this.array = newArr
    }

    dataLoad(m, num) {
        let rand = Math.random() * (4 + 1 - 1),
            floor = Math.floor(rand),
            data = this.array
        if (data[floor][floor] === '') {
            data[floor].splice(floor, 1, 2)
        }
        let element = this.element
        if (m === '上') {
            this.moveUp(num, data)
        } else if (m === '下') {
            this.moveDown(num, data)
        } else if (m === '左') {
            this.moveLeft(num, data)
        } else if (m === '右'){
            this.moveRight(num, data)
        }
        let list = []
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                 list.push(data[i][j])
            }
        }
        for (let i = 0; i < list.length; i++) {
            element[i].innerHTML = list[i]
        }

        for (let i = 0; i < element.length; i++) {
            let dict = {
                '2': 'addbgc',
                '4': 'addfth',
                '8': 'addeth',
                '16': 'addshlv',
                '32': 'addsaner',
                '64': 'addsaners',
            }
            let key = element[i].innerHTML
            let obj = Object.keys(dict)
            for (let keys of obj) {
                element[i].classList.remove(dict[keys])
            }
            if (dict[key] !== undefined) {
                element[i].classList.add(dict[key])
            }
        }
    }

    moveUp(num, data) {
        for(let j = 0; j < num; j++) {
            for(let i = 0; i < num - 1; i++) {
                if(data[i][j] === data[i + 1][j]) {
                    data[i][j] += data[i + 1][j]
                    data[i + 1][j] = ''
                }
                 this.clearUp(num, data)
            }
        }
    }

    moveDown(num, data) {
        for (let j = 0; j < num; j++) {
            for(let i = num - 1; i > 0; i--){
                if(data[i][j] === data[i - 1][j]){
                    data[i][j] += data[i - 1][j]
                    data[i - 1][j] = ''
                }
                this.clearDown(num, data)
            }
        }
    }

    moveLeft(num, data) {
        for(let i = 0; i < num; i++){
            for(let j = 0; j < num - 1; j++){
                if (data[i][j] === data[i][j + 1]) {
                    data[i][j] += data[i][j + 1]
                    data[i][j + 1] = ''
                }
                this.clearLeft(num, data)
            }
        }
    }

    moveRight(num, data) {
        for(let i = 0; i < num; i++){
            for(let j = 0; j < num - 1; j++){
                if(data[i][j] === data[i][j + 1]){
                    data[i][j + 1] += data[i][j]
                    data[i][j] = ''
                }
                this.clearRight(num, data)
            }
        }
    }

    clearUp(num, data) {
        for(let j = 0; j < num; j++){
            for(let i = 0; i < num; i++){
                for(let k = i; k >= 0; k--){
                    if (data[i][j] !== '' && data[k][j] === '') {
                        data[k][j] = data[i][j]
                        data[i][j] = ''
                    }
                }
            }
        }
    }

    clearDown(num, data) {
        for(let j = 0; j < num; j++){
            for(let i = num - 1; i >= 0; i--){
                for(let k = i; k < num; k++){
                    if(data[i][j] !== '' && data[k][j] === ''){
                        data[k][j] = data[i][j]
                        data[i][j] = ''
                    }
                }
            }
        }
    }

    clearRight(num, data) {
        for(let i = 0; i < num; i++){
            for(let j = num - 1; j >= 0; j--){
                for(let k = j; k < num; k++){
                    if (data[i][j] !== '' && data[i][k] === '') {
                        data[i][k] = data[i][j]
                        data[i][j] = ''
                    }
                }
            }
        }
    }

    clearLeft(num, data) {
        for(let i = 0; i < num; i++){
            for(let j = 0; j < num; j++){
                for(let k = j; k >= 0; k--){
                    if (data[i][j] !== '' && data[i][k] === '') {
                        data[i][k] = data[i][j]
                        data[i][j] = ''
                    }
                }
            }
        }
    }

    eventListener(num) {
        let self = this
        window.addEventListener('keydown', function(event) {
            let keys = event.key
            let dict = {
                'ArrowRight' : '右',
                'ArrowDown' : '下',
                'ArrowLeft' : '左',
                'ArrowUp' : '上',
            }
            if (dict[keys] !== undefined) {
                let m = dict[keys]
                self.dataLoad(m, num)
            }
        })
    }
}