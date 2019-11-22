function smokeOrNo() {

    var userDate = document.getElementById('userDOB').value; //get the user birthDate

    let userMonth = (new Date(userDate).getUTCMonth()); // gets the user birthMonth (UTC is universal standard time)
    let userDay = (new Date(userDate).getUTCDate()) //gets the user birthDay
    let userYear = (new Date(userDate).getUTCFullYear()) //gets the user birthYear

    //----------------------------------------------------------------------------------------------------------------------------

    var todayMonth = (new Date().getMonth()) //get current month
    var todayDay = new Date().getDate(); //get current day
    var todayYear = new Date().getFullYear(); //get current year

    //-----------------------------------------------------------------------------------------------------------------------------
    var birthday = document.getElementById('compareDate') //to show in the DOM

    if((todayYear - userYear) < 18) { //you cant even try if youre not close to 18 years

        birthday.innerText = "Too young for smoking"; //shows in the DOM if too young

    }else if((todayYear - userYear) > 18) { //youre good if youre 18 and up

        birthday.innerText = "Passed, no further testing"; //shows in the DOM if too young

    }else if(todayYear - userYear == 18) { //further testing must be done for those with upcoming birthdays

        if(userMonth == todayMonth) { //if the user month is equal the upcoming month, keep testing

            if(userDay <= todayDay) { //if the user day is less than or equal to todays day, you pass

                birthday.innerText = "Almost didnt make it. You pass!"

            }else{ //if the user day is greater than todays day, you fail

                birthday.innerText = "Had us in the first half, not gonna lie. DENIED"

            }

        }else if(userMonth < todayMonth) { //if the user month is less than the upcoming month, you pass

            //var monthCheck = document.getElementById('birthday')
            birthday.innerText = "Well done, you passed"
        
        }else if (userMonth > todayMonth) { //if the user month is greater than the upcoming month, you fail

            //var monthCheck = document.getElementById('birthday')
            birthday.innerText = "Nice try. DENIED"
        }
    }


}

//use event.preventDefault() if you are using a form to stop the code from resetting too early
//.slice() gets the start point and the end point from an array, doesnt include the element where the indexes end (must go up one), and is zero-indexed
//--if the slice is too close to teh end of a string, you just need the starting index
//parseInt takes a string and converts it into its corresponding integer
//.substr() does the same as .slice() (but there is a difference between the two)
//.style.visibility shows info that should only be shown after an action takes place
//.split() takes a string a splits it based on a specific character
//number() does the same thing as parseInt(), but with subtle differences 
