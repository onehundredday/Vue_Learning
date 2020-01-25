var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'vmSocks-green-onWhite.jpg',
        inventory: 11,
        detials: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantID: 2234,
                variantColor: "green"

            },
            {
                variantID: 2235,
                variantColor: "blue"

            }
        ],
        cart:0,
        methods: {
            addToCart() {
                this.cart += 1
                console.log("nima")
            },
        },

    }
}
)