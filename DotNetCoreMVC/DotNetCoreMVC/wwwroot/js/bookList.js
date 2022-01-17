﻿var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    console.log("dddd");
    dataTable = $('#DT_load').DataTable({
        "ajax": {
            "url": "/books/getall/",
            "type": "GET",
            "datatype": "json"
        },
        
        "columns": [
            { "data": "name", "width": "20%" },
            { "data": "author", "width": "20%" }
            
        ],
        "language": {
            "emptyTable": "no data found"
        },
        "width": "100%"
    });
}

