function check(){
    var jsresult = document.getElementById('result').textContent;
    document.getElementById('resultformation').textContent = '実行ボタンを押してください。';
    //結果1
    var formation = null;
    //結果2
    var face = null;
    //結果3
    var renewal = null;
    //結果4
    var destination = null;
    //結果5
    var series = null;
    //結果6
    var window = null;
    //結果7
    var panta = null;
    //結果8
    var runboad = null;
    //結果9
    var washer = null;
    //結果10
    var wiper = null;
    //結果11
    var rollsign = null;
    //結果12
    var door = null;

    //設問1
    var element1 = document.getElementById("question1");
    var radioNodeList1 = element1.Q1;
    var q1v1 = radioNodeList1.value;
    if (q1v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問1が解答されていません';
    }else{
        if (q1v1 === "2Car") {
            var formation = 2;
        }else{
            if(q1v1 === "4Car") {
                var formation = 4;
            }else{
                if (q1v1 === "6Car") {
                    var formation = 6;
                }else{
                    var formation = 8;
                }
            }
        }
    }
    //設問2
    var element2 = document.getElementById("question2");
    var radioNodeList2 = element2.Q2;
    var q2v1 = radioNodeList2.value;
    if (q2v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問2が解答されていません';
    }else{
        if (q2v1 === "2000"){
            var face = 10;
        }else{
            var face = 20;
        }
    }
    //設問3
    var element3 = document.getElementById("question3");
    var radioNodeList3 = element3.Q3;
    var q3v1 = radioNodeList3.value;
    if (q3v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問3が解答されていません';
    }else{
        if (q3v1 === "false"){
            var renewal = 100;
        }else{
            var renewal = 200;
        }
    }
    //設問4
    var element4 = document.getElementById("question4");
    var radioNodeList4 = element4.Q4;
    var q4v1 = radioNodeList4.value;
    if (q4v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問4が解答されていません';
    }else{
        if (q4v1 === "RS"){
            var destination = 1000;
        }else{
            if (q4v1 === "3C"){
                var destination = 2000;
            }else{
                var destination = 3000;
            }
            
        }
    }
    //設問5
    var element5 = document.getElementById("question5");
    var radioNodeList5 = element5.Q5;
    var q5v1 = radioNodeList5.value;
    if (q5v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問5が解答されていません';
    }else{
        if (q5v1 === "none"){
            var series = 0;
        }else{
            if (q5v1 === "1st"){
                var series = 10000;
            }else{
                if (q5v1 === "2nd"){
                    var series = 20000;
                }else{
                    var series = 30000;
                }
            }
            
        }
    }
    //設問6
    var element6 = document.getElementById("question6");
    var radioNodeList6 = element6.Q6;
    var q6v1 = radioNodeList6.value;
    if (q6v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問6が解答されていません';
    }else{
        if (q6v1 === "none"){
            var window = 0;
        }else{
            if (q6v1 === "Small"){
                var window = 100000;
            }else{
                if (q6v1 === "Big"){
                    var window = 200000;
                }
            }
            
        }
    }
    //設問7
    var element7 = document.getElementById("question7");
    var radioNodeList7 = element7.Q7;
    var q7v1 = radioNodeList7.value;
    if (q7v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問7が解答されていません';
    }else{
        if (q7v1 === "none"){
            var panta = 0;
        }else{
            if (q7v1 === "4320"){
                var panta = 1000000;
            }else{
                if (q7v1 === "7116"){
                    var panta = 2000000;
                }
            }
            
        }
    }
    //設問8
    var element8 = document.getElementById("question8");
    var radioNodeList8 = element8.Q8;
    var q8v1 = radioNodeList8.value;
    if (q8v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問8が解答されていません';
    }else{
        if (q8v1 === "none"){
            var runboad = 0;
        }else{
            if (q8v1 === "1"){
                var runboad = 10000000;
            }else{
                if (q8v1 === "2"){
                    var runboad = 20000000;
                }else{
                    var runboad = 30000000;
                }
            }
            
        }
    }
    //設問9
    var element9 = document.getElementById("question9");
    var radioNodeList9 = element9.Q9;
    var q9v1 = radioNodeList9.value;
    if (q9v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問9が解答されていません';
    }else{
        if (q9v1 === "1") {
            var washer = 100000000;
        }else{
            if(q9v1 === "2") {
                var washer = 200000000;
            }else{
                if (q9v1 === "3") {
                    var washer = 300000000;
                }else{
                    var washer = 400000000;
                }
            }
        }
    }
    //設問10
    var element10 = document.getElementById("question10");
    var radioNodeList10 = element10.Q10;
    var q10v1 = radioNodeList10.value;
    if (q10v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問10が解答されていません';
    }else{
        if (q10v1 === "1") {
            var wiper = 1000000000;
        }else{
            if(q10v1 === "2") {
                var wiper = 2000000000;
            }else{
                if (q10v1 === "3") {
                    var wiper = 3000000000;
                }else{
                    var wiper = 4000000000;
                }
            }
        }
    }
    //設問11
    var element11 = document.getElementById("question11");
    var radioNodeList11 = element11.Q11;
    var q11v1 = radioNodeList11.value;
    if (q11v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問11が解答されていません';
    }else{
        if (q11v1 === "none"){
            var rollsign = 0;
        }else{
            if (q11v1 === "1"){
                var rollsign = 10000000000;
            }else{
                var rollsign = 20000000000;
            }
            
        }
    }
    //設問12
    var element12 = document.getElementById("question12");
    var radioNodeList12 = element12.Q12;
    var q12v1 = radioNodeList12.value;
    if (q12v1 === "") {
        document.getElementById('result').textContent = 'エラー : 質問12が解答されていません';
    }else{
        if (q12v1 === "none"){
            var door = 0;
        }else{
            if (q12v1 === "1"){
                var door = 100000000000;
            }else{
                if (q12v1 === "2"){
                var door = 200000000000;
                }else{
                    var door = 300000000000;
                }
            }
            
        }
    }
    var result2 = formation + face + renewal + destination + series + window + panta + runboad + washer + wiper + rollsign + door;

    //総合結果-形式表示
    if (result2 > 100000000000) {
        document.getElementById('resultseries').textContent = '旧2000系';
    }else{
        document.getElementById('resultseries').textContent = '新2000系';
    }
    //総合結果-編成表示
    if (result2 < 100000000){
        document.getElementById('resultformation').textContent = '該当する編成は見つかりませんでした。';
        document.getElementById('resultseries').textContent = 'エラー';
    }
    if (q1v1 === "2Car") {
        if (result2 == 111400001112) {
            document.getElementById('resultformation').textContent = '2401F or 2403F or 2407F or 2411F';
        }else{
            if (result2 == 111400003112) {
                document.getElementById('resultformation').textContent = '2405F or 2409F';
            }else{
                if (result2 == 111400002112) {
                    document.getElementById('resultformation').textContent = '2413F';
                }else{
                    if (result2 == 113400003212) {
                        document.getElementById('resultformation').textContent = '2417F';
                    }else{
                        if (result2 == 114400003212) {
                            document.getElementById('resultformation').textContent = '2419F';
                        }else{
                            if (result2 == 4201111122) {
                                document.getElementById('resultformation').textContent = '2451F';
                            }else{
                                if (result2 == 4101211122) {
                                    document.getElementById('resultformation').textContent = '2453F';
                                }else{
                                    if (result2 == 4201233122) {
                                        document.getElementById('resultformation').textContent = '2455F or 2457F or 2459F';
                                    }else{
                                        if (result2 == 4201231122) {
                                            document.getElementById('resultformation').textContent = '2461F or 2463F or 2465F';
                                        }else{
                                            document.getElementById('resultformation').textContent = '該当する編成は見つかりませんでした。';
                                            document.getElementById('resultseries').textContent = 'エラー';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (q1v1 === "4Car") {
        if (result2 == 4211111124) {
            document.getElementById('resultformation').textContent = '2501F or 2503F or 2509～2513F or 2517F';
        }else{
            if (result2 == 4311111124) {
                document.getElementById('resultformation').textContent = '2505F';
            }else{
                if (result2 == 4321111124) {
                    document.getElementById('resultformation').textContent = '2507F';
                }else{
                    if (result2 == 4131111124) {
                        document.getElementById('resultformation').textContent = '2515F';
                    }else{
                        if (result2 == 4111111124) {
                            document.getElementById('resultformation').textContent = '2519F';
                        }else{
                            if (result2 == 4111211124) {
                                document.getElementById('resultformation').textContent = '2521F';
                            }else{
                                if (result2 == 4211211124) {
                                    document.getElementById('resultformation').textContent = '2523～2529F';
                                }else{
                                    if (result2 == 4231223124) {
                                        document.getElementById('resultformation').textContent = '2531～2535F';
                                    }else{
                                        if (result2 == 4211223124) {
                                            document.getElementById('resultformation').textContent = '2537～2539F';
                                        }else{
                                            if (result2 == 4232223124) {
                                                document.getElementById('resultformation').textContent = '2541F';
                                            }else{
                                                if (result2 == 4211221124) {
                                                    document.getElementById('resultformation').textContent = '2543F';
                                                }else{
                                                    if(result2 == 4212221124) {
                                                        document.getElementById('resultformation').textContent = '2545F';
                                                    }else{
                                                        document.getElementById('resultformation').textContent = '該当する編成は見つかりませんでした。';
                                                        document.getElementById('resultseries').textContent = 'エラー';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if(q1v1 === '6Car') {
        if(result2 == 4402213126){
            document.getElementById('resultformation').textContent = '2045F';
        }else{
             if(result2 == 4202233226){
                document.getElementById('resultformation').textContent = '2047F';
                document.getElementById('resultseries').textContent = '新2000系リニューアル車(前面車番で判別可能)'
            }else{
                if(result2 == 4202231126){
                    document.getElementById('resultformation').textContent = '2049F';
                }else{
                    if(result2 == 4202111126){
                        document.getElementById('resultformation').textContent = '2051F';
                    }else{
                        if(result2 == 4201211126){
                            document.getElementById('resultformation').textContent = '2053F';
                        }else{
                            if (result2 == 121400001116){
                                document.getElementById('resultformation').textContent = '2009F or 2013F or 2029F';
                            }else{
                                if (result2 == 221400001116){
                                    document.getElementById('resultformation').textContent = '2011F or 2015F';
                                }else{
                                    if(result2 == 111400002116){
                                        document.getElementById('resultformation').textContent = '2019F～2023F or 2027F';
                                    }else{
                                        if (result2 == 321400001116){
                                            document.getElementById('resultformation').textContent = '2025F';
                                        }else{
                                            if(result2 == 112400003216){
                                                document.getElementById('resultformation').textContent = '2031F';
                                            }else{
                                                if(result2 == 113400003216){
                                                    document.getElementById('resultformation').textContent = '2033F';
                                                }else{
                                                    document.getElementById('resultformation').textContent = '該当する編成は見つかりませんでした。';
                                                    document.getElementById('resultseries').textContent = 'エラー';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (q1v1 === '8Car'){
        if (result2 == 121400002118){
            document.getElementById('resultformation').textContent = '2001F';
        }else{
            if(result2 == 111400002118){
                document.getElementById('resultformation').textContent = '2003F or 2005F';
            }else{
                if(result2 == 211400001118){
                    document.getElementById('resultformation').textContent = '2007F';
                }else{
                    if(result2 == 4202233228){
                        document.getElementById('resultformation').textContent = '2055F or 2071～2081F or 2091F or 2093F';
                        document.getElementById('resultseries').textContent = '新2000系リニューアル車(前面車番で判別可能)';
                    }else{
                        if(result2 == 4202211128){
                            document.getElementById('resultformation').textContent = '2057F';
                        }else{
                            if(result2 == 4201223128){
                                document.getElementById('resultformation').textContent = '2059F';
                            }else{
                                if(result2 == 4202221128){
                                    document.getElementById('resultformation').textContent = '2061F';
                                }else{
                                    if(result2 == 4201221128){
                                        document.getElementById('resultformation').textContent = '2063F';
                                    }else{
                                        if(result2 == 4202223128){
                                            document.getElementById('resultformation').textContent = '2065F or 2067F';
                                        }else{
                                            if(result2 == 4202233128){
                                                document.getElementById('resultformation').textContent = '2083F or 2085F or 2089F or 2095F';
                                            }else{
                                                if(result2 == 4201233128){
                                                    document.getElementById('resultformation').textContent = '2087F';
                                                }else{
                                                    if(result2 == 4201232128){
                                                        document.getElementById('resultformation').textContent = '2097F';
                                                    }else{
                                                        document.getElementById('resultformation').textContent = '該当する編成は見つかりませんでした。';
                                                        document.getElementById('resultseries').textContent = 'エラー';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

