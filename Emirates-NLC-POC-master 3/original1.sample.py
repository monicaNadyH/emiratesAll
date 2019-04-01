import pandas as pd

data = pd.read_csv('data.csv')
data.dropna()

uniques = data['Parent Category'].unique().tolist()

test = []
test_size = 5

for c in uniques:
    df = data[data['Parent Category'] == c]
    test.append(df.sample(test_size))

test = pd.concat(test)
test = test['description']
test.to_csv('test.csv', index=False, header='description')
