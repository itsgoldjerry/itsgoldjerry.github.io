import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns

print seinfeldDf["Rating"].values

fig, ax = plt.subplots()

avgRating = np.mean(seinfeldDf["Rating"].values)
color = ["green" if i >= avgRating else "red" for i in seinfeldDf["Rating"].values]
seinfeldDf["plotColor"]=color

plt.bar(seinfeldDf.index,seinfeldDf["Rating"].values-avgRating,color=color,alpha=0.2)

characterName = "J. Peterman"
plt.bar(seinfeldDf[seinfeldDf[characterName]==1].index,seinfeldDf[seinfeldDf[characterName]==1]["Rating"].values-avgRating,color=seinfeldDf[seinfeldDf[characterName]==1]["plotColor"])

plt.xlim([seinfeldDf.index[0],seinfeldDf.index[-1]])
plt.ylim([-1.3,1.3])

ax.set_xticklabels([])
ax.set_yticklabels([str(i)[0:4] for i in np.array(ax.get_yticks())+avgRating])

plt.tight_layout()
plt.savefig("test.jpg",dpi=300)

plt.show()