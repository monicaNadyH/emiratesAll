import pandas as pd
import time
import json
from watson_developer_cloud.natural_language_understanding_v1 import Features, SentimentOptions
from watson_developer_cloud import NaturalLanguageClassifierV1, NaturalLanguageUnderstandingV1

t = time.time()

print('initializing...')

id_p = 'fc8242x310-nlc-576'
id_s = 'f7ea68x308-nlc-706'

nlc_p = NaturalLanguageClassifierV1(
    username='acbbd09f-7e77-4ec2-aa5c-a5d086796920',
    password='zDjsNJpc6Cho')

nlc_s = NaturalLanguageClassifierV1(
    username='d1cfef9c-b18d-4359-a071-6101348f49a3',
    password='PdDoACWvgAPr')

nlu = NaturalLanguageUnderstandingV1(
    version='2017-02-27',
    username="00c2e2f2-0aa4-4654-b177-e64edd68a8e8",
    password='ygS1R6fBOozq')

print('reading...')
data = pd.read_csv('test.csv')

def sentiment(text):
    try:
        response = nlu.analyze(
            text=text,
            features=Features(sentiment=SentimentOptions()))
        
        sentiment = json.dumps(response['sentiment']['document']['label'])
    except Exception as e:
        print(e)
        sentiment = "No Enough Text"

    return sentiment.strip('"')

def classifyP(text):
    classes = nlc_p.classify(id_p, text)
    c = json.dumps(classes['classes'][0]['class_name'])
    return c.strip('"')

def classifySub(text,  sub):

    classes = nlc_s.classify(id_s, text)
    c = json.dumps(classes['classes'][0]['class_name'])    
    return c.strip('"')

def confidence(text):
    classes = nlc_p.classify(id_p, text)
    c = json.dumps(classes['classes'][0]['confidence'])
    if float(c) < 0.5:
        c = "Please manually Review"
    return c

def clean(text):
    t = str(text).replace('=', '').replace('#', '').replace('*', ' ').replace('-', ' ').replace('+', '').replace('_', '').replace('<', '').replace('>', '')
    " ".join(t.split())
    return t.strip('"')

print('cleaning data...')
data['description'] = data.apply(lambda row: clean(row['description']), axis=1)

print('saving...')
data.to_csv('results.csv', index=False)

print('extracting sentiment...')
data['sentiment'] = data.apply(lambda row: sentiment(row['description']), axis=1)

print('saving...')
data.to_csv('results.csv', index=False)

print('classifying primary...')
data['PCategory'] = data.apply(lambda row: classifyP(row['description']), axis=1)

print('saving...')
data.to_csv('results.csv', index=False)

print('classifying secondary...')
data['SubCategory'] = data.apply(lambda row: classifySub(row['description'], row['PCategory']), axis=1)

print('saving...')
data.to_csv('results.csv', index=False)

print('confidence...')
data['confidence'] = data.apply(lambda row: confidence(row['description']), axis=1)

print('saving...')
data.to_csv('results.csv', index=False)

print ("time taken:" + str(time.time() - t))
