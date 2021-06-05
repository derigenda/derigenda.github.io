function FlashZip(){
     englishWordsString = ''
     latinWordsString = ''
     //for each row
     for (taggy = 0;taggy<document.getElementById('selectionform').getElementsByTagName('tr')[1].childElementCount; taggy++ ){
        //for each column
            if(document.getElementById('selectionform').getElementsByTagName('tr')[1].children[taggy].className == 'Meaning-cell' ){
                var mc = taggy
              }
              if(document.getElementById('selectionform').getElementsByTagName('tr')[1].children[taggy].className == 'Latin-cell' ){
                var lc = taggy
              }
          }

     for(i=0;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
        if(document.getElementById('selectionform').getElementsByTagName('tr')[i].style.backgroundColor=='yellow'){  
            //if yellow          
            englishWordsString=englishWordsString + document.getElementById('selectionform').getElementsByTagName('tr'[i].children[mc]).innerText
            latinWordsString=latinWordsString + document.getElementById('selectionform').getElementsByTagName('tr'[i].children[lc]).innerText

        }
        latinWordsString = latinWordsString.substr(0,latinWordsString.length-1)
        englishWordsString = englishWordsString.substr(0,englishWordsString.length-1)
    latinWords = latinWordsString.split('|')
    extras = 4 - (latinWords.length % 4)

    if(extras === 4) {
        extras = 0
    }    

    latinWordsString = latinWordsString + '| '.repeat(extras)
    englishWordsString = englishWordsString + '| '.repeat(extras)

    latinWords = latinWordsString.split('|')
    englishWords = englishWordsString.split('|')

    rowcount = (latinWords.length)/4
var finalString = ''
var sharedStr = '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' + englishWords.length + ' uniqueCount="' + englishWords.length + '"><si><t></t>'
var sheetString = '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" mc:Ignorable="x14ac xr xr2 xr3" xr:uid="{00000000-0001-0000-0100-000000000000}"><dimension ref="A1:H' + rowcount + '"/><sheetViews><sheetView tabSelected="1" zoomScale="55" zoomScaleNormal="55" workbookViewId="0"/></sheetViews><sheetFormatPr defaultColWidth="8.85546875" defaultRowHeight="34.9" customHeight="1" x14ac:dyDescent="0.2"/><cols><col min="1" max="1" width="22.140625" style="2" customWidth="1"/><col min="2" max="3" width="22.140625" style="3" customWidth="1"/><col min="4" max="4" width="22.140625" style="4" customWidth="1"/><col min="5" max="8" width="22.140625" style="5" customWidth="1"/><col min="9" max="16384" width="8.85546875" style="1"/></cols><sheetData>'

for (i=0;i<rowcount;i++){
        sheetString = sheetString + '<row r="' + (i+1) + '" spans="1:8" ht="34.9" customHeight="1" x14ac:dyDescent="0.2"><c r="A' + (i+1) + '" s="2" t="str"><v>' + latinWords[i * 4 ].toUpperCase() + '</v></c><c r="B' + (i+1) + '" s="3" t="str"><v>'  + latinWords[i * 4 + 1].toUpperCase() +  '</v></c><c r="C' + (i+1) + '" s="3" t="str"><v>'  + latinWords[i * 4 + 2].toUpperCase() +  '</v></c><c r="D' + (i+1) + '" s="4" t="str"><v>'  + latinWords[i * 4 + 3] + '</v></c><c r="E' + (i+1) + '" s="5" t="str"><v>' +  englishWords[i * 4 + 3] + '</v></c><c r="F' + (i+1) + '" s="5" t="str"><v>' +  englishWords[i * 4 + 2] +  '</v></c><c r="G' + (i+1) + '" s="5" t="str"><v>'  +  englishWords[i * 4 + 1] +  '</v></c><c r="H' + (i+1) + '" s="5" t="str"><v>'  +  englishWords[i * 4 + 0] +  '</v></c></row>'    

        //finalString = finalString +latinWords[(i * 4) + 0] + '|'
        //finalString = finalString +latinWords[(i * 4) + 1] + '|'
        //finalString = finalString +latinWords[(i * 4) + 2] + '|'
        //finalString = finalString +latinWords[(i * 4) + 3] + '|'
        //finalString = finalString +englishWords[(i * 4) + 3] + '|'
        //finalString = finalString +englishWords[(i * 4) + 2] + '|'
        //finalString = finalString +englishWords[(i * 4) + 1] + '|'
        //finalString = finalString +englishWords[(i * 4) + 0]

        //if(i!=rowcount) {
        //    finalString = finalString + "|"
        //}
        
    }

    sheetString = sheetString + '</sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>    <pageSetup paperSize="9" fitToWidth="2" fitToHeight="7" pageOrder="overThenDown" orientation="portrait" r:id="rId1"/></worksheet>'

    //sharedStr = sharedStr + finalString.replace(/\|/gm,'\<\/t\>\<\/si\>\<si\>\<t\>')
    sharedStr = sharedStr + '</t></si></sst>'

    var zip = new JSZip();
    var url = 'http://derigenda.co.uk/vocabflashcards/docProps/app.xml'
    zip.file('docProps/app.xml', urlToPromise(url), {binary:true});
    var url = 'http://derigenda.co.uk/vocabflashcards/docProps/core.xml'
    zip.file('docProps/core.xml', urlToPromise(url), {binary:true});
    var url = 'http://derigenda.co.uk/vocabflashcards/xl/printerSettings/printerSettings1.bin'
    zip.file('xl/printerSettings/printerSettings1.bin', urlToPromise(url), {binary:true});
    //var url = 'http://derigenda.co.uk/vocabflashcards/xl/sharedStrings.xml'
    zip.file('xl/sharedStrings.xml', sheetString);
    var url = 'http://derigenda.co.uk/vocabflashcards/xl/styles.xml'
    zip.file('xl/styles.xml', urlToPromise(url), {binary:true});
    var url = 'http://derigenda.co.uk/vocabflashcards/xl/theme/theme1.xml'
    zip.file('xl/theme/theme1.xml', urlToPromise(url), {binary:true});
    var url = 'http://derigenda.co.uk/vocabflashcards/xl/workbook.xml'
    zip.file('xl/workbook.xml', urlToPromise(url), {binary:true});
    //var url = 'http://derigenda.co.uk/vocabflashcards/xl/worksheets/sheet1.xml'
    zip.file('xl/worksheets/sheet1.xml', sheetString);
     var url = 'http://derigenda.co.uk/vocabflashcards/[Content_Types].xml'
    zip.file('[Content_Types].xml', urlToPromise(url), {binary:true});
    var url = 'https://derigenda.co.uk/vocabflashcards/sheetrel.xml'
    zip.file('xl/worksheets/_rels/sheet1.xml.rels', urlToPromise(url), {binary:true});
    var url = 'https://derigenda.co.uk/vocabflashcards/bookrel.xml'
    zip.file('xl/_rels/workbook.xml.rels', urlToPromise(url), {binary:true});
    var url = 'https://derigenda.co.uk/vocabflashcards/rel.xml'
    zip.file('_rels/.rels', urlToPromise(url), {binary:true});
    zip.generateAsync({type:"blob"})
.then(function (blob) {
    saveAs(blob, "flashcards.xlsx");
});
}

function addfile(zip,file){
    var url = 'http://derigenda.co.uk/' + file
    zip.file(file, urlToPromise(url), {binary:true});
}

function urlToPromise(url) {
    return new Promise(function(resolve, reject) {
        JSZipUtils.getBinaryContent(url, function (err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}