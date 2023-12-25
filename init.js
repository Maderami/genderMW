
function generateGenderData()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('secondNameOutput').innerText = initPerson.secondname;
    document.getElementById('photo').src = `images/${initPerson.genderImage}.svg`;
    document.getElementById('birthYearOutput').innerText = initPerson.dateBornP;
    document.getElementById('prof').innerText = initPerson.professionName;
    styleElem = document.querySelector('.container');
    styleElem.style.backgroundColor = (initPerson.gender == 'Женщина') ? 'pink' : 'blue';
    styleBtnUp = document.querySelector('#update');
    styleBtnUp.style.border =  (initPerson.gender == 'Женщина') ? '10px solid pink' : '10px solid blue';
    styleBtnRef = document.querySelector('#refine');
    styleBtnRef.style.border =  (initPerson.gender == 'Женщина') ? '10px solid pink' : '10px solid blue';

};


function generateGenderDataNull()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = "Нет данных";
    document.getElementById('genderOutput').innerText = "Нет данных";
    document.getElementById('surnameOutput').innerText = "Нет данных";
    document.getElementById('secondNameOutput').innerText = "Нет данных";
    document.getElementById('photo').src = `images/nophoto.svg`;
    document.getElementById('birthYearOutput').innerText = "Нет данных";
    document.getElementById('prof').innerText = "Нет данных";
    styleElem = document.querySelector('.container');
    styleElem.style.backgroundColor = 'white';
    styleBtnUp = document.querySelector('#update');
    styleBtnUp.style.border =  '1px solid black';
    styleBtnRef = document.querySelector('#refine');
    styleBtnRef.style.border = '1px solid black';
};

document.querySelector('#update').addEventListener('click', generateGenderData);

document.querySelector('#refine').addEventListener('click', generateGenderDataNull);