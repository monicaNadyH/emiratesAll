import pandas as pd

def clean(text):
    t = str(text).replace('=', '').replace('#', '').replace('*', ' ').replace('-', ' ').replace('+', '').replace('_', '').replace('<', '').replace('>', '')
    " ".join(t.split())
    return t.strip('"')

data = pd.read_csv('data_primary.csv')
data.dropna()

uniques = data['primary'].unique().tolist()

data['description'] = data.apply(lambda row: clean(row['description']), axis=1) 

counts = data['primary'].value_counts()
counts = pd.DataFrame(data=counts)
counts.to_csv('frequencies_primary.csv', header=False)

new = []
sample_size = 100

data['len'] = data.apply(lambda row: len(row['description']), axis=1) 
data = data[data.len < 1000]
data = data[data.len > 5]
data = data.drop(columns='len')
data.dropna(how='any')

counts = data['primary'].value_counts()
counts = pd.DataFrame(data=counts)
counts = counts.query('primary > @sample_size')
counts.to_csv('frequencies_suitable_primary.csv', header=False)

for c in uniques:
    df = data[data.primary == c]
    if len(df.index) > sample_size:
        new.append(df.sample(sample_size))

new = pd.concat(new)
new.dropna(how='any')
new.to_csv('train_data_primary.csv', index=False, header=False)

test = []
test_size = 10

for c in uniques:
    df = data[data.primary == c]
    if len(df.index) > sample_size:
        test.append(df.sample(test_size))

test = pd.concat(test)
test.dropna(how='any')
test.to_csv('test_data_primary.csv', index=False, header=False)
