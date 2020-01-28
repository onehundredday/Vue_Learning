
Vue.component('product', {
    props: {
        premium: {
        type: Boolean,
        required: true
       } 
    },
    template: `
    <div class="product">

    <div class="product-image">
        <img v-bind:src="image">

    </div>

    <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inStock"> In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{shipping}}</p>
        <ul>
            <li v-for ="detial in detials"> {{detial}}
        </ul>
        <div v-for= "(variant, index) in variants"
             :key="variant.variantID"
             class="color-box"
             :style="{backgroundColor:variant.variantColor}"
             @mouseover="updateProduct(index)">
        </div>
        <button v-on:click="addToCart"
        :disabled="!inStock"
        :class="{disabledButton: !inStock}">Add to cart</button>
        <div class="cart">Cart({{cart}})</div>
    </div>


</div> 
`,
data() {
    return  {
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
        cart: 0
    
    }
    },
    methods: {
        addToCart: function () {
            this.cart += 1
    
        },
        updateProduct: function(index) {
            this.selectedVariant = index
        }, 
    
} ,
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
    shipping() {
        if(this.premium) {
            return "Free"
        } else {
            return "2.99"
        }
        
    }
},

})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})