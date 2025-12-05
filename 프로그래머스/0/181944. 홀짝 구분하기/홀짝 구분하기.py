# Python3
n = int(input())

if n % 2 == 0:
    print(f"{n} is even")
else:
    print(f"{n} is odd")
    
# JavaScript
# const readline = require('readline');
# const rl = readline.createInterface({
#     input: process.stdin,
#     output: process.stdout
# });
# let input = [];
# rl.on('line', function (line) {
#     input = line.split(' ');
# }).on('close', function () {
#     n = Number(input[0]);
    
#     if (n % 2 === 0) {
#         console.log(`${n} is even`);
#     } else {
#         console.log(`${n} is odd`);
#     }
# });

# Java
# import java.util.Scanner;

# public class Solution {
#     public static void main(String[] args) {
#         Scanner sc = new Scanner(System.in);
#         int n = sc.nextInt();
        
#         if (n % 2 == 0) {
#             System.out.println(n + " is even");
#         } else {
#             System.out.println(n + " is odd");
#         }
#     }
# }