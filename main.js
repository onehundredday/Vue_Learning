var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mystery',
        product: 'Socks',
        selectedVariant: 0,
        inventory: 11,
        detials: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantID: 2234,
                variantColor: "green",
                image: 'vmSocks-green-onWhite.jpg',
                quantity: 10

            },
            {
                variantID: 2235,
                variantColor: "blue",
                image: 'vmSocks-blue-onWhite.jpg',
                quantity: 0

            }
        ],
        cart: 0,

    },
    methods: {
        addToCart: function () {
            this.cart += 1

        },
        updateProduct: function(index) {
            this.selectedVariant = index
        }, 
    },
    computed: {
        title() {
            return this.brand + ' '  + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
    },
})