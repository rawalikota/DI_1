const request = require('request-promise'); 
const cheerio= require('cheerio');
const fs = require('fs');
const { exit } = require('process');

async function main() {
    const html = await request.get("https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression");     //using request-promise library for loading the web page
    fs.writeFileSync("./outputs/wikihtml.html", html);                  //writing the html code of wikipedia page in a new file for better understanding
    const $= await cheerio.load(html);                                  //using cheerio library to use jQuery for the server

    let json={
      information: []                        //creating json object with an array
    };

    const numRows=$("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(n) > td:nth-child(1)").length;   //calculating the number of rows of the respective table

    for(let i=2;i<=numRows+1;i++){
      let len=$("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child("+i+") > td:nth-child(3)").text().length;
      json.information.push({mark:parseFloat($("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child("+i+") > td:nth-child(1)").text().slice(0,-1)), date:parseInt($("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child("+i+") > td:nth-child(3)").text().slice(0,-1).substr(len-5))});
      
    }
  
    
    var jsonContent = JSON.stringify(json);  
    
    fs.writeFile("../reactfolder/src/components/data/output.json", jsonContent, 'utf8', function (err) {  //writing json object as json file in client location
      if (err) {
          console.log("An error occured while writing JSON object to Number File.");
          return console.log(err);
      }
   
      console.log("Numeric file has been saved in JSON format.");
    });
    
    
    }
   
  

main();

