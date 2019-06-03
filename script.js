const nebulas = document.querySelectorAll('#nebula')
const galaxies = document.querySelectorAll('#galaxy')
const clusters = document.querySelectorAll('#cluster')
const allObjects = document.querySelectorAll('.single-object')
const searchInput = document.querySelector('#search-input')


const hideNebulas = document.querySelector('#nebula-li')
const hideGalaxies = document.querySelector('#galaxy-li')
const hideClusters = document.querySelector('#cluster-li')

let isClickedNebulas = false
let isClickedGalaxies = false
let isClickedClusters = false

const filters = {
    searchText: ''
}

hideNebulas.addEventListener('click', () => {
  if (!isClickedNebulas) {
    nebulas.forEach((nebula) => {
    nebula.setAttribute('id', 'hidden')
    isClickedNebulas = true
    hideNebulas.setAttribute('class', 'hovered')
  })
    
  } else if (isClickedNebulas) {
      nebulas.forEach((nebula) => {
      nebula.setAttribute('id', 'nebula')
      isClickedNebulas = false
      hideNebulas.setAttribute('class', '')
      })  
  }
})

hideGalaxies.addEventListener('click', () => {
  if (!isClickedGalaxies) {
    galaxies.forEach((galaxy) => {
    galaxy.setAttribute('id', 'hidden')
    isClickedGalaxies = true
    hideGalaxies.setAttribute('class', 'hovered')
  })
    
  } else if (isClickedGalaxies) {
      galaxies.forEach((galaxy) => {
      galaxy.setAttribute('id', 'galaxy')
      isClickedGalaxies = false
      hideGalaxies.setAttribute('class', '')
      })  
  }
})

hideClusters.addEventListener('click',() => {
  if (!isClickedClusters) {
    clusters.forEach((cluster) => {
    cluster.setAttribute('id', 'hidden')
    isClickedClusters = true
    hideClusters.setAttribute('class', 'hovered')
  })
    
  } else if (isClickedClusters) {
      clusters.forEach((cluster) => {
      cluster.setAttribute('id', 'cluster')
      isClickedClusters = false
      hideClusters.setAttribute('class', '')
      })  
  }
})

searchInput.addEventListener('input', (e) => {
    filters.searchText = e.target.value
    allObjects.forEach((singleObject) => {
        if (!singleObject.innerText.toLowerCase().includes(filters.searchText.toLowerCase())) {
            singleObject.setAttribute('class', 'hidden')
        } else {
            singleObject.setAttribute('class', 'single-object')
        }
    })
})
