let btn = document.createElement('input')
btn.type = 'button'
btn.value = 'Кнопка'
document.body.appendChild(btn)
btn.onclick = () => btn.value = 'Кирпич'