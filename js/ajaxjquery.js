$(document).ready(function () {
    
            var counter = 1;
            var outputjson = '';
            var btnjson = $('#jsondata');
            btnjson.bind('click', loadjson);


            function loadjson() {

                var xhttpjson = new XMLHttpRequest();
                xhttpjson.open("GET", "peoplejson" + counter + ".json", true);
                xhttpjson.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //document.getElementById("demo").innerHTML = xhttp.responseText;
            console.log(" before parse" + xhttpjson.responseText);
        var response = JSON.parse(xhttpjson.responseText);
                        console.log("after parse " +response.people[0].firstname);
                        var people = response.people;
                        outputjson += '<table class="table table-bordered table-striped" style="border:2px solid black;">';
                        outputjson += '<tr style="border:2px solid black;"><th>First Name </th><th>First Name </th><th>age </th><th>street </th><th>state </th></tr>'
                        datafunction(people);

                    }
                };
                xhttpjson.send();
                counter++;
                if (counter > 3) {
                btnjson.hide();
            };

            };
            function datafunction(people) {
                outputjson += '<div style="height:10px;"></div >' +
                    '<h1>employee  detail</h1></br>'
                //for (var i = 0; i < people.length; i++)
                for (var i in  people)
                {
                //console.log(people[i]);
                outputjson += '<tr style="border:1px solid blue;">';
            outputjson += '<td style="border:1px solid blue;">' + 'first name:     ' + people[i].firstname + '</td>';
                    outputjson += '<td style="border:1px solid blue;">' + 'last name:       ' + people[i].lastname + ' </td>';
                    outputjson += '<td style="border:1px solid blue;">' + 'age is :       ' + people[i].age + ' </td>';

                    console.log(people[i].address.street);
                    outputjson += '<td style="border:1px solid blue;">' + 'adreess street:     ' + people[i].address.street + '</td>';
                    outputjson += '<td style="border:1px solid blue;">' + 'adreess street:     ' + people[i].address.state + '</td>';
                     outputjson += '</tr>';
                }
                //alert(data);
                outputjson += '</table>'
    outputjson += '</br>'

    $('#JSON_LOCAL').html(outputjson);

}


       
    //$('#content').load('about.html');

    //$('.mainnavbar ul.navbar-nav div.dropdown-menu a.dropdown-item').click(function () {
    //    var page = $(this).attr('href');
    //       //$('#content').load('index.html');
    //    alert($(this));
    //    alert(page);
    //    $('#content').load(page + '.html');
    //    return false;
    //});


    //Create an index.html, specify a < div class="container" > and leave this empty.Then use jQuery to load home.html into the .container object, and do the same for all other pages.

    //    $(document).ready(function () {
    //        $(".container").load("home.html");
    //    });

    //$("ul.navbar-nav li").each(function () {
    //    $(this).on("click", function{
    //        $(".container").load(($this).attr("data-page") + ".html");
    //    });
    //});
    //In this case, the href value of your URL should always be "#" and you should give it a data- page="about" if you want it to show the about page.
});