
function generateGenderData()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('secondNameOutput').innerText = initPerson.secondname;
    document.getElementById('photo').src = `images/${initPerson.genderImage}.svg`;
    document.getElementById('birthYearOutput').innerText = initPerson.dateBornP;
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
};

document.querySelector('#update').addEventListener('click', generateGenderData);

document.querySelector('#refine').addEventListener('click', generateGenderDataNull);