// функция которая принимает первый параметр некий тип и второй  который собирает все остальные параметр в массив
// после метод фильтр создаёт новый массив из значений массива ...values , которые вернут true если они строго ровны первому параметру(аргументу) функции
const filterByType = (type, ...values) => values.filter(value => typeof value === type),
//функция которая собирает в массив все div с классом dialog__response-block , после пробигается по массиву и скрывает все блоки 
	hideAllResponseBlocks = () => {
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		responseBlocksArray.forEach(block => block.style.display = 'none');
	},
// функция которая принимает три параметра , первый и третий параметр отвечают за секлектор элемента ,
//  а второй параметр за контекст элемента третьего параметра , при условии , что он существует
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		hideAllResponseBlocks();
		document.querySelector(blockSelector).style.display = 'block';
		if (spanSelector) {
			document.querySelector(spanSelector).textContent = msgText;
		}
	},


	// функция которая принимет параметр некий текст)) и вызывает внутри себя функицю showResponseBlock
	// мы помним что в функия showResponseBlock имеет 3 параметра , два из которых селекты и мы передаём 
	// блоки с ошибкой, а в качестве 2 аргумента всё тот же некий текст 
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),

// идентична функция что и предыдущая только показывает блок если всё ОК )) 
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),

	// функция которая вызывает внутри себя функицю showResponseBlock с одним параметром селекта 
	// и выводит блок , который мы видим при загрузке страницы))) блок без результата
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),

	// функция котораяотфильтровывает значения по указанному типу
	// и вот тут мы вызываем функции  при успехе showResults при ошибке showError
	// с соответсвующим текстом  для параметра msgText
	// а ещё я прочитал что eval опасен(
	tryFilterByType = (type, values) => {
		try {
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			const alertMsg = (valuesArray.length) ?
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			showResults(alertMsg);
		} catch (e) {
			showError(`Ошибка: ${e}`);
		}
	};

// Получаем элемент(кнопку) по id
const filterButton = document.querySelector('#filter-btn');

// КЛИКАЕМ)))
filterButton.addEventListener('click', e => {
	 // Получаем элементы по id
	const typeInput = document.querySelector('#type');
	const dataInput = document.querySelector('#data');

	// Проверяем, не пусто ли
	if (dataInput.value === '') {
		// выводим ошибку в  самом инпуте через метод setCustomValidity
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		// запускаем функцию без результата
		showNoResults();
	} else {
		// в противном случае очищаем ошибку в инпуте 
		dataInput.setCustomValidity('');

		// запрещавем стандартное поведения кнопки по которо кликнули 
		// в нашем случае это отправка формы , так как кнока находится в форме)
		e.preventDefault();

		// Вызываем функцию фильтрации с типом из поля 'type' и данными из поля 'data'
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});




