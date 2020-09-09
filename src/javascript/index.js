const commands = [
	{
		id: 1,
		name: 'ban',
		content:
			'Il zbori pe unu de pe server',
	},
	{
		id: 2,
		name: 'kick',
		content: 'Da afara un dobitoc de pe server',
	},
	{
		id: 3,
		name: "mute",
		content:
			'Ii dai mute unui prost',
	},
	{
		id: 4,
		name: 'unmute',
		content:
			'Il lasi pe prost sa vorbeasca',
	},
	{
		id: 5,
		name: 'serverinfo',
		content:
			'Vezi informatiile server-ului rspectiv',
	},
	{
		id: 6,
		name: 'userinfo',
		content:
			'Vezi informatii legate de tine sau alta persoana',
	},
	{
		id: 7,
		name: 'avatar',
		content: 'Vezi ce avatar de tot rasul aia sau avatarul altei persoane mentionate',
	},
	{
		id: 8,
		name: 'gay',
		content: 'Vezi cat de gay esti sau cat de gay e persoana mentionata',
	},
  	{
		id: 9,
		name: 'dick',
		content: 'La asta nici nu ma mai chinui sa-i fac o descriere',
	},
  	{
		id: 10,
		name: 'slap',
		content: 'Lovesti o persoana mentionata',
	},
  {
		id: 11,
		name: 'loves',
		content: 'Vezi cat de mult te potrivesti cu persoana mentionata',
	},
  {
		id: 12,
		name: 'hug',
		content: 'Imbratisezi persoana mentionata',
	},
  {
		id: 13,
		name: 'coinflip',
		content: 'Dai cu banul',
	},
  {
		id: 14,
		name: 'invite',
		content: 'Inviti botul in server',
	},
  {
		id: 15,
		name: 'google',
		content: 'Cauti cv pe google',
	},
  {
		id: 16,
		name: 'calculate',
		content: 'Calculezi ceva',
	},
   {
		id: 16,
		name: 'dog',
		content: 'Iti da imagini cu caini daca esti zoofil',
	},
  {
		id: 17,
		name: 'cat',
		content: 'Iti da imagini cu pisici daca esti zoofil',
	},
  {
		id: 18,
		name: 'stats',
		content: 'La asta numai are rost sa fac o descriere',
	},
  {
		id: 19,
		name: 'cry',
		content: 'Stii ce face asta',
	},
  
  
]
const search = document.querySelector('#search-command')
let timer = null
const buttonVideo = document.querySelector('#watch-video')
const buttonClose = document.querySelector('#close-video')
const videoContainer = document.querySelector('.video-container')
buttonClose.addEventListener('click', () => {
	const iframe = document.querySelector('#video-iframe')
	iframe.src =
		''
	videoContainer.classList.remove('d-flex')
})
buttonVideo.addEventListener('click', () => {
	const width = window.innerWidth
	if (width < 700) {
		window.open('https://youtu.be/e7O1EHRi3q4', '_blank')
	} else {
		videoContainer.classList.add('d-flex')
	}
})
search.onkeydown = elm => {
	clearTimeout(timer)
	$('#commands-container').empty()
	timer = setTimeout(() => {
		const value = elm.target.value
		if (value.length <= 1) {
			$('#commands-container').empty()
			setAllCards()
		} else {
			commands.forEach(command => {
				const { name, content } = command
				const valg = new RegExp(value, 'gi')
				if (content.match(valg) || name.match(valg)) {
					const template = `
					<div class="card">
					<div class="head d-flex  align-items-center">
						<div class="avatar">
							<img src="https://images-ext-1.discordapp.net/external/JTiGpoyhaeuiebENJOJ4but8mPUSJUPpNYH2AKTfSIU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/578969989453709344/03d02ac9fcdf13ec202d0c2953bedad3.png?width=225&height=225" alt="">
						</div>
						<div class="command">
							<span>${command.name}</span>
						</div>
				
					</div>
					<div class="content">
						<p>${command.content}</p>
					</div>
				</div>
					`
					$('#commands-container').append(template)
				}
			})
		}
	}, 1000)
}
function setAllCards() {
	commands.forEach(command => {
		const template = `
        <div class="card">
        <div class="head d-flex  align-items-center">
        <div class="avatar">
                <img src="https://images-ext-1.discordapp.net/external/JTiGpoyhaeuiebENJOJ4but8mPUSJUPpNYH2AKTfSIU/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/578969989453709344/03d02ac9fcdf13ec202d0c2953bedad3.png?width=225&height=225" alt="">
                </div>
            <div class="command">
                <span>${command.name}</span>
            </div>
    
            </div>
        <div class="content">
            <p>${command.content}</p>
        </div>
    </div>
    `
		$('#commands-container').append(template)
	})
}
setAllCards()
