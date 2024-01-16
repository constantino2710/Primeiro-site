function togglemode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/jc oculos de sol.jpg')
    }

    else{
        img.setAttribute('src', 'https://avatars.githubusercontent.com/u/112436573?v=4')

    }

}