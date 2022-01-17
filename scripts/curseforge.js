const projectIDs = [
    '250603',
    '242436',
    '247369',
    '268210',

    '355143',
    '256991',
    '227277',
    '246996',

    '243951',
    '228809',
    '283415',
    '254916',

    '227276',
    '224841',
    '236564',
    '237695'
]

function initialize() {
    for (let projectID of projectIDs) {
        console.log(projectID.toString())
        getProjectDownloads(projectID);
    }
}

function httpGetAsync(projectID, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", 'https://api.cfwidget.com/' + projectID, true);
    xmlHttp.send(null);
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getProjectDownloads(projectID) {
    const webpage = document.getElementById(projectID);


    httpGetAsync(projectID, function(modJson) {
        let modObj = JSON.parse(modJson);
        let downloads = modObj.downloads.total;
        console.log(formatNumber(downloads))

        webpage.innerHTML = formatNumber(downloads) + ' downloads';
    })

}

