// Calls the api address
fetch('https://cat-fact.herokuapp.com/facts')
    .then(req => req.json())
    .then(res => {
        let html = '';
        //filters and returns the resource text
        res.all.map(data => {
            html += `<p>${data.text}</p>`
            //sends it back to the DOM in the paragrpah
            return document.getElementById('displayText').innerHTML = html;
        })
    })
