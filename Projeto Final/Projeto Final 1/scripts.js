const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')

let active = 0
const total = items.length
let timer

/* =======================
   SLIDER
======================= */
function update(direction) {
    document.querySelector('.item.active')?.classList.remove('active')
    document.querySelector('.dot.active')?.classList.remove('active')

    if (direction > 0) {
        active++
        if (active === total) active = 0
    } else {
        active--
        if (active < 0) active = total - 1
    }

    items[active]?.classList.add('active')
    dots[active]?.classList.add('active')

    if (numberIndicator) {
        numberIndicator.textContent = String(active + 1).padStart(2, '0')
    }

    clearInterval(timer)
    timer = setInterval(() => update(1), 4000)
}

prevButton?.addEventListener('click', () => update(-1))
nextButton?.addEventListener('click', () => update(1))

timer = setInterval(() => update(1), 4000)

/* =======================
   CARRINHO
======================= */
let cart = JSON.parse(localStorage.getItem("cart")) || []

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

function addToCart(product) {
    const item = cart.find(p => p.id === product.id)

    if (item) {
        item.qty++
    } else {
        cart.push({ ...product, qty: 1 })
    }

    saveCart()
    updateCartUI()
    alert(product.name + " adicionado 🛒")
}

function removeFromCart(id) {
    cart = cart.filter(p => p.id !== id)
    saveCart()
    renderCart()
    updateCartUI()
}

function getTotal() {
    return cart.reduce((t, i) => t + i.price * i.qty, 0)
}

function updateCartUI() {
    const el = document.getElementById("cart-count")
    if (el) el.textContent = cart.reduce((t, i) => t + i.qty, 0)
}

/* =======================
   PRODUTOS
======================= */
const products = [
    { id: 1, name: "Harry Potter", price: 15, img: "./img/funko1.png", category: "filme" },
    { id: 2, name: "Bonnie", price: 18, img: "./img/Funko2.png", category: "jogo" },
    { id: 3, name: "Mike", price: 20, img: "./img/Funko3.png", category: "jogo" }
]

const listEl = document.getElementById("product-list")

function renderProducts(filter = "") {
    if (!listEl) return

    listEl.innerHTML = ""

    products
        .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(p => {
            const div = document.createElement("div")
            div.className = "product-card"

            div.innerHTML = `
                <img src="${p.img}" width="100">
                <h3>${p.name}</h3>
                <p>€${p.price}</p>
                <button class="btn buy-btn">Comprar</button>
            `

            div.querySelector("button").onclick = () => addToCart(p)

            listEl.appendChild(div)
        })
}

/* SEARCH */
document.getElementById("search")?.addEventListener("input", e => {
    renderProducts(e.target.value)
})

renderProducts()

/* =======================
   FORM CONTATO
======================= */
document.getElementById("contactForm")?.addEventListener("submit", e => {
    e.preventDefault()

    const name = document.getElementById("name")?.value.trim()
    const email = document.getElementById("email")?.value.trim()
    const msg = document.getElementById("message")?.value.trim()

    if (!name || name.length < 3) return alert("Nome inválido")
    if (!email || !email.includes("@")) return alert("Email inválido")
    if (!msg || msg.length < 10) return alert("Mensagem curta")

    alert("Mensagem enviada 🚀")
    e.target.reset()
})

/* =======================
   CHECKOUT
======================= */
document.getElementById("checkoutForm")?.addEventListener("submit", e => {
    e.preventDefault()

    if (cart.length === 0) {
        alert("Carrinho vazio")
        return
    }

    alert("Pedido enviado 🚀")
    cart = []
    saveCart()
    updateCartUI()
})