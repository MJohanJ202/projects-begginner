const root = document.documentElement
const cardFormShoes = document.getElementById('cardFormShoes')
const cardShoesImg = document.getElementById('cardShoesImg')

cardFormShoes?.addEventListener('submit', e => {
	e.preventDefault()
  console.log(e)
})

cardFormShoes?.addEventListener('change', e => {
	if (!e?.target || e?.target['name'] !== 'shoesColor') return null
	cardShoesImg?.setAttribute('src', `assets/${e?.target['value']}.png`)
	root.style.setProperty('--clip-path-color', e?.target['dataset']?.color)
})
