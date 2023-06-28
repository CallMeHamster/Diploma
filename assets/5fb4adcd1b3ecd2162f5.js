function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,_toPropertyKey(s.key),s)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var n=_toPrimitive(e,"string");return"symbol"===_typeof(n)?n:String(n)}function _toPrimitive(e,n){if("object"!==_typeof(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var s=t.call(e,n||"default");if("object"!==_typeof(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}import"./style.css";var button=document.querySelector(".navigationbtn"),nav=document.querySelector(".navigation");button.addEventListener("click",(function(){button.classList.toggle("navigationbtn--active"),nav.classList.toggle("navigation--active")}));var articles=document.getElementById("articles"),article=document.querySelector(".navigationarticles");articles.addEventListener("mouseover",(function(){article.classList.add("navigationarticles--active")})),articles.addEventListener("mouseout",(function(){article.classList.remove("navigationarticles--active")}));var leftSide=document.querySelectorAll(".leftside-articles"),leftSideText=document.querySelectorAll(".leftside__text-article"),rightSideArticles=document.querySelectorAll(".rightside-articles");function leftSideSlide(e){e.addEventListener("mouseover",(function(){leftSide.forEach((function(e){return e.classList.add("leftside-articles--active")})),leftSideText.forEach((function(e){return e.classList.add("leftside__text-article--active")})),rightSideArticles.forEach((function(e){return e.style.width="75%"})),button.style.left="25.2vw"})),e.addEventListener("mouseout",(function(){leftSide.forEach((function(e){return e.classList.remove("leftside-articles--active")})),leftSideText.forEach((function(e){return e.classList.remove("leftside__text-article--active")})),rightSideArticles.forEach((function(e){return e.style.width="95%"})),button.style.left="5.2vw"}))}leftSide.forEach((function(e){return leftSideSlide(e)}));var Quiz=function(){function e(n,t,s){_classCallCheck(this,e),this.type=n,this.questions=t,this.results=s,this.score=0,this.result=0,this.current=0}return _createClass(e,[{key:"Click",value:function(e){var n=this.questions[this.current].Click(e);this.score+=n;var t=-1;if(n>=1)t=e;else for(var s=0;s<this.questions[this.current].answers.length;s++)if(this.questions[this.current].answers[s].value>=1){t=s;break}return this.Next(),t}},{key:"Next",value:function(){this.current++,this.current>=this.questions.length&&this.End()}},{key:"End",value:function(){for(var e=0;e<this.results.length;e++)this.results[e].Check(this.score)&&(this.result=e)}}]),e}(),Question=function(){function e(n,t){_classCallCheck(this,e),this.text=n,this.answers=t}return _createClass(e,[{key:"Click",value:function(e){return this.answers[e].value}}]),e}(),Answer=_createClass((function e(n,t){_classCallCheck(this,e),this.text=n,this.value=t})),Result=function(){function e(n,t){_classCallCheck(this,e),this.text=n,this.value=t}return _createClass(e,[{key:"Check",value:function(e){return this.value<=e}}]),e}(),results=[new Result("Вам многому нужно научиться",5),new Result("Вы уже неплохо разбираетесь",10),new Result("Ваш уровень выше среднего",15),new Result("Вы в совершенстве знаете тему",20)],questionsFirst=[new Question("Что такое математическое моделирование?",[new Answer("Процесс поиска физической модели",0),new Answer("Процесс сбора реальных данных",0),new Answer("Процесс создания математического представления явлений реального мира",1),new Answer("Разработка 3D приложений",0)]),new Question("Что такое модель в контексте математического моделирования?",[new Answer("Миниатюрная копия копия объекта",0),new Answer("Математическое представление системы или процесса",1),new Answer("Точное представление реальных объектов",0),new Answer("Физический объект",0)]),new Question("Какова цель математического моделирования?",[new Answer("Понимать и анализировать сложные системы с помощью мат. инструментов",1),new Answer("Предсказывать будущие явления",0),new Answer("Обнаружение новых физических фактов",0),new Answer("Виртуальное представление объектов",0)]),new Question("Что из перечисленного НЕ является этапом математического моделирования?",[new Answer("Формулировка математической модели",0),new Answer("Сбор реальных данных",0),new Answer("Анализ и интерпретация результатов модели",0),new Answer("Установка и настройка соответствующего ПО",1)]),new Question("Как проверяются математические модели?",[new Answer("Путем сравнения предсказаний модели с реальными наблюдениями или экспериментами.",1),new Answer("Подбросом монеты, на удачу",0),new Answer("Математические модели не нуждаются в проверке",0),new Answer("Проверить мат. модель не предоставляется возможным",0)]),new Question("Какова роль предположений в математическом моделировании?",[new Answer("Предположения усложняют модель",0),new Answer("Предположения помогают упростить проблему и сделать ее более управляемой",1),new Answer("Предположения не нужны, когда можно создать модель",0),new Answer("Проверить мат. модель не предоставляется возможным",0)]),new Question("Чем отличается модель от реальной системы, которую она представляет?",[new Answer("Разницы нет, они идентичны",0),new Answer("Модели всегда более точны, чем реальная система",0),new Answer("Модели представляют собой упрощенные представления реальной системы",1),new Answer("Реальная система представляет собой упрощенную версию модели",0)]),new Question("Какие бывают математические модели?",[new Answer("Физические и виртуальные модели",0),new Answer("Линейные и нелинейные модели",0),new Answer("Детерминированные и стохастические модели",0),new Answer("Все вышеперечисленное",1)]),new Question("В чем разница между детерминированными и стохастическими моделями?",[new Answer("Детерминированные модели предполагают случайность, а стохастические модели - нет.",0),new Answer("Детерминированные модели имеют один результат, а стохастические модели имеют несколько возможных результатов",1),new Answer("Детерминированные модели используются в физике, а стохастические модели используются в экономике.",0),new Answer("разницы нет; это синонимичные термины",0)]),new Question("Что такое имитационная модель?",[new Answer("Модель, включающая физические эксперименты",0),new Answer("Модель, используемая в компьютерной графике и играх",0),new Answer("Модель, которая представляет поведение системы во времени посредством вычислений",1),new Answer("Модель, которая используется только в математической теории",0)]),new Question("Что такое эмпирическая модель?",[new Answer("Модель, основанная на теоретических предположениях",0),new Answer("Модель, которая представляет поведение системы с использованием реальных данных",1),new Answer("Модель, которая не может быть подтверждена или проверена",0),new Answer("Модель, созданная только на основе мнений экспертов",0)]),new Question("Что такое модель черного ящика?",[new Answer("Модель, которую трудно понять или интерпретировать",0),new Answer("Модель, в которой используются объекты черного цвета.",0),new Answer("Модель, которая держится в секрете и не разглашается другим",0),new Answer("Модель, внутренняя работа которой неизвестна или не важна для ее использования",1)]),new Question("Каковы этапы построения математической модели?",[new Answer("Сбор данных, предположения и использование генератора случайных чисел",0),new Answer("Определение проблемы, формулирование модели, решение модели и интерпретация результатов",1),new Answer("Написание кода, запуск симуляций и создание визуализаций",0),new Answer("Нет конкретных шагов, это интуитивно понятный процесс",0)]),new Question("Что такое анализ чувствительности в математическом моделировании?",[new Answer("Анализ эмоционального воздействия результатов модели",0),new Answer("Оценка реакции модели на изменение входных параметров",1),new Answer("Проверка совместимости модели с различными программными системами",0),new Answer("Оценка популярности модели среди пользователей",0)]),new Question("Какова цель проверки модели?",[new Answer("Доказательство того, что модель на 100% точна и надежна",0),new Answer("Обеспечение максимально точного соответствия прогнозов модели наблюдаемым данным",1),new Answer("Добавление сложности и неопределенности в процесс моделирования",0),new Answer("Сравнение модели с конкурирующими моделями на рынке",0)]),new Question("Каково значение оценки параметров в математическом моделировании?",[new Answer("Определение количества параметров, необходимых для модели",0),new Answer("Оценка стоимости и времени, необходимых для построения модели",0),new Answer("Расчет неопределенности, связанной с результатами модели",0),new Answer("Получение наилучших возможных значений параметров модели на основе имеющихся данных",1)]),new Question("Какова цель проверки модели?",[new Answer("Доказательство того, что модель на 100% точна и надежна",0),new Answer("Обеспечение максимально точного соответствия прогнозов модели наблюдаемым данным",1),new Answer("Добавление сложности и неопределенности в процесс моделирования",0),new Answer("Сравнение модели с конкурирующими моделями на рынке",0)]),new Question("Каково назначение программного обеспечения для математического моделирования?",[new Answer("Создание визуально привлекательных моделей для презентаций",0),new Answer("Автоматизация процесса построения и решения математических моделей",1),new Answer("Генерация случайных чисел для статистического анализа",0),new Answer("Развлечение с помощью математических головоломок",0)]),new Question("Каковы некоторые общие черты программного обеспечения для математического моделирования?",[new Answer("Воспроизведение музыки и видео",0),new Answer("Быстро и точно выполнять сложные математические вычисления",1),new Answer("Отправка электронных писем и работа в Интернете",0),new Answer("Рецепты приготовления пищи и управление личными финансами",0)]),new Question("Как программное обеспечение для моделирования способствует математическому моделированию?",[new Answer("Предоставляет виртуальную среду для наблюдения и изучения поведения моделей",1),new Answer("Автоматически генерирует математические модели без участия пользователя.",0),new Answer("Преобразует физические модели в цифровые представления",0),new Answer("Позволяет пользователям играть в игры, связанные с математическими понятиями",0)])],quiz=new Quiz(1,questionsFirst,results);function UpdateFirst(){if(quiz.current<quiz.questions.length){document.getElementById("headFirst").innerHTML=quiz.questions[quiz.current].text,document.getElementById("buttonsFirst").innerHTML="";for(var e=0;e<quiz.questions[quiz.current].answers.length;e++){var n=document.createElement("button");n.className="button",n.innerHTML=quiz.questions[quiz.current].answers[e].text,n.setAttribute("index",e),document.getElementById("buttonsFirst").appendChild(n)}document.getElementById("pagesFirst").innerHTML=quiz.current+1+" / "+quiz.questions.length,Init()}else document.getElementById("buttonsFirst").innerHTML="",document.getElementById("headFirst").innerHTML=quiz.results[quiz.result].text,document.querySelector(".testupdate").insertAdjacentHTML("beforeend","Обновите страницу, чтобы пройти тест еще раз"),document.getElementById("pagesFirst").innerHTML="Очки: ".concat(quiz.score," / ").concat(quiz.questions.length)}function Init(){for(var e=document.getElementsByClassName("button"),n=0;n<e.length;n++)e[n].addEventListener("click",(function(e){Click(e.target.getAttribute("index"))}))}function Click(e){for(var n=quiz.Click(e),t=document.getElementsByClassName("button"),s=0;s<t.length;s++)t[s].className="button button_passive";1==quiz.type?(n>=0&&(t[n].className="button button_correct"),e!=n&&(t[e].className="button button_wrong")):t[e].className="button button_correct",setTimeout(UpdateFirst,1e3)}UpdateFirst();