class Draw {
    constructor(num) {
        this.num = num
        this.draw(this.num)
    }

    static new(num) {
        return new this(num)
    }

    template() {
        return `<span class="nav-span"></span>`
    }

    draw(num) {
        let nums = num
        let html = this.template()
        this.element = e('.nav-content')
        for (let i = 0; i < nums; i++) {
            for (let j = 0; j < nums; j++) {
                this.element.insertAdjacentHTML('beforeend', html)
            }
        }
    }
}