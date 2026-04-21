const form = document.getElementById("contactForm")
const msg = document.getElementById("formMsg")

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const name = document.getElementById("name")?.value.trim()
        const email = document.getElementById("email")?.value.trim()
        const message = document.getElementById("message")?.value.trim()

        // reset mensagem
        msg.textContent = ""
        msg.style.color = "#fff"

        // validações
        if (!name || name.length < 3) {
            msg.textContent = "❌ Nome muito curto"
            msg.style.color = "red"
            return
        }

        if (!email || !email.includes("@")) {
            msg.textContent = "❌ Email inválido"
            msg.style.color = "red"
            return
        }

        if (!message || message.length < 10) {
            msg.textContent = "❌ Mensagem muito curta"
            msg.style.color = "red"
            return
        }

        // sucesso
        msg.textContent = "✅ Mensagem enviada com sucesso!"
        msg.style.color = "lime"

        form.reset()
    })
}