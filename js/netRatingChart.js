var netRatingChartCanvas = document.getElementById("netRatingChart");
var plus = '#25C7FF';
var minus = '#FF4B25';
var netRatingChart = new Chart(netRatingChartCanvas, {
    type: 'bar',
    data: {
        labels: ['Man on Sidewalk', 'Jerry Seinfeld_writer', 'Man in Coffee Shop', 'Jason Alexander_director', 'Robin', 'Joel', 'Attendant', 'Wyck', 'Ellen', 'Mr. Pitt', 'Pharmacist', 'Dr. Reston', 'Stan', 'Morgan', 'Babu Bhatt', 'Jackie Chiles', 'Leslie', 'Father', 'Lisa', 'Mom', 'Stewardess', 'Morty Seinfeld', 'Uncle Leo', 'The Nurse', 'Nana', 'Receptionist', 'Cynthia', 'Jack Klompus', 'Helen Seinfeld', 'Gail', 'Jake Jarmel', 'Roy', 'Tina', 'Rabbi Glickman', 'Rita', 'Customer', 'Usher', 'Tom Cherones_director', 'Man', 'Sid', 'Waiter', 'Melissa', 'David', 'Karen', 'Policeman', 'Man #1', 'Mickey Abbott', 'Man #2', 'Cashier', 'Kenny Bania', 'Willie', 'Mr. Ross', 'Bill', 'Mrs. Ross', 'Joey', 'Passerby', 'Cab Driver', 'Bob', 'Poppie', 'Herself', 'Old Woman', 'Doorman', 'Jay Crespi', 'Susan Ross', 'David Puddy', 'J. Peterman', 'Cedric', 'Dugan', 'Andy Ackerman_director', "'Crazy' Joe Davola", 'Kruger', 'Mike', 'Russell Dalrymple', 'Secretary', 'Carol', 'Ruthie Cohen', 'Newscaster', 'Security Guard', 'Cop', 'Salesman', 'Frank Costanza', 'Doctor', 'Driver', 'Saleswoman', 'Ping', 'Marla', 'Orderly', 'Newman', 'The Waitress', 'Woman', 'Mr. Lippman', 'Joanne', 'Glenn', 'Doris', 'Ralph', 'Dan', 'Woman in Cafe', 'Gwen', 'Renee', 'Laura', 'Cabbie', 'Stu Chermack', 'Judge', 'Homeless Man', 'Ricky', 'Estelle Constanza', 'Dana Foley', 'Office Worker', 'Man in Theatre', 'Allison', 'Cheryl', 'Woman #1', 'Himself', 'Woman #2', 'Fred', 'Manager', 'Cop #1', 'Sheila', 'Tia', 'Clerk', 'Wilhelm', 'Delivery Guy', 'Cop #2', 'Sidra', 'Mother', 'George Steinbrenner', 'Walter', 'Man in Restaurant', 'Mel Sanger', 'Michael', 'Lloyd Braun', 'Kid', 'Carrie', 'Tim Whatley', 'Deena Lazzari', 'Keith Hernandez', 'Sue Ellen', 'Man on the Street', 'Ben', 'Nina', 'Man in Cafe', 'Julie', 'Rachel', 'Elaine Benes', 'Jerry Seinfeld', 'Kramer', 'George Costanza', 'Larry David_writer'],
        datasets: [
            {
                type: 'bar',
                label: 'Character Net Ratings',
                data: [-0.8, -0.6, -0.6, -0.5, -0.5, -0.5, -0.4, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.3, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, -0.1, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.6, 0.6, 0.6, 0.7, 0.0, 0.0, 0.0, 0.0],
                backgroundColor: [minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, minus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, plus, minus, minus, minus, minus]

            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Net Character Appearance Ratings'
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
