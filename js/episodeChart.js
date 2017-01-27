var episodeChartCanvas = document.getElementById("episodeChart");
var episodeChart = new Chart(episodeChartCanvas, {
    type: 'bar',
    data: {
        labels: ['Good News, Bad News', 'The Stakeout', 'The Robbery', 'Male Unbonding', 'The Stock Tip', 'The Ex-Girlfriend', 'The Pony Remark', 'The Jacket', 'The Phone Message', 'The Apartment', 'The Statue', 'The Revenge', 'The Heart Attack', 'The Deal', 'The Baby Shower', 'The Chinese Restaurant', 'The Busboy', 'The Note', 'The Truth', 'The Pen', 'The Dog', 'The Library', 'The Parking Garage', 'The Cafe', 'The Tape', 'The Nose Job', 'The Stranded', 'The Alternate Side', 'The Red Dot', 'The Subway', 'The Pez Dispenser', 'The Suicide', 'The Fix Up', 'The Boyfriend: Part 1', 'The Boyfriend: Part 2', 'The Limo', 'The Good Samaritan', 'The Letter', 'The Parking Space', 'The Keys', 'The Trip: Part1', 'The Trip: Part 2', 'The Pitch', 'The Ticket', 'The Wallet', 'The Watch', 'The Bubble Boy', 'The Cheever Letters', 'The Opera', 'The Virgin', 'The Contest', 'The Airport', 'The Pick', 'The Movie', 'The Visa', 'The Shoes', 'TheOuting', 'The Old Man', 'The Implant', 'The Junior Mint', 'The Smelly Car', 'The Handicap Spot', 'The Pilot', 'TheMango', 'The Puffy Shirt', 'The Glasses', 'The Sniffing Accountant', 'The Bris', 'The Lip Reader', 'The Non-Fat Yogurt', 'The Barber', 'The Masseuse', 'The Cigar Store Indian', 'The Conversion', 'The Stall', 'The Dinner Party', 'The Marine Biologist', 'The Pie', 'The Stand-In', 'The Wife', 'The Raincoats', 'The Fire', 'The Hamptons', 'The Opposite', 'The Chaperone', 'The Big Salad', 'The Pledge Drive', 'The Chinese Woman', 'The Couch', 'The Gymnast', 'The Soup', 'The Mom and Pop Store', 'The Secretary', 'The Race', 'The Switch', 'The Label Maker', 'The Scofflaw', 'Highlights of a Hundred', 'The Beard', 'The Kiss Hello', 'The Doorman', 'The Jimmy', 'The Doodle', 'The Fusilli Jerry', "The Diplomat's Club", 'The Face Painter', 'The Understudy', 'The Engagement', 'The Postponement', 'The Maestro', 'The Wink', 'The Hot Tub', 'The Soup Nazi', 'The Secret Code', 'The Pool Guy', 'The Sponge', 'The Gum', 'The Rye', 'The Caddy', 'The Seven', 'The Cadillac', 'The Shower Head', 'The Doll', 'The Friars Club', 'The Wig Master', 'The Calzone', 'The Bottle Deposit', 'The Wait Out', 'The Invitations', 'The Foundation', 'The Soul Mate', 'The BizarroJerry', 'The Little Kicks', 'The Package', 'The Fatigues', 'The Checks', 'The Chicken Roaster', 'The Abstinence','The Andrea Doria', 'The Little Jerry', 'The Money', 'The Comeback', 'The Van Buren Boys', 'The Susie', 'The Pothole', 'The English Patient', 'The Nap', 'The Yada Yada', 'The Millennium', 'The Muffin Tops', 'The Summer of George','The Butter Shave', 'The Voice', 'The Serenity Now', 'The Blood', 'The Junk Mail', 'The Merv Griffin Show', 'The Slicer', 'The Betrayal', 'The Apology', 'The Strike', 'The Dealership', 'The Reverse Peephole', 'The Cartoon', 'TheStrongbox', 'The Wizard', 'The Burning', 'The Bookstore', 'The Frogger', 'The Maid', 'The Puerto Rican Day', 'The Chronicle', 'The Finale'],
        datasets: [
            {
                type: 'bar',
                label: 'Rating',
                data: [7.9, 7.8, 7.7, 7.6, 7.7, 7.8, 8.1, 8.5, 8.6, 8.1, 8.2, 8.5, 8.1, 8.4, 7.8, 8.9, 7.9, 8.4, 8.0, 8.4, 7.4, 8.8, 8.9,
                    8.6, 8.8, 8.2, 7.6, 8.5, 8.6, 8.9, 8.6, 7.8, 8.5, 9.0, 8.9, 8.9, 8.1, 8.1, 8.5, 8.7, 8.4, 8.6, 8.8, 8.6, 8.2, 8.3,
                    8.9, 8.7, 8.5, 8.4, 9.6, 9.0, 8.7, 8.4, 8.3, 8.5, 9.4, 8.3, 8.8, 8.9, 8.7, 8.5, 8.8, 8.7, 9.0, 8.5, 8.4, 8.3, 8.7,
                    8.7, 8.4, 8.1, 8.6, 8.4, 8.8, 8.4, 9.3, 8.7, 8.0, 8.2, 8.7, 8.9, 9.1, 9.6, 8.2, 8.4, 8.4, 8.4, 8.4, 8.5, 8.5, 8.3,
                    8.3, 9.0, 9.0, 8.8, 8.4, 7.5, 8.5, 8.4, 8.6, 9.1, 8.5, 8.9, 8.3, 8.6, 8.3, 8.8, 8.4, 8.3, 8.9, 8.8, 9.6, 8.6, 8.5,
                    8.6, 8.9, 9.0, 8.8, 8.4, 8.7, 8.6, 8.4, 8.1, 8.4, 9.0, 8.9, 8.5, 8.9, 8.5, 8.3, 9.2, 9.0, 8.8, 8.4, 8.4, 9.1, 9.0,
                    8.6, 8.6, 8.0, 8.8, 8.3, 8.7, 8.8, 8.7, 8.9, 9.1, 8.4, 8.7, 8.8, 8.7, 8.7, 9.0, 8.4, 8.4, 9.1, 8.6, 9.1, 8.5, 8.9,
                    8.7, 8.6, 8.2, 8.2, 8.3, 8.6, 8.6, 9.0, 8.2, 8.3, 8.3, 7.8],
                backgroundColor: "#4488ee"

            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Episode Ratings and Character Appearances'
        },
        scales: {
            yAxes :[{
                ticks: {
                    beginAtZero: false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Rating'
                }
            }],
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});


function update(i) {
    episodeChart.data.datasets[0].backgroundColor = characters[i];
    episodeChart.update()
}
