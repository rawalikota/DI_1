const http= require('http'); //looks for global module
const request = require('request-promise');
const cheerio= require('cheerio');
const fs = require('fs');
//const jsonfile=require('jsonfile');
const { exit } = require('process');

async function main() {
    const html = await request.get("https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression");
    fs.writeFileSync("./test.html", html);
    const $= await cheerio.load(html);

    let json={
      information: []
     
    };

    const numRows=$("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(n) > td:nth-child(1)").length;

    for(let i=2;i<=numRows+1;i++){
      let len=$("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child("+i+") > td:nth-child(3)").text().length;
      json.information.push({mark:parseFloat($("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child("+i+") > td:nth-child(1)").text().slice(0,-1)), l1:parseInt($("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child("+i+") > td:nth-child(3)").text().slice(0,-1).substr(len-5))});
      //json.information.push({mark:$("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child("+i+") > td:nth-child(1)").text(), date:$("#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child("+i+") > td:nth-child(3)").text()});
     
    }
  
    console.log(json);
    var jsonContent = JSON.stringify(json);
    
    fs.writeFile("../reactfolder/src/output.json", jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON object to Number File.");
          return console.log(err);
      }
   
      console.log("Numeric file has been saved in JSON format.");
    });
    
    
    //fs.writeFileSync("./Heights.csv", theMark);
    //fs.writeFileSync("./Dates.csv", theDate);
    }
   /*
   function charts(){
    const { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } = recharts;

    const data = [
          { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
          { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
          { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
          { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
          { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
          { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
          { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
    ];
    
    const SimpleAreaChart = React.createClass({
     render () {
       return (
         <AreaChart
           width={600}
           height={400}
           data={data}
           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stroke='#8884d8'
              fill='#8884d8'
            />
          </AreaChart>
        );
      }
    })*/
  

main();

//#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(1) > td:nth-child(2) > a

/*const server=http.createServer((req, res) =>{
                const url=req.url;
                const method=req.method;
                if(url === '/'){
                    res.write('<html>');
                    res.write('<body> <form action="/enterurl" method="POST"> <input type="text" name="url"><button type="submit">Enter URL</button></form></body>');
                    res.write('</html>');
                    return res.end();

                }
                if(url === '/enterurl' && method === 'POST'){
                    fs.writeFileSync('url.txt', 'dummy');
                    res.statusCode=302;
                    res.setHeader('Location', '/');
                    return res.end();

                }
                res.setHeader('Content-Type','text/html');
                res.write('<html>');
                res.write('<body> Home</body>');
                res.write('</html>');
                res.end(); //#mw-content-text > div.mw-parser-output > table > tbody > tr:nth-child(1) > td:nth-child(2) > a
            });
server.listen(3000);*/