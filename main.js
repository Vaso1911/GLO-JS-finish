const container = document.querySelector('.container')
const select = document.createElement('select')
const option = document.createElement('option')
const div = document.createElement('div')

option.textContent = 'Выберите тачку'
div.textContent = 'выберите тачку'

select.append(option)
container.append(select)
container.append(div)

const createOption = (car) => {
  const option = document.createElement('option')
  option.value = car.brand
  option.textContent = car.brand
  select.append(option)
  console.log(option.value);
}

const createContent = (car) => {
  div.innerHTML = `
    <p>Тачка ${car.brand} ${car.model}</p>
    <p>Цена: ${car.price}$</p>
    `;
  container.append(div)
}


const loadHeroes = async () => {
  try {
    const response = await fetch('cars.json');
    const data = await response.json();
    console.dir(data.cars);
    data.cars.forEach(car => {
      createOption(car);
      console.log(car.brand);

    })
    select.addEventListener('change', () => {
      div.innerHTML = '';
      const selectedCar = data.cars.find(car => car.brand === select.value);
      if (selectedCar) {
        createContent(selectedCar);
      } else {
        div.textContent = 'выберите тачку';
      }
    })

  } catch (error) {
    console.error('Произошла ошибка при загрузке данных:', error);
  }
}

loadHeroes()