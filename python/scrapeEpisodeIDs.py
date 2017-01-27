#!/usr/bin/python

# import imdb
import sys
# from BeautifulSoup import BeautifulSoup
# import urllib2
import pandas as pd
from imdbpie import Imdb
import numpy as np
imdb = Imdb()
imdb = Imdb(anonymize=True)
pd.set_option('display.max_rows', 500)
pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 1000)

seinfeldDf = pd.DataFrame(columns=["Season","Episode","Title","Rating"])

episodes = imdb.get_episodes("tt0098904")
for episode in episodes:
    titleStr = episode.title
    season = episode.season
    episode_number = episode.episode
    title = None
    while not title:
        try:
            title = imdb.get_title_by_id(episode.imdb_id)
        except:
            pass
    rating = title.rating
    cast = title.credits
    writersTmp = title.writers_summary
    directorsTmp = title.directors_summary

    print season,episode_number,titleStr

    writers = [str(i.name)+"_writer" for i in writersTmp]
    directors = [str(i.name)+"_director" for i in directorsTmp]

    characters = []
    for character in cast:
      if len(character.roles)>0:
        thisRole = character.roles[0]
              
        characters.append(thisRole)

        if characters[-1] == "Kessler": characters[-1] = "Kramer"
        if characters[-1] == "George":  characters[-1] = "George Costanza"
        if characters[-1] == "Cosmo Kramer":  characters[-1] = "Kramer"
        if characters[-1] == "Peterman":  characters[-1] = "J. Peterman"
        if characters[-1] == "Lippman":  characters[-1] = "Mr. Lippman"
        if characters[-1] == "Justin Pitt":  characters[-1] = "Mr. Pitt"

        if characters[-1] == "Helen":  characters[-1] = "Helen Seinfeld"
        if characters[-1] == "Morty":  characters[-1] = "Morty Seinfeld"
        if characters[-1] == "Leo":  characters[-1] = "Uncle Leo"
        if characters[-1] == "Waitress":  characters[-1] = "The Waitress"
        if characters[-1] == "Cook":  characters[-1] = "The Cook"
        if characters[-1] == "Nurse":  characters[-1] = "The Nurse"
        if characters[-1] == "Jack":  characters[-1] = "Jack Klompus"
        if characters[-1] == "Bookman":  characters[-1] = "Lt. Bookman"
        if characters[-1] == "Babu":  characters[-1] = "Babu Bhatt"
        if characters[-1] == "Keith":  characters[-1] = "Keith Hernandez"
        if characters[-1] == "Joe Davola":  characters[-1] = "'Crazy' Joe Davola"
        if characters[-1] == "Joe":  characters[-1] = "'Crazy' Joe Davola"
        if characters[-1] == "Dr. Reston - the Psychiatrist":  characters[-1] = "Dr. Reston"
        if characters[-1] == "Frank":  characters[-1] = "Frank Costanza"
        if characters[-1] == "Bania":  characters[-1] = "Kenny Bania"
        if characters[-1] == "Kenny":  characters[-1] = "Kenny Bania"
        if characters[-1] == "Tim":  characters[-1] = "Tim Whatley"
        if characters[-1] == "Mickey":  characters[-1] = "Mickey Abbott"
        if characters[-1] == "Jake":  characters[-1] = "Jake Jarmel"
        if characters[-1] == "Stu":  characters[-1] = "Stu Chermack"
        if characters[-1] == "Jay":  characters[-1] = "Jay Crespi"
        if characters[-1] == "Phil":  characters[-1] = "Phil Totola"
        if characters[-1] == "Maestro":  characters[-1] = "The Maestro"
        if characters[-1] == "Rabbi":  characters[-1] = "Rabbi Glickman"
        if characters[-1] == "Mel":  characters[-1] = "Mel Sanger"
        if characters[-1] == "Deensfrei":  characters[-1] = "Mr. Deensfrei"
        # if characters[-1] == "":  characters[-1] = ""
        # if characters[-1] == "":  characters[-1] = ""
        # if characters[-1] == "":  characters[-1] = ""



    # print seinfeldDf.columns
    seinfeldDf.loc[len(seinfeldDf)] = [0 for i in range(len(seinfeldDf.columns))]
    thisIndex = seinfeldDf.index[-1]
    seinfeldDf.ix[thisIndex,"Season"]=season    
    seinfeldDf.ix[thisIndex,"Episode"]=episode_number
    seinfeldDf.ix[thisIndex,"Title"]=titleStr
    seinfeldDf.ix[thisIndex,"Rating"]=rating

    for thisCharacter in characters+writers+directors:
        # print thisCharacter
        if thisCharacter not in seinfeldDf.columns:
            seinfeldDf[thisCharacter] = np.zeros(len(seinfeldDf))

        seinfeldDf.ix[thisIndex,thisCharacter] = 1

    # print seinfeldDf
    # if season > 2:
    #     # sys.exit(0)
    #     break

# seinfeldDf = seinfeldDf[seinfeldDf["Season"]>1]

# seinfeldDfNoFinale = seinfeldDf.loc[0:len(seinfeldDf)-2]
# seinfeldDf = seinfeldDf.loc[seinfeldDf.index[0]:seinfeldDf.index[-2]]

# seinfeldDf = seinfeldDf[seinfeldDf.columns[seinfeldDf.sum()>=3]]


characterDb = pd.DataFrame(columns=["Name","In_Rating","In_Count","Out_Rating","Out_Count"])
for character in seinfeldDf.columns[seinfeldDf.sum()>=3]:
   if character not in ["Episode","Season","Rating","Title"]: 
        # print character,
        characterDb.loc[len(characterDb)] = [0 for i in range(len(characterDb.columns))]
        thisIndex = characterDb.index[-1]

        characterDb.ix[thisIndex,"Name"] = character
        
        dbCharacterIn = seinfeldDf[seinfeldDf[character]==1]["Rating"].values
        characterDb.ix[thisIndex,"In_Count"] = len(dbCharacterIn)
        characterDb.ix[thisIndex,"In_Rating"] = np.median(dbCharacterIn)

        dbCharacterOut = seinfeldDf[seinfeldDf[character]==0]["Rating"].values
        characterDb.ix[thisIndex,"Out_Count"] = len(dbCharacterOut)
        characterDb.ix[thisIndex,"Out_Rating"] = np.median(dbCharacterOut)

characterDb["Rating_Diff"] = characterDb["In_Rating"]-characterDb["Out_Rating"]
#              


