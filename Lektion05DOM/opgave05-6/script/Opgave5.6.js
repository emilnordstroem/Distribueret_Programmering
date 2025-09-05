
function pageSetup () {
    constructHeaderElement();
    constructMountainOverviewTable();
}

function constructHeaderElement () {
    const headerElement = document.createElement("header");
    headerElement.textContent = "Mountain";
    document.body.appendChild(headerElement);
}

function getMountainArray () {
    return [
        {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
        {name: "Everest", height: 8848, place: "Nepal"},
        {name: "Mount Fuji", height: 3776, place: "Japan"},
        {name: "Vaalserberg", height: 323, place: "Netherlands"},
        {name: "Denali", height: 6168, place: "United States"},
        {name: "Popocatepetl", height: 5465, place: "Mexico"},
        {name: "Mont Blanc", height: 4808, place: "Italy/France"}
    ];
}

function constructMountainOverviewTable () {
    const MOUNTAINS = getMountainArray();

    // Create table
    const mountainOverviewTable = document.createElement("table");
    mountainOverviewTable.id = "mountainOverview";
    
    // Create table header
    const defaultMountainObject = MOUNTAINS[0];
    const headerRow = document.createElement("tr");
    // For each key within the object of defaultMountainObject
    Object.keys(defaultMountainObject).forEach(key => {
        const tableHeaderElement = document.createElement("th");
        tableHeaderElement.textContent = key;
        headerRow.append(tableHeaderElement);
    });
    mountainOverviewTable.appendChild(headerRow);
    
    // Create table rows
    MOUNTAINS.forEach(mountainObject => {
        const tableRow = document.createElement("tr");
        for(const key in mountainObject){
            const tableData = document.createElement("td");
            tableData.textContent = mountainObject[key];
            tableRow.appendChild(tableData);
        }        
        mountainOverviewTable.appendChild(tableRow);
    });
    
    // Append table to body of document
    document.body.appendChild(mountainOverviewTable);
}



