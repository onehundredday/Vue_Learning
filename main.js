var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'vmSocks-green-onWhite.jpg',
        inventory: 11,
        inStock: false,
        detials: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantID: 2234,
                variantColor: "green",
                image: 'vmSocks-green-onWhite.jpg'

            },
            {
                variantID: 2235,
                variantColor: "blue",
                image: 'vmSocks-blue-onWhite.jpg'

            }
        ],
        cart: 0,

    },
    methods: {
        addToCart: function () {
            this.cart += 1

        },
        updateProduct: function(image) {
            this.image = image
        }, 
    },
})