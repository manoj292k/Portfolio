var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }

        /*----------about--------*/
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }
        /*--------------alart--------------*/
        function number(){
            var submit = document.getElementById("com").value;
        
            if (submit.length >=  2) {
            window.alert("Success");
            console.log("success",submit);
            } 
            else {
            window.alert("Invalid");
            console.log("failed",submit);
            }
        }