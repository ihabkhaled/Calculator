
    var signupV=0;
    var loginV=0;
    function signup()
    {
        if(signupV == 0 ) {
            document.getElementById("signupframe").style.display = "initial";
            document.getElementById("loginframe").style.display = "none";
            signupV=1;
            loginV=0;
        }
        else
        {
            document.getElementById("signupframe").style.display = "none";
            document.getElementById("loginframe").style.display = "none";
            signupV=0;
        }
    }

    function loginview()
    {
        if(loginV == 0 ) {
            document.getElementById("signupframe").style.display = "none";
            document.getElementById("loginframe").style.display = "initial";
            loginV=1;
            signupV=0;
        }
    else
        {
            document.getElementById("signupframe").style.display = "none";
            document.getElementById("loginframe").style.display = "none";
            loginV=0;
        }
    }
	
$(document).ready(function(){
    $("table tr").click(function(){
                $(this).addClass('selected').siblings().removeClass('selected');
        var value=$(this).find('td:first').html();
        alert(value);
    });
});

    function deleteData()
    {
        var idd = document.getElementById("idNo").innerHTML;
        if(document.getElementById("idNo").innerHTML != null && document.getElementById("idNo").innerHTML != "") {

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                    if (xmlhttp.responseText.toString() == "Values Deleted successfully") {

                        document.getElementById("delete").className = "btn btn-success";
                        refreshTable();
                        document.getElementById("idNo").innerHTML = null;
                        alert(xmlhttp.responseText);
                    }
                    else {
                        alert(xmlhttp.responseText);
                    }
                }
            };

            xmlhttp.open("POST", "delete.php", true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send("idNo=" + idd);
        }
    }

    function refreshTable()
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                if (xmlhttp.responseText.toString() !== "not found") {

                    document.getElementById("getdata").className = "btn btn-success";
                    document.getElementById("DataTable").innerHTML = this.responseText;
                }
                else
                {
                    document.getElementById("getdata").className = "btn btn-danger";
                    alert(xmlhttp.responseText);
                }
            }
        };
        xmlhttp.open("POST","getData.php",true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }


    function getData()
    {

        var xmlhttp = new XMLHttpRequest();
        var data = "";
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                if (xmlhttp.responseText.toString() !== "not found") {
					
                    document.getElementById("getdata").className = "btn btn-success";
                    document.getElementById("DataTable").innerHTML = this.responseText;
                    $("#DataTable").toggle(1000);
					
    $("table tr").click(function(){
                $(this).addClass('selected').siblings().removeClass('selected');
        //var value=$(this).find('td:first').html() ;
        var value=$(this).find('td:eq(1)').html() ;
        document.getElementById("idNo").innerHTML = value;
        //alert(value);
    });
					

                }
                else
                {
                    document.getElementById("getdata").className = "btn btn-danger";
                    alert(xmlhttp.responseText);
                }
            }
        };

        xmlhttp.open("POST","getData.php",true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }

    function login()
    {
        var user = document.getElementById("usernamelog").value;
        var pass = document.getElementById("passwordlog").value;
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                if (xmlhttp.responseText.toString() === "User found") {
                    document.getElementById("btlog").className = "btn btn-success";
                    document.getElementById("usernamelog").value = null;
                    document.getElementById("passwordlog").value = null;
                    //alert(xmlhttp.responseText);
                }
                else
                {
                    document.getElementById("btlog").className = "btn btn-danger";
                    //alert(xmlhttp.responseText);
                }
            }
        };

        xmlhttp.open("POST","login.php",true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send("user=" + user + "&pass=" + pass);
    }

    function send() {
        var user = document.getElementById("usernamein").value;
        var pass = document.getElementById("passwordin").value;
        var email = document.getElementById("emailin").value;
        var name = document.getElementById("fullnamein").value;

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                if (xmlhttp.responseText.toString() === "Values Inserted successfully") {
                    document.getElementById("btsignup").className = "btn btn-success";

                    document.getElementById("usernamein").value = null;
                    document.getElementById("passwordin").value = null;
                    document.getElementById("emailin").value = null;
                    document.getElementById("fullnamein").value = null;
                    refreshTable();
                }
                else
                {
                    document.getElementById("btsignup").className = "btn btn-danger";
                    //alert(xmlhttp.responseText);
                }
            }
        };

        xmlhttp.open("POST","insert.php",true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send("user=" + user + "&pass=" + pass + "&email=" + email + "&name=" + name);
    }