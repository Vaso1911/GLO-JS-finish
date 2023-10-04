const div = document.getElementById('div')
const span = document.getElementById('span')

// Есть объект с цветами


const computedStylesFunc = (el, obj) => {
const computedStyles = window.getComputedStyle(el);
const displayProperty = computedStyles.getPropertyValue('display');

if (displayProperty === 'block') {
  el.style.color = obj.second
} 
if (displayProperty === 'inline') {
  el.style.color = obj.first
}
}
const colorsFirst = {
  first: 'red',
  second: 'blue',
  third: 'green'
}

const colorsSecond = {
  first: 'orange',
  second: 'yellow',
  third: 'violet'
}


// Есть такая структура


const files = [
  {
    id: 0,
    items: [
      {
        text: 'Lorem ipsum',
        element: 'p'
      },
      {
        text: 'Lorem ipsum',
        element: 'span'
      },
      {
        text: 'Lorem ipsum',
        element: 'div'
      },
      {
        text: 'Lorem ipsum',
        element: 'strong'
      },
      {
        text: 'Lorem ipsum',
        element: 'p'
      },
      {
        text: 'Lorem ipsum',
        element: 'b'
      },
      {
        text: 'Lorem ipsum',
        element: 'div'
      },
      {
        text: 'Lorem ipsum',
        element: 'strong'
      }
    ]
  },
  {
    id: 1,
    items: [
      {
        text: 'Lorem ipsum',
        element: 'span'
      },
      {
        text: 'Lorem ipsum',
        element: 'b'
      },
      {
        text: 'Lorem ipsum',
        element: 'div'
      },
      {
        text: 'Lorem ipsum',
        element: 'strong'
      },
      {
        text: 'Lorem ipsum',
        element: 'span'
      },
      {
        text: 'Lorem ipsum',
        element: 'b'
      },
      {
        text: 'Lorem ipsum',
        element: 'span'
      },
      {
        text: 'Lorem ipsum',
        element: 'strong'
      }
    ]
  },
  {
    id:2,
    items: [
      {
        text: 'Lorem ipsum',
        element: 'span'
      },
      {
        text: 'Lorem ipsum',
        element: 'b'
      },
      {
        text: 'Lorem ipsum',
        element: 'div'
      },
      {
        text: 'Lorem ipsum',
        element: 'strong'
      },
      {
        text: 'Lorem ipsum',
        element: 'span'
      },
      {
        text: 'Lorem ipsum',
        element: 'b'
      },
      {
        text: 'Lorem ipsum',
        element: 'span'
      },
      {
        text: 'Lorem ipsum',
        element: 'strong'
      }
    ]
  },  {
    id: 3,
    items: [
      {
        text: 'Lorem ipsum',
        element: 'p'
      },
      {
        text: 'Lorem ipsum',
        element: 'span'
      },
      {
        text: 'Lorem ipsum',
        element: 'div'
      },
      {
        text: 'Lorem ipsum',
        element: 'strong'
      },
      {
        text: 'Lorem ipsum',
        element: 'p'
      },
      {
        text: 'Lorem ipsum',
        element: 'b'
      },
      {
        text: 'Lorem ipsum',
        element: 'div'
      },
      {
        text: 'Lorem ipsum',
        element: 'strong'
      }
    ]
  },
]

files.forEach(el => {
  el.items.forEach(e => {


    const elem = e.element
    const elemCreat = document.createElement(`${elem}`)
    elemCreat.classList.add('el')

    if (el.id % 2 == 0) {
      elemCreat.textContent = `${e.text} ${el.id + 1}(объект)`
    setTimeout(() => {
      computedStylesFunc(elemCreat, colorsFirst)
      if(elem === 'strong' || elem === 'b') {
        elemCreat.style.color = colorsFirst.third
      }
    }, 300)

    div.append(elemCreat)
    } else {
      elemCreat.textContent = `${e.text} ${el.id + 1}(объект)`
      setTimeout(() => {
        computedStylesFunc(elemCreat, colorsSecond)
              if(elem === 'strong' || elem === 'b') {
        elemCreat.style.color = colorsSecond.third
      }
      }, 300)
      span.append(elemCreat)
    }




  })
})


// Задача простая))
// 1) Перебрать массив
// 2) На основании массивов items построить элементы и разместить на странице
// 3) Элементы должны соответствовать указанным в объектах
// 4) Раскрасить цвета следующим образом:

// - все объекты первого файла берут цвета из первого объекта, второго файла - из второго
// - строчные элементы получают цвет first
// - блочные - second
// - элементы жирного шрифта - third

// 5) Сделать циклом forEach
// 6) Если добавить третий, четвертый и пятый файлы они должны брать цвета так же из первого и второго обьекта
// - то есть третий файл из первого
// - четвертый из второго
// - пятый снова из первого

