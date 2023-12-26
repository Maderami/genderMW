const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    secondNameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванович",
            "id_2": "Ярославович",
            "id_3": "Кириллович",
            "id_4": "Васильевич",
            "id_5": "Петрович",
            "id_6": "Михайлович",
            "id_7": "Сергеевич",
            "id_8": "Федорович",
            "id_9": "Павлович",
            "id_10": "Николаевич",
            "id_11": "Семёнович",
            "id_12": "Станиславович",
            "id_13": "Степанович",
            "id_14": "Пракофьевич",
            "id_15": "Александрович",
            "id_16": "Гаврилович"
        }
    }`,

    firstNameWifeJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Маргарита",
            "id_3": "Алина",
            "id_4": "Васелиса",
            "id_5": "Инна",
            "id_6": "Вероника",
            "id_7": "Валерия",
            "id_8": "Галина",
            "id_9": "Екатерина",
            "id_10": "Ефросинья"
        }
    }`,
    profMaleName: `{
        "count": 10,
        "list": {     
            "id_1": "Програмист",
            "id_2": "Врач",
            "id_3": "Маркетолог",
            "id_4": "Финансовый аналитик",
            "id_5": "Инженер",
            "id_6": "Физик",
            "id_7": "Электрик",
            "id_8": "Нефтяник",
            "id_9": "Автомеханик",
            "id_10": "Менеджер по продажам"
        }
    }`,
    profFemale:`{
        "count": 10,
        "list": {
            "id_1": "Фармацевт",
            "id_2": "Методист",
            "id_3": "Медсестра",
            "id_4": "Воспитатель",
            "id_5": "Врач-косметолог",
            "id_6": "Логопед",
            "id_7": "Секретарь",
            "id_8": "Библиотекарь",
            "id_9": "Швея",
            "id_10": "Лаборант"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomGender: function() {
         
        if (this.randomIntNumber() == 1) {
            gender = this.GENDER_MALE;
            return gender;
        } else {
            gender = this.GENDER_FEMALE;
            return gender; 
        }
    },
    randomSecondname: function() {
         
        console.log(gender + 'genderSecond');
        let Secondname = this.randomValue(this.firstNameMaleJson)+'ов';
        if(gender == this.GENDER_FEMALE) {
            wifeSecondname = Secondname;
            return wifeSecondname + 'на';  
        } else {
            return Secondname+'ич';
        }
        

    },
    randomFirstName: function() {
        if(gender == this.GENDER_FEMALE) {
           return this.randomValue(this.firstNameWifeJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }
    },


     randomSurname: function() {
        
        let surname = this.randomValue(this.surnameJson);
        if(gender == this.GENDER_FEMALE) {
            return surname + 'а';  
        } else {
            return this.randomValue(this.surnameJson);
        }
    },
    randomGenderPhoto: function(){
        let srcimage;
        if (gender == this.GENDER_FEMALE) {
            srcimage = "woman";
        } else {
            srcimage = "boy";
        }
        return srcimage;
    },
    randomDateBorn: function(){
       let startDateB = new Date(1945, 0, 1);
       let endDateB = new Date(2001, 1, 31);
       let dateBorn = new Date( + startDateB + Math.random() * (endDateB - startDateB))
       let options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
   
    return dateBorn.toLocaleString("ru", options);
    },
    randomProfession: function() {
        let professionName;

         if (gender == this.GENDER_MALE){
            professionName = this.profMaleName;
         } else if (gender == this.GENDER_FEMALE){
            professionName = this.profFemale;
         }
        return this.randomValue(professionName);

    },
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.secondname = this.randomSecondname();
        this.person.firstName = this.randomFirstName();
        this.person.genderImage = this.randomGenderPhoto();
        this.person.dateBornP = this.randomDateBorn();
        this.person.professionName = this.randomProfession();
        return this.person;
    }
};
