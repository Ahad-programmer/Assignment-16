// // // Chapter 14 - 16
// // // Q1
// // // var studentName = []
// // // Q2
// // // var fruits = ["Apple","Banana","Mango"]
// // // Q3
// // // var num = [10,20,30]
// // // Q4
// // // var boolean = [false,true]
// // // Q5
// // // var mix = [false,10,"Apple",null]
// // // Q6
// // // var education = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL.","PhD"]
// // // document.write(`<h1>Qualification</h1><br>
// // // <ol type="1">
// // //     <li>${education[0]}</li>
// // //     <li>${education[1]}</li>
// // //     <li>${education[2]}</li>
// // //     <li>${education[3]}</li>
// // //     <li>${education[4]}</li>
// // //     <li>${education[5]}</li>
// // //     <li>${education[6]}</li>
// // //     <li>${education[7]}</li></ol>`)
// // // Q7
// // // var studentName = ["Ahad","Basit","Bilal"]
// // // var marks= [340,290,465]
// // // var percentage = [marks[0]/500*100,marks[1]/500*100,marks[2]/500*100]
// // // document.write(`Score of ${studentName[0]} is ${marks[0]}. Percentage${percentage[0]}%<br>
// //     // Score of ${studentName[1]} is ${marks[1]}. Percentage${percentage[1]}%<br>
// //     // Score of ${studentName[2]} is ${marks[2]}. Percentage${percentage[2]}%<br>`)
// //     // Q8
// // var color = ["Red","Yellow"]
// // // a
// // var user = prompt("Enter a color to add to the beginning:")
// // color.unshift(user)
// // // b
// // var user_2 = prompt("Enter a color to add to the end:")
// // color.push(user_2)
// // // c
// // color.unshift("Pink","Green")
// // // d
// // color.shift()
// // // e
// // color.pop
// // // f
// // var index = +prompt("Enter the index at which you want to add a color")
// // var colorAdd = prompt("Enter the color you want to add:")
// // color.splice(index,0,colorAdd)
// // // g
// // var indexDlt = +prompt("Enter the index at which you want to delete color")
// // var num_dlt = +prompt("How many colors do you want to delete?")
// // color.splice(indexDlt,num_dlt)
// // Q10
// var studentScore = [75, 88, 92, 60, 45, 81, 100, 67];
// console.log("Original Scores:" , studentScore);
// studentScore.sort(function(a, b) {
//          return a - b; 
//      });
//      console.log("Sorted Scores:", studentScore);
// // Q11
// var cities = ["Karachi","Sukker","Islamabad","Lahore","Multan"]
// console.log("Cities List",cities)
// var select = cities.splice(0,3)
// console.log("Selected Cities",select)
// // Q12
// var arr = ["This ","is ","my ","cat "];
// var join = arr.join("")
// console.log(join)
// Q13
// var num = []
// // num.push(10)
// // num.push(20)
// // num.push(30)
// // console.log(num.shift())
// // Q14
// // var num = []
// num.push(10)
// num.push(20)
// num.push(30)
// console.log(num.pop())
// Q15
// var mobile = ["Apple", "Samsung", "Motorola","Sony",]
// document.write("<label for='mobile'>Choose a phone manufacturer:</label>");
//     document.write("<select id='mobile'>");
//     document.write("<option value='" + mobile[0] + "'>" + mobile[0] + "</option>");
//     document.write("<option value='" + mobile[1] + "'>" + mobile[1] + "</option>");
//     document.write("<option value='" + mobile[2] + "'>" + mobile[2] + "</option>");
//     document.write("<option value='" + mobile[3] + "'>" + mobile[3] + "</option>");
//     document.write("</select>");