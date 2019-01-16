/*
Put the start of your program in a main function.
Ask the user to enter a number to print.
Create a switch case that prints 1 if you enter 1,
2 if you enter 2,
3 if you enter 3,
4 if you enter 4,
and 5 if you enter 5.
 */

/*
start with a main function
do a switch case that prompts for a number.
 */

main();

function main()
{


    switch (parseInt(prompt("enter a number")))
    {
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("default");
            break;
        default:
            console.log("I don't know that number.");
            break;

    }


}