from decimal import Decimal
net_ratings = open("character_net_ratings.js", 'w')

characters = []
ratings = []
colours = []
with open('characterDataFrame.csv', 'r') as f:
    for line in f:
        if line[0] != ',':
            splitter = line.split(',')
            characters.append(splitter[1])
            try:
                rate = float(splitter[-2])
            except:
                rate = float(0.0)
            ratings.append(round(rate,1))
            if rate > 0:
                colours.append("#FF4B25")
            else:
                colours.append("#25C7FF")
net_ratings.write("{0}".format(characters))
net_ratings.write("\n")
net_ratings.write("{0}".format(ratings))
net_ratings.write("\n")
net_ratings.write("{0}".format(colours))
net_ratings.close()
