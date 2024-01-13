let card1 = document.getElementById("card1");
        let card2 = document.getElementById("card2");
        let card3=document.getElementById("card3");
        let card4=document.getElementById("card4");
        let card5=document.getElementById("card5");
        let card6=document.getElementById("card6");
        let a1 = document.getElementById("a1");
        let a2 = document.getElementById("a2");
        let a3=document.getElementById("a3");
        let a4 = document.getElementById("a4");
        let a5 = document.getElementById("a5");
        let a6=document.getElementById("a6");
        let a11=document.getElementById("a11")
        let a12 = document.getElementById("a12");
        let a13=document.getElementById("a13");
        let a14 = document.getElementById("a14");
        let a15 = document.getElementById("a15");
        let a16=document.getElementById("a16");
        function updateCardBasedOnDay() {
            const currentDay = new Date().getDay();

            // Reset borders
            card1.style.border = "none";
            card2.style.border = "none";
            card3.style.border="none";
            card4.style.border = "none";
            card5.style.border = "none";
            card6.style.border="none";
            // Set border based on the current day
            if (currentDay === 1) { // Monday
                card1.style.border = "2px solid yellow";
            } else if (currentDay === 2) { // Tuesday
                card2.style.border = "2px solid yellow";
            }else if(currentDay===3){
                card3.style.border = "2px solid yellow";
            }else if(currentDay===4){
                card4.style.border = "2px solid yellow";
            }else if(currentDay===5){
                card5.style.border = "2px solid yellow";
            }else if(currentDay===6){
                card6.style.border = "2px solid yellow";
            }
            // Add conditions for other days as needed
        }

        a1.addEventListener('click', (event) => {
            card1.style.border = "2px solid cyan";
            card2.style.border = "none";
            card3.style.border="none";
            card4.style.border="none";
            card5.style.border="none";
            card6.style.border="none";
            card1.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
        });
        a11.addEventListener('click', (event) => {
            card1.style.border = "2px solid cyan";
            card2.style.border = "none";
            card3.style.border="none";
            card4.style.border="none";
            card5.style.border="none";
            card6.style.border="none";
            card1.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
            closeSidebar();
        });
        a2.addEventListener('click', (event) => {
            card2.style.border = "2px solid cyan";
            card1.style.border = "none";
            card3.style.border="none";
            card4.style.border="none";
            card5.style.border="none";
            card6.style.border="none";
            card2.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
        });
        a3.addEventListener('click', (event) => {
            card3.style.border = "2px solid cyan";
            card1.style.border = "none";
            card2.style.border="none";
            card4.style.border="none";
            card5.style.border="none";
            card6.style.border="none";
            card3.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
        });
        a4.addEventListener('click', (event) => {
            card4.style.border = "2px solid cyan";
            card1.style.border = "none";
            card2.style.border="none";
            card3.style.border="none";
            card5.style.border="none";
            card6.style.border="none";
            card4.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
        });
        a5.addEventListener('click', (event) => {
            card5.style.border = "2px solid cyan";
            card1.style.border = "none";
            card2.style.border = "none";
            card3.style.border = "none";
            card4.style.border = "none";
            card6.style.border = "none"; // Fix the typo here
            card5.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
        });
        a6.addEventListener('click', (event) => {
            card6.style.border = "2px solid cyan";
            card1.style.border = "none";
            card2.style.border = "none";
            card3.style.border = "none";
            card4.style.border = "none";
            card5.style.border = "none"; // Fix the typo here
            card6.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
        });
        a12.addEventListener('click', (event) => {
            card2.style.border = "2px solid cyan";
            card1.style.border = "none";
            card3.style.border="none";
            card4.style.border="none";
            card5.style.border="none";
            card6.style.border="none";
            card2.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
            closeSidebar();
        });
        a13.addEventListener('click', (event) => {
            card3.style.border = "2px solid cyan";
            card1.style.border = "none";
            card2.style.border="none";
            card4.style.border="none";
            card5.style.border="none";
            card6.style.border="none";
            card3.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
            closeSidebar();
        });
        a14.addEventListener('click', (event) => {
            card4.style.border = "2px solid cyan";
            card1.style.border = "none";
            card2.style.border="none";
            card3.style.border="none";
            card5.style.border="none";
            card6.style.border="none";
            card4.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
            closeSidebar();
        });
        a15.addEventListener('click', (event) => {
            card5.style.border = "2px solid cyan";
            card1.style.border = "none";
            card2.style.border = "none";
            card3.style.border = "none";
            card4.style.border = "none";
            card6.style.border = "none"; // Fix the typo here
            card5.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
            closeSidebar();
        });
        a16.addEventListener('click', (event) => {
            card6.style.border = "2px solid cyan";
            card1.style.border = "none";
            card2.style.border = "none";
            card3.style.border = "none";
            card4.style.border = "none";
            card5.style.border = "none"; // Fix the typo here
            card6.scrollIntoView({ behavior: 'smooth' });
            event.preventDefault();
            closeSidebar();
        });

        // Update card borders on page load
        updateCardBasedOnDay();

        function toggleSidebar() {
            let sidebar = document.querySelector('.sidebar');
            sidebar.style.display = (sidebar.style.display === 'flex') ? 'none' : 'flex';
        }
        
        function closeSidebar() {
            let sidebar = document.querySelector('.sidebar');
            sidebar.style.display = 'none';
        }
        