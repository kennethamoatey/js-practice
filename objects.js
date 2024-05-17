

/*class Human{
    constructor(name, age){
        this.name=name
        this.age=age
    }
    Talk( ){
        return this.name+" "+ this.age
    }
}

const Man= new Human('Felicia',20)
console.log(Man.Talk())

class Human{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    Talk(){
        return this.name+" "+ this.age
    }
}
const Man= new Human('Felicia',20)
console.log(Man.Talk())

let score=79.9
if (score>=80){
    console.log('A')
} else if(score>=70){
    console.log('B')
}else if(score>=60){
    console.log('C')
}  else if (score>=50){
    console.log('D')
} else{
    console.log('fail')
}

let students=new Array('kofi','ama','joe')
    console.log(students)

    let pupils=['kenneth','chantel','regina']
    console.log(pupils)
    console.log(pupils[1])
    console.log(students[2])

    for(let i=0;i<=10;i++){
        console.log(i)
    }
    let number=0
    for(let i=0;i<10;i++){
        number=number+1
        console.log(i)
    }

    let number=0
    while(number<10){
     number=number+1
     console.log(number)
    }

    function hello(){
        console.log('kenneth amoatey')
    }
    hello()

    function hellostudent(school){
        console.log('I am a student of'+school)
    }
    hellostudent('codetrain Ghana')

    function welcome(name,age, school){
        console.log('My name is'+name)
        console.log('I am '+age +" "+'old')
        console.log('I am a student of'+school)
    }
    welcome('Abena',18,'codetrain Ghana')
    welcome('Yaw',28,'ALX Ghana')

    function addition(number1,number2,number3){
        let answer=(number1*number3)+number2 ;
        return answer ;
     }
     console.log(addition(5,10,15))

     function division(number1, number2,number3,number4){
        let answer=number1/number2*number3+number4;
        return answer;
     }
     console.log(division(20,2,3,10))

     alert('hi');

     const addition=(num1,num2)=>{
        let answer=num1+num2
        console.log(answer)
     }
     addition(10,3)

     
     let student={
        name:'kenneth',age:25, school:'codetrain Ghana'
     }
     console.log(student)
     console.log(student['school'])
     console.log(student.age)

     class Square{
        constructor(name, age,gender){
            this.name=name
            this.age=age
            this.gender=gender
        }
     }
     User1=new Square('ken',23,'male')
     console.log(User1)

     User2=new Square('ama',12,'female')
     console.log(User2)*/

     /*class Profile{
        constructor(name, email, gender,school){
            this.name=name
            this.email=email
            this.gender=gender
            this.school=school
        }
        getemail(){
        return this.name+"  " +this.gender
        }

     }
     const User1=new Profile('ken','kenneth.amoatey@gmail.com','male','codetrain ghana')
console.log(User1.getemail())*/

class Profile{
    constructor(name, age, gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    getName(){
        return this.name+"   "+this.age
    }
}
const User1=new Profile('kenneth',23,'male')
console.log(User1.getName())