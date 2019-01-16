//Put the start of your program in a main function.
// Create an attendance array.
// Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array,
// then log the option they chose. Repeat this five times.
//
// Challenge: Do the above program until the user enter's 'q'.
// Also, print and add to the array via a function call to the appropriate teacher/student/parent function.


/*
built a loop around the switch case
the loop cannot reach the user argument?
set an if at the end to break
swap order of the parameters?
swapping order of parameters prevents loop from running since user is not defined
 while loop meets parameters for the challenge but not the first part
 */


// main2();
//
//
// function main2()
// {
//
//     var attendance = [];
//
//     for( ; attendance.length <5 ;   )
//     {
//         user = prompt("who is checking in? Parent , Teacher , Student");
//         switch (user)
//         {
//             case"Parent" :
//                 attendance.push(user);
//                 console.log("Welcome");
//                 break;
//             case"Teacher" :
//                 attendance.push(user);
//                 console.log("Hello");
//                 break;
//             case"Student" :
//                 attendance.push(user);
//                 console.log("Did you do your homework?");
//                 break;
//             case "q":
//                 console.log("Goodbye");
//                 break;
//             default:
//                 console.log("Are you supposed to be here?");
//                 break;
//         }
//         if(user === "q")
//         {
//             break;
//         }
//     }
//
// // create a teacher/student/parent function that will print and add to the array
//
//
// }



function ChallengeTesting()
{
    var attendance = [];
    let user = "";
    while(user !== "q")
    {
        user = prompt("who is checking in? Parent , Teacher , Student");
        switch (user) {
            case"Parent" :
                attendance.push(user);
                console.log("Welcome");
                break;
            case"Teacher" :
                attendance.push(user);
                console.log("Hello");
                break;
            case"Student" :
                attendance.push(user);
                console.log("Did you do your homework?");
                break;
            case "q":
                console.log("Goodbye");
                break;
            default:
                console.log("Are you supposed to be here?");
                break;
        }
        if(attendance.length === 5)
        {
            user = "q";
        }
    }
    function PrintandAdd(userInput)
    {
        if(userInput === "Student" || userInput === "Teacher" || userInput === "Parent")
        {
            console.log(attendance);
            attendance.push(userInput);
            console.log(attendance);
        }
        else
            {
                console.log("error")
            }

        }

    PrintandAdd("Student");
}

ChallengeTesting()

