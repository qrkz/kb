$(function () {

    //$('textarea')[0].focus();

    var mainKB = [
        '\u{31}',
        '\u{32}',
        '\u{33}',
        '\u{34}',
        '\u{35}',
        '\u{36}',
        '\u{37}',
        '\u{38}',
        '\u{39}',
        '\u{30}',
        '\u{71}',
        '\u{77}',
        '\u{65}',
        '\u{72}',
        '\u{74}',
        '\u{79}',
        '\u{75}',
        '\u{69}',
        '\u{6f}',
        '\u{70}',
        '\u{61}',
        '\u{73}',
        '\u{64}',
        '\u{66}',
        '\u{67}',
        '\u{68}',
        '\u{6A}',
        '\u{6B}',
        '\u{6C}',
        '\u{21ea}',
        '\u{7a}',
        '\u{78}',
        '\u{63}',
        '\u{76}',
        '\u{62}',
        '\u{6e}',
        '\u{6d}',
        '\u{232b}',
        '\u{1f60a}',
        '\u{23}',
        '\u{2c}',
        '\u{23b5}',
        '\u{2e}',
        '\u{23ce}',
        '\u{21b9}',
        '\u{221a}',
        '\u{3a9}',
        '\u{7b}\u{7d}',
        '\u{21cc}',
        '\u{2460}',
        '\u{25c0}',
        '\u{25b2}',
        '\u{25bc}',
        '\u{25b6}'
    ];

    var mainShift = [
        '\u{21}',
        '\u{40}',
        '\u{23}',
        '\u{24}',
        '\u{25}',
        '\u{5e}',
        '\u{26}',
        '\u{2a}',
        '\u{28}',
        '\u{29}',
        '\u{51}',
        '\u{57}',
        '\u{45}',
        '\u{52}',
        '\u{54}',
        '\u{59}',
        '\u{55}',
        '\u{49}',
        '\u{4f}',
        '\u{50}',
        '\u{41}',
        '\u{53}',
        '\u{44}',
        '\u{46}',
        '\u{47}',
        '\u{48}',
        '\u{4a}',
        '\u{4b}',
        '\u{4c}',
        '\u{21ea}',
        '\u{5a}',
        '\u{58}',
        '\u{43}',
        '\u{56}',
        '\u{42}',
        '\u{4e}',
        '\u{4d}',
        '\u{232b}',
        '\u{1f60a}',
        '\u{23}',
        '\u{3c}',
        '\u{23b5}',
        '\u{3e}',
        '\u{23ce}',
        '\u{21b9}',
        '\u{221a}',
        '\u{3a9}',
        '\u{7b}\u{7d}',
        '\u{21cc}',
        '\u{2460}',
        '\u{25c0}',
        '\u{25b2}',
        '\u{25bc}',
        '\u{25b6}'
    ];
    var  symbolsList = [
        '\u{21}',
        '\u{40}',
        '\u{23}',
        '\u{20b9}',
        '\u{25}',
        '\u{5e}',
        '\u{26}',
        '\u{2a2}',
        '\u{28}',
        '\u{29}',
        '\u{7e}',
        '\u{201c}',
        '\u{24}',
        '\u{a3}',
        '\u{20ac}',
        '\u{20bf}',
        '\u{2b}',
        '\u{7c}',
        '\u{7b}',
        '\u{7d}',
        '\u{60}',
        '\u{27}',
        '\u{a5}',
        '\u{5f}',
        '\u{a2}',
        '\u{3d}',
        '\u{5c}',
        '\u{5b}',
        '\u{5d}',
        '\u{21eb}',
        '\u{3c}',
        '\u{3e}',
        '\u{2d}',
        '\u{3a}',
        '\u{3b}',
        '\u{2f}',
        '\u{3f}',
        '\u{21e4}',
        '\u{1f60a}',
        '\u{23}',
        '\u{2c}',
        '\u{23b5}',
        '\u{2e}',
        '\u{23ce}',
        '\u{21b9}',
        '\u{221a}',
        '\u{3a9}',
        '\u{7b}\u{7d}',
        '\u{21cc}',
        '\u{2460}',
        '\u{25c0}',
        '\u{25b2}',
        '\u{25bc}',
        '\u{25b6}'
    ];

                
    function addBtnText(name){
        $("#KBD button").each(function(i){
            $(this).text(name[i]);
        });
    }

    function smallLetters(){
        shiftCounter = 0; addBtnText(mainKB); $("#vjCL").text("\u21ea");$("#vjCL").attr("style","background: #111; color:springgreen");
        console.log(shiftStates[shiftCounter]);
    }
    function capLetters(){
        shiftCounter = 1; addBtnText(mainShift); $("#vjCL").text("\u21e7");$("#vjCL").attr("style","background: springgreen; color:#111");
        console.log(shiftStates[shiftCounter]);
    }
    function perCapLetters(){
        shiftCounter = 2; addBtnText(mainShift); $("#vjCL").text("\u21eb");$("#vjCL").attr("style","background: springgreen; color:#111");
        console.log(shiftStates[shiftCounter]);
        for(var k=1; k<11; k++){
            if(k===10){$("#KBD button#vj0").text(0);}
            else{$("#KBD button#vj"+k).text(k);}
        }
    }

    function showSymbols(){

    }
    
    var shiftStates = ['NoCaps', 'Caps', 'PerCaps'], shiftCounter = 0;
    console.log(shiftStates[shiftCounter]);
    
    var symbolStates = ['NoSymbols', 'genSymbols', 'moreSymbols'], symbolCounter = 0;
    console.log(symbolStates[symbolCounter]);

    addBtnText(mainKB);
    $("#vjCL").click(function(){
        shiftCounter = (shiftCounter + 1) % shiftStates.length;
        if(shiftCounter === 0){smallLetters();}
        if(shiftCounter === 1){capLetters();}
        if(shiftCounter === 2){perCapLetters();}
    });


    $("#KBD button").click(function(i){
        if( $(this).hasClass("BtnSp") ){
            if( $(this).attr("id") === "vjSp" ){$('textarea')[0].value += " ";}
            if( $(this).attr("id") === "vjTab" ){$('textarea')[0].value += "\u{0009}";}
            console.log("This is a Special Key and nothing will be performed for now");
            //$('textarea')[0].focus();
        }
        else{
            if( $(this).attr("id") === "vjSp" ){$('textarea')[0].value += " ";}
            else{
                $('textarea')[0].value += $(this).text();
                if(shiftCounter === 1){smallLetters();}
            }
            //$('textarea')[0].focus();
        }
    });

    $("#vjBkSp").click(function () {
        var textVal = $('#vjTextOutput').val();
        $('#vjTextOutput').val(textVal.substring(0, textVal.length - 1));
        //$('textarea')[0].focus();
    });

});
