var netRatingChartCanvas = document.getElementById("netRatingChart");
var plus = '#FF4B25';
var minus = '#25C7FF';
var netRatingChart = new Chart(netRatingChartCanvas, {
    type: 'bar',
    data: {
        labels: ['Man on Sidewalk', 'Jerry Seinfeld_writer', 'Man in Coffee Shop', 'Jason Alexander_director', 'Robin', 'Joel', 'Attendant', 'Wyck', 'Ellen', 'Mr. Pitt', 'Pharmacist', 'Dr. Reston', 'Stan', 'Morgan', 'Babu Bhatt', 'Jackie Chiles', 'Leslie', 'Father', 'Lisa', 'Mom', 'Stewardess', 'Morty Seinfeld', 'Uncle Leo', 'The Nurse', 'Nana', 'Receptionist', 'Cynthia', 'Jack Klompus', 'Helen Seinfeld', 'Gail', 'Jake Jarmel', 'Roy', 'Tina', 'Rabbi Glickman', 'Rita', 'Customer', 'Usher', 'Tom Cherones_director', 'Man', 'Sid', 'Waiter', 'Melissa', 'David', 'Karen', 'Policeman', 'Man #1', 'Mickey Abbott', 'Man #2', 'Cashier', 'Kenny Bania', 'Willie', 'Mr. Ross', 'Bill', 'Mrs. Ross', 'Joey', 'Passerby', 'Cab Driver', 'Bob', 'Poppie', 'Herself', 'Old Woman', 'Doorman', 'Jay Crespi', 'Susan Ross', 'David Puddy', 'J. Peterman', 'Cedric', 'Dugan', 'Andy Ackerman_director', "'Crazy' Joe Davola", 'Kruger', 'Mike', 'Russell Dalrymple', 'Secretary', 'Carol', 'Ruthie Cohen', 'Newscaster', 'Security Guard', 'Cop', 'Salesman', 'Frank Costanza', 'Doctor', 'Driver', 'Saleswoman', 'Ping', 'Marla', 'Orderly', 'Newman', 'The Waitress', 'Woman', 'Mr. Lippman', 'Joanne', 'Glenn', 'Doris', 'Ralph', 'Dan', 'Woman in Cafe', 'Gwen', 'Renee', 'Laura', 'Cabbie', 'Stu Chermack', 'Judge', 'Homeless Man', 'Ricky', 'Estelle Constanza', 'Dana Foley', 'Office Worker', 'Man in Theatre', 'Allison', 'Cheryl', 'Woman #1', 'Himself', 'Woman #2', 'Fred', 'Manager', 'Cop #1', 'Sheila', 'Tia', 'Clerk', 'Wilhelm', 'Delivery Guy', 'Cop #2', 'Sidra', 'Mother', 'George Steinbrenner', 'Walter', 'Man in Restaurant', 'Mel Sanger', 'Michael', 'Lloyd Braun', 'Kid', 'Carrie', 'Tim Whatley', 'Deena Lazzari', 'Keith Hernandez', 'Sue Ellen', 'Man on the Street', 'Ben', 'Nina', 'Man in Cafe', 'Julie', 'Rachel', 'Elaine Benes', 'Jerry Seinfeld', 'Kramer', 'George Costanza', 'Larry David_writer']
        datasets: [
            {
                type: 'bar',
                label: 'Character Net Ratings',
                data: [7.9, 7.8, 7.7, 7.6, 7.7, 7.8, 8.1, 8.5, 8.6, 8.1, 8.2, 8.5, 8.1, 8.4, 7.8, 8.9, 7.9, 8.4, 8.0, 8.4, 7.4, 8.8, 8.9,
                    8.6, 8.8, 8.2, 7.6, 8.5, 8.6, 8.9, 8.6, 7.8, 8.5, 9.0, 8.9, 8.9, 8.1, 8.1, 8.5, 8.7, 8.4, 8.6, 8.8, 8.6, 8.2, 8.3,
                    8.9, 8.7, 8.5, 8.4, 9.6, 9.0, 8.7, 8.4, 8.3, 8.5, 9.4, 8.3, 8.8, 8.9, 8.7, 8.5, 8.8, 8.7, 9.0, 8.5, 8.4, 8.3, 8.7,
                    8.7, 8.4, 8.1, 8.6, 8.4, 8.8, 8.4, 9.3, 8.7, 8.0, 8.2, 8.7, 8.9, 9.1, 9.6, 8.2, 8.4, 8.4, 8.4, 8.4, 8.5, 8.5, 8.3,
                    8.3, 9.0, 9.0, 8.8, 8.4, 7.5, 8.5, 8.4, 8.6, 9.1, 8.5, 8.9, 8.3, 8.6, 8.3, 8.8, 8.4, 8.3, 8.9, 8.8, 9.6, 8.6, 8.5,
                    8.6, 8.9, 9.0, 8.8, 8.4, 8.7, 8.6, 8.4, 8.1, 8.4, 9.0, 8.9, 8.5, 8.9, 8.5, 8.3, 9.2, 9.0, 8.8, 8.4, 8.4, 9.1, 9.0,
                    8.6, 8.6, 8.0, 8.8, 8.3, 8.7, 8.8, 8.7, 8.9, 9.1, 8.4, 8.7, 8.8, 8.7, 8.7, 9.0, 8.4, 8.4, 9.1, 8.6, 9.1, 8.5, 8.9,
                    8.7, 8.6, 8.2, 8.2, 8.3, 8.6, 8.6, 9.0, 8.2, 8.3, 8.3, 7.8],
                backgroundColor: [minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, minus, minus, minus, minus]

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
                    labelString: 'Net Rating'
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
