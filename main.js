//
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
let task1 = document.createElement('h2');
task1.innerText = 'Task 1';
task1.style.fontSize = '33px';
document.body.appendChild(task1);
//Розв'язок
let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.innerText = 'This is my block';
//додаю елементи поки що до самого блоку не перезаписував звернення в змінну яку б знайшло через класс
block.style.margin = '2px';
block.style.background = '#6964E2';
block.style.color = '#fc5b00';
block.style.fontSize = '33px';
block.style.float = 'left';
block.style.display = 'inline-block';
block.style.clear = 'both';
//
document.body.appendChild(block);
document.body.appendChild(block.cloneNode(true));





//==============================================================
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
let task2 = task1.cloneNode(true);
task2.innerText = 'Task 2';
task2.style.paddingTop = '20px';
task2.style.clear = 'both';
document.body.appendChild(task2);
//
const mass = ['Main','Products','About us','Contacts'];
//
let ul = document.createElement('ul');
document.body.appendChild(ul);
ul.classList.add('ul');
let ulClass = document.getElementsByClassName('ul');
// console.log(ulClass);
for (let i = 0; i < mass.length; ++i) {
    let li = document.createElement('li');
    li.innerText = `${mass[i]}`;
    li.style.fontSize = '25px';
    ulClass[0].append(li);
}
//
ulClass[0].style.clear = 'both';





//==============================================================
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
let task3 = task2.cloneNode(true);
task3.innerText = 'Task 3';
task3.style.paddingTop = '0';
document.body.appendChild(task3);
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
for (const courses of coursesAndDurationArray) {
let div = document.createElement('div');
    let keys = Object.keys(courses);
    div.style.fontSize = '18px';
    div.innerText = `${keys[0]}: ${courses[keys[0]]}, ${keys[1]}: ${courses[keys[1]]};`;
    document.body.appendChild(div);
}





// =========================
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
//
//
let task4 = task3.cloneNode(true);
task4.innerText = 'Task 4';
task4.style.background = 'silver';
document.body.appendChild(task4);
//
//Використовую і звертаюсь до масиву із минулого завдання він такий ж самий.
//
for(let i = 0; i < coursesAndDurationArray.length; ++i) {
  let div = document.createElement('div');
    div.classList.add('item');
    document.body.appendChild(div);
    //
  let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${coursesAndDurationArray[i]['title']}`;
  //
  let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${coursesAndDurationArray[i]['monthDuration']}`;
//
    div.append(h1, p);
}





// ==========================
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
let task5 = task3.cloneNode(true);
task5.innerText = 'Task 5';
task5.style.background = 'silver';
document.body.appendChild(task5);
//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
//
//
for (const simpson of simpsons) {
    let div1 = document.createElement('div');
    div1.classList.add('member');
    div1.style.border = '2px solid yellow';
    div1.style.margin = '3px';
    div1.style.padding = '10px';
    document.body.appendChild(div1);
    //
    let keys = Object.keys(simpson);
    //
    let h2 = document.createElement('h2');
    h2.innerText = `${simpson[keys[0]]} ${simpson[keys[1]]}`;
    let h2a = document.createElement('h2');
    h2a.innerText = `${keys[2]} is: ${simpson[keys[2]]}`;
    let p = document.createElement('p');
    p.innerText = `${simpson[keys[3]]}`;
    p.style.overflowWrap = 'break-word';
    let img = document.createElement('img');
    img.src = `${simpson[keys[4]]}`;
    div1.append(h2, h2a, p, img);
    img.style.width = '100%';
}





// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let task6 = task3.cloneNode(true);
task6.innerText = 'Task 6';
task6.style.background = 'none';
task6.style.paddingTop = '56px';
document.body.appendChild(task6);
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//Розв'язок
for(let i = 0; i < coursesArray.length; ++i){
let mainBlock = document.createElement('div');
    mainBlock.style.border = '2px solid red';
    mainBlock.style.margin = '5px 0px';
    mainBlock.style.padding = '11px 20px';
let title = document.createElement('div')
    title.innerText = `${coursesArray[i]['title']}`;
//чи можна цю команду використовувати? Вона щоб прималому вікні букви обрізались вниз
    title.style.overflowWrap = 'break-word';
    //
    title.style.fontWeight = 'bolder';
    title.style.fontSize = '27px';
    title.style.marginTop = '5px';
    title.style.marginBottom = '2px';
    title.style.border = '2px solid #106EBE';
    title.style.padding = '3px';
let block2 = document.createElement('div');
    block2.style.display = 'flex';
    block2.style.flexWrap = 'wrap';
let month = document.createElement('div');
    month.innerText = `місяців: ${coursesArray[i]['monthDuration']}`;
//чи можна використовувати цю команду?
    month.style.overflowWrap = 'break-word';
    //
    month.style.fontWeight = 'bold';
    month.style.fontStyle = 'italic';
    month.style.border = '2px solid #106EBE';
    month.style.margin = '5px 0px';
    month.style.padding = '11px 20px';
    //
    month.style.flexGrow = '2';
    //
let hours = document.createElement('div');
    hours.innerText = `годин: ${coursesArray[i]['hourDuration']}`;
    hours.style.fontWeight = 'bold';
    hours.style.fontStyle = 'italic';
    hours.style.border = '2px solid #106EBE';
    hours.style.margin = '5px 0px 5px 5px';
    hours.style.padding = '11px 20px';
    //
    hours.style.flexGrow = '6';
    //
    block2.append(month, hours);
    //
let modules = document.createElement('div');
    modules.style.border = '2px solid #106EBE';
let ul = document.createElement('ul');
    ul.style.paddingLeft = '2%';
    ul.style.margin = '10px 0';
    for (const ulElement of coursesArray[i]['modules']) {
        let li = document.createElement('li');
        li.style.border = '2px solid #106EBE';
        li.style.listStylePosition = 'inside';
        li.style.paddingLeft = '2%';
        li.style.marginRight = '2%';
        li.style.marginTop = '0.5%';
        li.innerText = `${ulElement}`;
        ul.append(li);
    }
    modules.append(ul);
    //
mainBlock.append(title, block2, modules);
//
document.body.appendChild(mainBlock);
}





