/*

Write a loop that makes seven calls to console.log to 
output the following triangle:
#
##
###
####
#####
######
#######

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

*/

for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}