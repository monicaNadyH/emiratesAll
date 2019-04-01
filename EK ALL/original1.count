import pandas as pd



data = pd.read_csv('PrimSec.csv')
data.dropna()

sheet = book.sheet_by_index(0)

count = 0
for row in range(sheet.nrows):
    for col in sheet.row_values(row):
        if col.strip() != '':
        	uniques = data['subcategory'].unique().tolist()
            count += 1

counts = data['subcategory'].value_counts()
counts = pd.DataFrame(data=counts)
counts.to_csv('frequencies_primary.csv', header=False)