// ==========================
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
let task7 = task3.cloneNode(true);
task7.innerText = 'Task 7';
task7.style.background = 'none';
document.body.appendChild(task7);
//
//Розв'язок
let form1 = document.createElement('form');
// form1.action = 'none';
form1.method = 'GET';
form1.style.display = 'flex';
form1.style.flexWrap = 'wrap';
//
let input1 = document.createElement('input');
input1.type = 'number';
input1.placeholder = 'Your age...';
input1.style.margin = '3px';
input1.style.display = 'flex';
input1.style.maxWidth = '96%';
//
let button1 = document.createElement('button');
button1.style.margin = '3px';
button1.innerText = 'PRESS';
button1.style.display = 'flex';
button1.style.overflowWrap = 'break-word';
button1.type = 'button';
//поки не знав про івент використовував власну функцію
button1.onclick = removeFunc;
//
form1.append(input1, button1);
document.body.appendChild(form1);
//
//функція яка приховує або повертає прихований файл
function removeFunc() {
    // event.preventDefault();
    if (input1.style.display === "none") {
        input1.style.display = "flex";
    } else {
        input1.style.display = "none";
        input1.value = "";
    }
    // form1.style.remove();
}




// ==========================
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
let task8 = task7.cloneNode(true);
task8.innerText = 'Task 8';
document.body.appendChild(task8);
//
let form2 = document.createElement('form');
form2.method = 'GET';
form2.style.display = 'flex';
form2.style.flexWrap = 'wrap';
//
let input2 = document.createElement('input');
input2.type = 'number';
input2.placeholder = 'Your age...';
input2.style.margin = '3px';
input2.style.display = 'flex';
input2.style.maxWidth = '96%';
//
let button2 = document.createElement('button');
button2.style.margin = '3px';
button2.innerText = 'PRESS';
button2.style.display = 'flex';
button2.style.overflowWrap = 'break-word';
button2.type = 'button';
//поки не знав про івент метод використовував функцію власну
button2.onclick = reviewFunc;
//
form2.append(input2, button2);
document.body.appendChild(form2);
//
//функція для перевірки
function reviewFunc() {
    if (input2.value < 18) {
        alert('Ваш вік менше 18 років!');
    }
    else confirm('Вce добре! Продовжуєм!');
}




//============================
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
//
//
let task9 = task7.cloneNode(true);
task9.innerText = 'Task 9';
document.body.appendChild(task9);
//
let div = document.createElement('div');
//
let form3 = document.createElement('form');
form3.style.display = 'flex';
form3.style.flexWrap = 'wrap';
form3.style.margin = '0 0 5% 0';
//
let input3 = document.createElement('input');
input3.type = 'number';
input3.placeholder = 'Rows...';
input3.style.margin = '0px 1%';
input3.style.height = '3vh';
input3.style.flexGrow = '3';
//
let input4 = document.createElement('input');
input4.type = 'number';
input4.placeholder = 'Columns...';
input4.style.margin = '0px 1%';
input4.style.height = '3vh';
input4.style.flexGrow = '3';
//
let input5 = document.createElement('input');
input5.type = 'text';
input5.placeholder = 'Сontent...';
input5.style.margin = '0px 1%';
input5.style.height = '3vh';
input5.style.flexGrow = '3';
//
let button3 = document.createElement('button');
button3.type = 'button';
button3.innerText = 'Confirm';
button3.style.margin = '1% 1% 0 1%';
button3.style.height = '5vh';
button3.style.flexBasis = '100%';
button3.addEventListener('click', () => {
    //
    const rows = input3.value;
    const columns = input4.value;
    const contents = input5.value;
if (columns > 0 && rows > 0)
{
    let table = document.createElement('table');
    for (let i = 0; i < rows; ++i) {
        let tr = document.createElement('tr');
        tr.style.background = 'white';
        tr.style.border = '1px solid black';
        table.appendChild(tr);
        for (let j = 0; j < columns; ++j) {
            let td = document.createElement('td');
            td.innerText = `${contents}`;
            td.style.background = 'white';
            td.style.border = '1px solid black';
            td.style.overflowWrap = 'break-word';
            td.style.padding = '10px';
            input3.value = '';
            input4.value = '';
            input5.value = '';
            tr.appendChild(td);
        }
    }
    table.style.background = 'black';
    table.style.border = '2px solid black';
    document.body.appendChild(table);
    //
    button3.style.backgroundColor = 'green';
    setTimeout(() => {
        button3.style.backgroundColor = '';
    }, 1500);
    //
} else {
    button3.style.backgroundColor = 'red';
    setTimeout(() => {
        button3.style.backgroundColor = '';
    }, 1500);
}
});
//
form3.append(input3, input4, input5, button3);
document.body.append(form3);